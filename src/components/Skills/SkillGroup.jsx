import { useEffect, useMemo, useRef, useState } from "react"

const SLIDE_MS = 600

const SkillGroup = ({
  title,
  skills,
  startIndex = 0,
  waveStep = -1,
  direction = 1,
}) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [snap, setSnap] = useState(false)
  const trackRef = useRef(null)
  const dirClass = direction < 0 ? "skills-wall--reverse" : "skills-wall--forward"
  const length = Math.max(skills.length, 1)

  const crestStart = useMemo(() => {
    if (waveStep < 0 || skills.length < 1) return -1
    const pairCount = Math.max(Math.ceil(skills.length / 2), 1)
    let start = (waveStep % pairCount) * 2
    // Length impar: el último paso alumbra el par final (n-2, n-1)
    if (skills.length % 2 === 1 && start === skills.length - 1 && skills.length > 1) {
      start = skills.length - 2
    }
    return Math.min(start, skills.length - 1)
  }, [waveStep, skills.length])

  const isCrest = (index) => {
    if (crestStart < 0) return false
    if (index === crestStart) return true
    return index === crestStart + 1 && crestStart + 1 < skills.length
  }

  const snapTo = (nextIndex) => {
    setSnap(true)
    setSlideIndex(nextIndex)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setSnap(false))
    })
  }

  // Reset al pausar la ola (cambio de filtro)
  useEffect(() => {
    if (waveStep >= 0) return undefined
    snapTo(0)
    return undefined
  }, [waveStep])

  useEffect(() => {
    if (crestStart < 0) return

    setSlideIndex((prev) => {
      const cycle = Math.floor(Math.max(prev, 0) / length)
      let next = cycle * length + crestStart
      if (next < prev) next += length
      return next
    })
  }, [crestStart, length])

  useEffect(() => {
    if (slideIndex < length) return undefined

    const track = trackRef.current
    if (!track) return undefined

    let settled = false

    const finish = () => {
      if (settled) return
      settled = true
      snapTo(slideIndex % length)
    }

    const onEnd = (event) => {
      if (event.target !== track || event.propertyName !== "transform") return
      finish()
    }

    track.addEventListener("transitionend", onEnd)
    const safety = window.setTimeout(finish, SLIDE_MS + 80)

    return () => {
      settled = true
      track.removeEventListener("transitionend", onEnd)
      window.clearTimeout(safety)
    }
  }, [slideIndex, length])

  const renderSkill = (skill, index, clone) => {
    const skillIndex = startIndex + index
    return (
      <button
        key={`${clone ? "clone" : "base"}-${skill.name}`}
        type="button"
        data-clone={clone ? "true" : undefined}
        className={`skills-data${isCrest(index) ? " is-crest" : ""}`}
        style={{ "--i": skillIndex }}
      >
        <span className="skills-logo">
          <img src={skill.logo} alt="" />
        </span>
        <span className="skills-name">{skill.name}</span>
      </button>
    )
  }

  return (
    <div className="skills-group">
      <h3 className="skills-label">{title}</h3>
      <div
        className={`skills-wall ${dirClass}`}
        style={{
          "--slide-index": slideIndex,
          "--skill-count": skills.length,
        }}
      >
        <div
          ref={trackRef}
          className={`skills-track${snap ? " is-snap" : ""}`}
        >
          {skills.map((skill, index) => renderSkill(skill, index, false))}
          {skills.map((skill, index) => renderSkill(skill, index, true))}
        </div>
      </div>
    </div>
  )
}

export default SkillGroup
