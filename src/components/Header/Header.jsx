import { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  return (
    <>
      <header className={`header ${Toggle ? "active-menu" : ""}`}>
        <nav className="nav container">
          <a href="index.html" className="nav-logo">JMayora</a>

          <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
            <ul className="nav-list grid">
              <li className="nav-item">
                <a href="#Inicio" onClick={() => showMenu(!Toggle)} className="nav-link active-link">
                  <i className="uil uil-estate nav-icon"></i> Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#Informacion" onClick={() => showMenu(!Toggle)} className="nav-link active-link">
                  <i className="uil uil-user nav-icon"></i> Informacion
                </a>
              </li>
              <li className="nav-item">
                <a href="#Tecnologias" onClick={() => showMenu(!Toggle)} className="nav-link active-link">
                  <i className="uil uil-file-alt nav-icon"></i> Tecnologías
                </a>
              </li>
              <li className="nav-item">
                <a href="#Proyectos" onClick={() => showMenu(!Toggle)} className="nav-link active-link">
                  <i className="uil uil-scenery nav-icon"></i> Portafolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#Contactame" onClick={() => showMenu(!Toggle)} className="nav-link active-link">
                  <i className="uil uil-message nav-icon"></i> Contactame
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav-close" onClick={() => showMenu(!Toggle)}></i>
          </div>
          <div className={`nav-toggle ${Toggle ? "hidden" : ""}`} onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>
      <div className="overlay" onClick={() => showMenu(false)}></div>
    </>
  );
};

export default Header;
