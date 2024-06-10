import Backend from "./Backend"
import Frontend from "./Frontend"

import "./skills.css"




const Skills = () => {
  return (
    <section className="skill section" id="Tecnologias">
        <h2 className="section-title">Tecnologías<i class='bx bx-badge-check'></i> </h2>
        <span className="section-subtitle">Nivel Técnico</span>

        <div className="skill-container container grid">
           
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}

export default Skills