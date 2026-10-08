
import "./info.css";
import Cv from "../../asset/Joeyker-Mayora-C.pdf";
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
                Full Stack Engineer con amplia trayectoria en la concepción, arquitectura y desarrollo de plataformas SaaS y sistemas B2B de alto impacto. Especializado en transformar cuellos de botella operativos en soluciones de software escalables, integrando geolocalización, trazabilidad en tiempo real, validación automatizada y conciliación financiera.
 

                </p>
                <a download="" href={Cv} className="btn-cv button button-flex">Descargar Cv <i className="uil uil-file-download-alt"></i></a>
            </div>
        </div>
        <Calificacion/>
        
    </section>
  )
}

export default Info