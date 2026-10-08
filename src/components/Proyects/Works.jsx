import { useState } from 'react';
import CrewClock from '../../asset/Img/crewclock.jpg';
import Medyplan from '../../asset/Img/medyplan.png';
import Rifas from '../../asset/Img/rifas.png';
import Teckologys from '../../asset/Img/Teckologys.png';
import Gramos from '../../asset/Img/Gramos.png';


import './proyects.css';

const Works = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  // Array de proyectos
  const projects = [
    {
      id: 1,
      title: 'CrewClock',
      img: CrewClock,
      description: 'Todo lo esencial para dirigir la plantilla en obra. Presencia verificable en cada sitio, con fichaje por QR y GPS, horas claras e informes listos para nómina, sin partes en papel.',
      features: [
        { label: 'App del trabajador', detail: 'QR, GPS y confirmación inmediata.' },
        { label: 'Panel administrativo', detail: 'Obras, plantilla, fichajes y timesheet.' },
        { label: 'Obras en mapa', detail: 'Pin, radio de validación y QR imprimible.' },
        { label: 'Horas claras', detail: 'Entrada y salida emparejadas automáticamente.' },
        { label: 'Exportación', detail: 'Informes listos para nómina en XLSX.' },
      ],
      stack: ['Next.js', 'Supabase', 'Docker', 'Tailwind', 'Redis', 'Postgres', 'Prisma'],
      demo: 'https://www.crwclock.com/',
      code: '',
    },
    {
      id: 2,
      title: 'Medyplan',
      img: Medyplan,
      description: 'Pacientes, médicos, farmacias y laboratorios en una sola plataforma. Una red para captar, conectar y canjear.',
      features: [
        { label: 'Pacientes con apoyo', detail: 'Descuento real en farmacia aliada. Registro simple, código en el celular.' },
        { label: 'Médicos conectados', detail: 'Récipes virtuales con código. Tus pacientes llegan al beneficio sin fricción.' },
        { label: 'Farmacias aliadas', detail: 'Canje en caja en segundos. Más pacientes del programa en tu mostrador.' },
        { label: 'Labs con control', detail: 'Programa trazable de punta a punta. Evidencia, no estimaciones.' },
      ],
      flow: {
        title: 'Así se vive',
        intro: 'Tres actores. Un mismo producto. De la consulta a la caja: apoyo al paciente con evidencia para el programa.',
        steps: [
          { label: 'Médicos', detail: 'El médico prescribe. Récipe digital con código. Tus pacientes lo reciben al instante.' },
          { label: 'Pacientes', detail: 'El paciente canjea. Código o QR en el celular. Descuento en la farmacia aliada.' },
          { label: 'Farmacias', detail: 'La farmacia aplica. Validación en caja en segundos. La red gana confianza y volumen.' },
        ],
      },
      stack: [],
      demo: 'https://www.medyplan.online/',
      code: '',
    },
    {
      id: 3,
      title: 'WhatsOrder',
      img: Gramos,
      description: 'Sitio web de pedidos en línea con envío automático a WhatsApp, diseñado para que los clientes realicen sus pedidos de manera rápida y sencilla desde cualquier dispositivo. La plataforma permite seleccionar productos, personalizar opciones y enviar la orden directamente al negocio a través de WhatsApp, agilizando la comunicación y reduciendo errores. Su diseño intuitivo y responsivo ofrece una experiencia de usuario clara y eficiente.',
      stack: ['React Js', 'Tailwind', 'Javascript', 'MongoDb','Cloudinary'],
      demo: 'https://www.390gramosymassabor.com/',
      code: '',
    },
    {
      id: 4,
      title: 'Ticket Raffle',
      img: Rifas,
      description: 'Sitio web de gestión de sorteos de tickets, diseñado para que los usuarios puedan seleccionar sus boletos de forma aleatoria y recibirlos directamente por correo electrónico. La plataforma automatiza todo el proceso de compra y asignación de tickets, asegurando transparencia en los sorteos y comodidad para los participantes. Cuenta con un flujo intuitivo que permite comprar, recibir y validar los tickets sin complicaciones, brindando una experiencia segura, rápida y confiable tanto para los usuarios como para los organizadores del sorteo.',
      stack: ['React Js', 'Tailwind', 'Javascript', 'MongoDb', 'Nodejs', 'Express'],
      demo: 'https://www.rifas24.com/',
      code: '',
    },
    {
      id: 5,
      title: 'Website Corporate',
      img: Teckologys,
      description: 'Sitio web corporativo desarrollado para una empresa de servicios, con el objetivo de fortalecer su presencia digital y transmitir una imagen profesional, clara y confiable. La plataforma presenta de forma ordenada la información clave de la empresa, sus servicios, valores y canales de contacto, priorizando una navegación intuitiva, diseño responsivo y una experiencia de usuario óptima en distintos dispositivos.',
      stack: ['React Js', 'Tailwind', 'Javascript'],
      demo: 'https://teckologys.vercel.app/',
      code: '',
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

              {project.features && (
                <ul className="modal-features">
                  {project.features.map((feature) => (
                    <li key={feature.label}>
                      <strong>{feature.label}</strong>
                      <span>{feature.detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {project.flow && (
                <div className="modal-flow">
                  <h4 className="modal-flow-title">{project.flow.title}</h4>
                  <p className="modal-description">{project.flow.intro}</p>
                  <ul className="modal-features">
                    {project.flow.steps.map((step) => (
                      <li key={step.label}>
                        <strong>{step.label}</strong>
                        <span>{step.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.stack.length > 0 && (
                <div className="content-stack">
                  <p className="item-stack">Stack:
                    {project.stack.map((tech, idx) => (
                      <span key={idx} className="stack">{tech}</span>
                    ))}
                  </p>
                </div>
              )}

              {(project.demo || project.code) && (
                <div className="modal-link">
                  {project.demo && (
                    <a href={project.demo} className="modal-button" target="_blank" rel="noopener noreferrer">
                      Demo <i className='bx bx-right-arrow-alt modal-button-icon'></i>
                    </a>
                  )}
                  {project.code && (
                    <a href={project.code} className="modal-button" target="_blank" rel="noopener noreferrer">
                      Código Fuente <i className='bx bx-right-arrow-alt modal-button-icon'></i>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
