import { useState } from "react";
import "./C.css";

const education = [
  {
    title: "Tecnicatura de Programación",
    place: "UTN, Argentina",
    period: "2022 - 2024",
  },
  {
    title: "React Js Avanzado",
    place: "Coderhouse, Argentina",
    period: "2022 - 2023",
  },
  {
    title: "Javascript",
    place: "EducaciónIT, Argentina",
    period: "2021 - 2022",
  },
  {
    title: "HTML y CSS",
    place: "EducacionIT, Argentina",
    period: "2021 - 2022",
  },
];

const experience = [
  {
    title: "Full Stack Developer",
    place: "Moto Repuestos Orovalor",
    period: "Feb. 2026 – Nov. 2026",
  },
  {
    title: "Frontend Developer",
    place: "The Higher Self NFTs - Buenos Aires, Argentina",
    period: "2023 - 2025",
  },
  {
    title: "Technical Support",
    place: "I4Vision - California, Estados Unidos",
    period: "2022 - 2023",
  },
];

const TimelineItem = ({ item }) => (
  <div className="about-qual-data">
    <div className="about-qual-marker" aria-hidden="true">
      <span className="about-qual-rounder"></span>
      <span className="about-qual-line"></span>
    </div>
    <div className="about-qual-card">
      <h3 className="about-qual-title">{item.title}</h3>
      <span className="about-qual-place">{item.place}</span>
      <div className="about-qual-calendar">
        <i className="bx bxs-calendar"></i>
        {item.period}
      </div>
    </div>
  </div>
);

const Calificacion = () => {
  const [activeTab, setActiveTab] = useState("education");
  const items = activeTab === "education" ? education : experience;

  return (
    <div className="about-qual">
      <p className="about-qual-label">Trayectoria</p>

      <div className="about-qual-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "education"}
          className={`about-qual-button${
            activeTab === "education" ? " is-active" : ""
          }`}
          onClick={() => setActiveTab("education")}
        >
          <i className="bx bxs-graduation"></i>
          Educación
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "experience"}
          className={`about-qual-button${
            activeTab === "experience" ? " is-active" : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
          <i className="bx bxs-briefcase"></i>
          Experiencia
        </button>
      </div>

      <div className="about-qual-content" role="tabpanel">
        {items.map((item) => (
          <TimelineItem key={`${item.title}-${item.period}`} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Calificacion;
