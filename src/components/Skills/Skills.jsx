import { useEffect, useMemo, useRef, useState } from "react"
import SkillGroup from "./SkillGroup"
import { filterOptions, skillGroups } from "./skillsData"
import "./skills.css"

const finePointerQuery = "(hover: hover) and (pointer: fine)"
const WAVE_STEP_MS = 700
const WAVE_STEP_MOBILE_MS = 1400
const mobileQuery = "(max-width: 768px)"

const Skills = () => {
  const sectionRef = useRef(null)
  const mosaicRef = useRef(null)
  const [filter, setFilter] = useState("all")
  const [live, setLive] = useState(false)
  const [waveStep, setWaveStep] = useState(-1)

  const visibleGroups = useMemo(() => {
    if (filter === "all") return skillGroups
    return skillGroups.filter((group) => group.id === filter)
  }, [filter])

  const indexOffsets = useMemo(() => {
    let offset = 0
    return visibleGroups.map((group) => {
      const start = offset
      offset += group.skills.length
      return start
    })
  }, [visibleGroups])

  const visibleCount = useMemo(
    () => visibleGroups.reduce((sum, group) => sum + group.skills.length, 0),
    [visibleGroups]
  )

  useEffect(() => {
    const section = sectionRef.current
    const mosaic = mosaicRef.current
    if (!section || !mosaic) return

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const pointer = window.matchMedia(finePointerQuery)
    let observer

    const moveSpot = (event) => {
      const group = event.target.closest(".skills-group")
      section.querySelectorAll(".skills-group.is-lit").forEach((node) => {
        if (node !== group) node.classList.remove("is-lit")
      })
      if (!group || !section.contains(group)) return
      group.classList.add("is-lit")
    }

    const clearSpot = () => {
      section.querySelectorAll(".skills-group.is-lit").forEach((node) => {
        node.classList.remove("is-lit")
      })
    }

    const clearActive = () => {
      section.querySelectorAll(".skills-data.is-active").forEach((node) => {
        node.classList.remove("is-active")
      })
      section.querySelectorAll(".skills-group.has-active").forEach((node) => {
        node.classList.remove("has-active")
      })
    }

    const holdGlow = (event) => {
      const tile = event.target.closest(".skills-data")
      if (!tile || !section.contains(tile)) {
        clearActive()
        return
      }
      const wasActive = tile.classList.contains("is-active")
      clearActive()
      if (wasActive) return
      tile.classList.add("is-active")
      tile.closest(".skills-group")?.classList.add("has-active")
    }

    const bindPointer = () => {
      section.removeEventListener("mousemove", moveSpot)
      section.removeEventListener("mouseleave", clearSpot)
      section.removeEventListener("click", holdGlow)
      section.classList.toggle("skills-touch", !pointer.matches)
      if (pointer.matches) {
        section.classList.remove("skills-touch")
        clearSpot()
        clearActive()
        section.addEventListener("mousemove", moveSpot)
        section.addEventListener("mouseleave", clearSpot)
        return
      }
      clearSpot()
      section.addEventListener("click", holdGlow)
    }

    if (motion.matches) {
      section.classList.add("skills-live", "skills-static")
      setLive(false)
    } else {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return
          section.classList.add("skills-live")
          setLive(true)
          observer.disconnect()
        },
        { threshold: 0.15 }
      )
      observer.observe(mosaic)
    }

    bindPointer()
    pointer.addEventListener("change", bindPointer)

    return () => {
      observer?.disconnect()
      pointer.removeEventListener("change", bindPointer)
      section.removeEventListener("mousemove", moveSpot)
      section.removeEventListener("mouseleave", clearSpot)
      section.removeEventListener("click", holdGlow)
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    section.querySelectorAll(".skills-group.is-lit, .skills-group.has-active").forEach((node) => {
      node.classList.remove("is-lit", "has-active")
    })
    section.querySelectorAll(".skills-data.is-active").forEach((node) => {
      node.classList.remove("is-active")
    })
    setWaveStep(-1)
  }, [filter])

  useEffect(() => {
    if (!live || visibleGroups.length < 1) {
      setWaveStep(-1)
      return
    }

    const mobile = window.matchMedia(mobileQuery)
    let step = 0
    let timer

    const stepMs = () => (mobile.matches ? WAVE_STEP_MOBILE_MS : WAVE_STEP_MS)

    const tick = () => {
      setWaveStep(step)
      step += 1
      timer = window.setTimeout(tick, stepMs())
    }

    timer = window.setTimeout(tick, 550)

    return () => {
      window.clearTimeout(timer)
    }
  }, [live, visibleGroups.length, filter])

  return (
    <section ref={sectionRef} className="skill section" id="Tecnologias">
      <h2 className="section-title">
        Tecnologías<i className="bx bx-badge-check"></i>
      </h2>
      <span className="section-subtitle">Nivel Técnico</span>

      <div className="skills-filters container" role="tablist" aria-label="Filtrar tecnologías">
        {filterOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={filter === option.id}
            className={`skills-filter${filter === option.id ? " is-active" : ""}`}
            onClick={() => setFilter(option.id)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div
        ref={mosaicRef}
        className="skill-mosaic container"
        style={{ "--visible-count": visibleCount }}
      >
        {visibleGroups.map((group, index) => (
          <SkillGroup
            key={group.id}
            title={group.label}
            skills={group.skills}
            startIndex={indexOffsets[index]}
            waveStep={waveStep}
            direction={index % 2 === 0 ? 1 : -1}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
