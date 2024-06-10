import "./home.css";



const Social = () => {
  return (
    <div className='home-social'>

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
  )
}
export default Social
