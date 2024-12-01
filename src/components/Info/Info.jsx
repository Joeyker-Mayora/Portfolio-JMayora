
import "./info.css";
import Cv from '../../asset/JoeykerMayoraFront.pdf'
import Calificacion from "./Calificacion";


const Info = () => {
  return (
    <section id="Informacion" className="info section">
        <h2 className="section-title">Información<i class='bx bx-badge-check'></i> </h2>
        <span className="section-subtitle">Profesional</span>
        <div className="info-container container grid">
            <div className="info-img"></div>
            <div className="info-data">
               
                <p className="info-descripcion">
                Desarrollador de Software con 1 año y 7 de experiencia, especializado en frontend, me dedico a crear interfaces de usuario dinámicas y atractivas que mejoran la experiencia del usuario. Dominio avanzado de frameworks como React y Angular. Mi objetivo es combinar diseño y funcionalidad para construir productos que no solo sean visualmente impactantes, sino también altamente funcionales.
                </p>
                <a download="" href={Cv} className="btn-cv button button-flex">Descargar Cv <i class="uil uil-file-download-alt"></i></a>
            </div>
        </div>
        <Calificacion/>
        
    </section>
  )
}

export default Info