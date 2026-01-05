import { useState } from 'react';
import Comerce from '../../asset/Img/comerce.png';
import Turnos from '../../asset/Img/turnos.png';
import Rifas from '../../asset/Img/rifas.png';
import Teckologys from '../../asset/Img/Teckologys.png';

import './proyects.css';

const Works = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  // Array de proyectos
  const projects = [
    {
      id: 1,
      title: 'Management Patient',
      img: Turnos,
      description: 'Está diseñado para optimizar la gestión de la atención médica. Con una interfaz intuitiva y fácil de usar, los profesionales de la salud pueden acceder y actualizar información de los pacientes en tiempo real.',
      stack: ['Html', 'Css', 'Javascript'],
      demo: 'https://turnos-js.vercel.app/',
      code: 'https://github.com/Joeyker-Mayora/TurnosJs',
    },
    {
      id: 2,
      title: 'Ticket Raffle',
      img: Rifas,
      description: 'Sistema web de gestión de sorteos de tickets, diseñado para que los usuarios puedan seleccionar sus boletos de forma aleatoria y recibirlos directamente por correo electrónico. La plataforma automatiza todo el proceso de compra y asignación de tickets, asegurando transparencia en los sorteos y comodidad para los participantes. Cuenta con un flujo intuitivo que permite comprar, recibir y validar los tickets sin complicaciones, brindando una experiencia segura, rápida y confiable tanto para los usuarios como para los organizadores del sorteo.',
      stack: ['React Js', 'Tailwind', 'Javascript', 'MongoDb', 'Nodejs', 'Express'],
      demo: 'https://www.rifas24.com/',
      code: '',
    },
    {
      id: 3,
      title: 'Website Corporate',
      img: Teckologys,
      description: 'Sitio web corporativo desarrollado para una empresa de servicios, con el objetivo de fortalecer su presencia digital y transmitir una imagen profesional, clara y confiable. La plataforma presenta de forma ordenada la información clave de la empresa, sus servicios, valores y canales de contacto, priorizando una navegación intuitiva, diseño responsivo y una experiencia de usuario óptima en distintos dispositivos.',
      stack: ['React Js', 'Tailwind', 'Javascript'],
      demo: 'https://teckologys.vercel.app/',
      code: '',
    },
    {
      id: 4,
      title: 'E-Commerce',
      img: Comerce,
      description: 'Está construido con un enfoque en la usabilidad y el diseño moderno. La estructura de la página permite una navegación intuitiva, con filtros avanzados y búsqueda optimizada.',
      stack: ['Html', 'Css', 'Javascript'],
      demo: 'https://e-comerce-js-gamma.vercel.app/',
      code: 'https://github.com/Joeyker-Mayora/E-comerceJs',
    },
  ];

  return (
    <div className="work-container container grid">
      {projects.map((project) => (
        <div key={project.id}>
          {/* Card */}
          <div className="work-card" onClick={() => openModal(project.id)}>
            <img src={project.img} alt={project.title} className="work-img" />
            <h3 className="work-title">{project.title}</h3>
          </div>

          {/* Modal */}
          <div className={activeModal === project.id ? 'modal modal-active' : 'modal'}>
            <div className="modal-content">
              <i onClick={closeModal} className="uil uil-times modal-close"></i>
              <h3 className="modal-title">{project.title}</h3>
              <img src={project.img} alt={project.title} className="work-img-modal" />
              <p className="modal-description">{project.description}</p>

              <div className="content-stack">
                <p className="item-stack">Stack:
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="stack">{tech}</span>
                  ))}
                </p>
              </div>

              <div className="modal-link">
                <a href={project.demo} className="modal-button" target="_blank" rel="noopener noreferrer">
                  Demo <i className='bx bx-right-arrow-alt modal-button-icon'></i>
                </a>
                <a href={project.code} className="modal-button" target="_blank" rel="noopener noreferrer">
                  Código Fuente <i className='bx bx-right-arrow-alt modal-button-icon'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
