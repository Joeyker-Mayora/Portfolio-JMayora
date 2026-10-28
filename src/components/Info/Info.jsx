import "./info.css";
import Cv from "../../asset/Joeyker-Mayora-C.pdf";
import Social from "../Home/Social";
import Calificacion from "./Calificacion";

const Info = () => {
  return (
    <section id="Informacion" className="info section">
      <h2 className="section-title">
        Información<i className="bx bx-badge-check"></i>
      </h2>
      <span className="section-subtitle">Profesional</span>

      <div className="info-panel container">
        <div className="info-media">
          <div
            className="info-img"
            role="img"
            aria-label="Joeyker Mayora"
          ></div>
        </div>

        <div className="info-copy">
          <h3 className="info-name">
            JoeykerMayora
            <i className="bx bxs-badge-check"></i>
          </h3>
          <p className="info-role">Full Stack Developer</p>
          <p className="info-descripcion">
            Full Stack Engineer con amplia trayectoria en la concepción,
            arquitectura y desarrollo de plataformas SaaS y sistemas B2B de alto
            impacto. Especializado en transformar cuellos de botella operativos
            en soluciones de software escalables, integrando geolocalización,
            trazabilidad en tiempo real, validación automatizada y conciliación
            financiera.
          </p>
          <div className="info-actions">
            <Social className="info-social" />
            <a download="" href={Cv} className="info-cv">
              Descargar Cv <i className="uil uil-file-download-alt"></i>
            </a>
          </div>
        </div>

        <div className="info-path">
          <Calificacion />
        </div>
      </div>
    </section>
  );
};

export default Info;
