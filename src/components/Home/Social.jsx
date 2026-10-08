import "./home.css";



const Social = ({ className = "" }) => {
  return (
    <div className={`home-social ${className}`.trim()}>

        <a href="https://www.linkedin.com/in/joeyker-mayora-avilez-3b9993265/"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer">
          <i className="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/Joeyker-Mayora"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer">
            <i className="uil uil-github"></i>
        </a>

        <a href="mailto:oswaldo_avilez@outlook.es"
        className="home-social-icon">
          <i className="bx bxs-envelope"></i>
        </a>

        <a href="https://wa.me/1127029297"
        className="home-social-icon"
        target="_blank"
        rel="noreferrer">
          <i className="uil uil-whatsapp-alt"></i>
        </a>

    </div>
  )
}
export default Social
