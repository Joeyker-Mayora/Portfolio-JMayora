import { useEffect, useState } from "react";
import Social from "../Home/Social";
import Cv from "../../asset/Joeyker-Mayora-C.pdf";
import "./profile.css";

const Profile = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const home = document.getElementById("Inicio");
      const threshold = home ? home.offsetHeight * 0.42 : 280;
      setVisible(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("profile-sticky-on", visible);
    return () => document.body.classList.remove("profile-sticky-on");
  }, [visible]);

  return (
    <aside
      className={`profile-rail${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      inert={visible ? undefined : ""}
    >
      <div className="profile-card">
        <div className="profile-img" role="img" aria-label="Joeyker Mayora"></div>
        <h1 className="profile-title">
          JoeykerMayora
          <i className="bx bxs-badge-check"></i>
        </h1>
        <p className="profile-subtitle">Full Stack Developer</p>
        <Social className="profile-social" />
        <a download="" href={Cv} className="profile-cv">
          Descargar Cv <i className="uil uil-file-download-alt"></i>
        </a>
      </div>
    </aside>
  );
};

export default Profile;
