import Works from './Works';
import './proyects.css';

const Proyects = () => {
  return (
    <section id="Proyectos" className="project section">
      <h2 className="section-title">Portafolio<i class='bx bx-badge-check'></i> </h2>
      <span className="section-subtitle">Proyectos</span>
      
      <Works/>
    </section>
  )
}

export default Proyects