import Cv from "../../asset/Joeyker-Mayora-C.pdf";
import "./home.css";

const Data = () => {
  return (
    <div className="home-data">
      <h1 className="home-title">
        JoeykerMayora
        <i className="bx bxs-badge-check"></i>
      </h1>
      <h3 className="home-subtitle">Full Stack Developer</h3>
      <p className="descripcion">"En el mundo del desarrollo de software, cada línea de código es una oportunidad para marcar la diferencia."</p>
      <a download="" href={Cv} className="btn">
        Descargar Cv <i className="uil uil-file-download-alt"></i>
      </a>
    </div>
  )
}

export default Data
