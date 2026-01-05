
import "./info.css";
import Cv from '../../asset/JoeykerMayoraFullStack.pdf'
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
               Desarrollador Full Stack con experiencia en el diseño y desarrollo de aplicaciones web modernas, abarcando tanto el frontend como el backend. Especializado en la construcción de interfaces eficientes y orientadas al usuario, así como en el desarrollo de APIs REST, manejo de bases de datos y arquitectura de aplicaciones escalables.
 

                </p>
                <a download="" href={Cv} className="btn-cv button button-flex">Descargar Cv <i class="uil uil-file-download-alt"></i></a>
            </div>
        </div>
        <Calificacion/>
        
    </section>
  )
}

export default Info