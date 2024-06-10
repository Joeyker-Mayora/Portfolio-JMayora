import'./footer.css';
import'../Header/header.css';
const Footer = () => {
  return (
    <footer id='Footer' className="footer">
        <div className="footer-container container">
            <h1 className="footer-title">JMayora</h1>

            <ul className="footer-list">
                <li>
                    <a href="#Informacion" className="footer-link">Información</a>
                </li>

                <li>
                    <a href="#Tecnologias" className="footer-link">Tecnologías</a>
                </li>

                <li>
                    <a href="#Proyectos" className="footer-link">Proyectos</a>
                </li>

            </ul>

            <div className="footer-social">
                <a href="https://www.linkedin.com/in/joeyker-mayora-avilez-3b9993265/" 
                className="home-social-icon" >
                <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/Joeyker-Mayora" 
                className="home-social-icon " >
                    <i class="uil uil-github"></i>
                </a>

                <a href="mailto:oswaldo_avilez@outlook.es" 
                className="home-social-icon" >
                <i class='bx bxs-envelope'></i>
                </a>

                <a href="https://wa.me/1127029297" 
                className="home-social-icon" >
                    <i class="uil uil-whatsapp-alt"></i>       
                </a>    
            </div>
            <span className='footer-copy'>© 2021 Joeyker Mayora.</span>
        </div>
    </footer>
  )
}

export default Footer