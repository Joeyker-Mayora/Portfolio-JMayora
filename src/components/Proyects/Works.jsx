import { useState } from 'react';
import Comerce from '../../asset/Img/comerce.png'
import Turnos from '../../asset/Img/turnos.png'
import './proyects.css';



const Works = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="work-container container grid">
      <div className="work-card" onClick={() => openModal(1)}>
        <img src={Turnos} alt="" className="work-img" />
        <h3 className="work-title">Management Patient</h3>
      </div>

      <div className={activeModal === 1 ? 'modal modal-active' : 'modal'}>
        <div className="modal-content">
          <i onClick={closeModal} className="uil uil-times modal-close"></i>
          <h3 className="modal-title">Management Patient</h3>
          <img src={Turnos} alt="" className="work-img-modal" />
          <p className="modal-description">está diseñado para optimizar la gestión de la atención médica. Con una interfaz intuitiva y fácil de usar, los profesionales de la salud pueden acceder y actualizar información de los pacientes en tiempo real.</p>
          <div className="content-stack">
            <p className="item-stack">Stack:
              <span className="stack">Html</span>
              <span className="stack">Css</span>
              <span className="stack">Javascript</span>
            </p>
          </div>
          <div className="modal-link">
            <a href="https://turnos-js.vercel.app/" className="modal-button">Demo <i className='bx bx-right-arrow-alt modal-button-icon'></i></a>
            <a href="https://github.com/Joeyker-Mayora/TurnosJs" className="modal-button">Codigo Fuente <i className='bx bx-right-arrow-alt modal-button-icon'></i></a>
          </div>
        </div>
      </div>

      <div className="work-card" onClick={() => openModal(2)}>
        <img src={Comerce} alt="" className="work-img" />
        <h3 className="work-title">E-Commerce</h3>
      </div>

      <div className={activeModal === 2 ? 'modal modal-active' : 'modal'}>
        <div className="modal-content">
          <i onClick={closeModal} className="uil uil-times modal-close"></i>
          <h3 className="modal-title">E-Commerce</h3>
          <img src={Comerce} alt="" className="work-img-modal" />
          <p className="modal-description">Está construido con un enfoque en la usabilidad y el diseño moderno. La estructura de la página permite una navegación intuitiva, con filtros avanzados y búsqueda optimizada.</p>
          <div className="content-stack">
            <p className="item-stack">Stack:
              <span className="stack">Html</span>
              <span className="stack">Css</span>
              <span className="stack">Javascript</span>
            </p>
          </div>
          <div className="modal-link">
            <a href="https://e-comerce-js-gamma.vercel.app/" className="modal-button">Demo <i className='bx bx-right-arrow-alt modal-button-icon'></i></a>
            <a href="https://github.com/Joeyker-Mayora/E-comerceJs" className="modal-button">Codigo Fuente <i className='bx bx-right-arrow-alt modal-button-icon'></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;