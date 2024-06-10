import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Social from "./Social";
import "./home.css";





const Home = () => {
  return (
    <section className="home section" id="Inicio">
        <div className="home-container container grid">
            <div className="home-content grid">
                <Social/>

                <div className="home-img"></div>

                
                <Data/>
                
                
            </div>
            <ScrollDown/>
        </div>
    </section>
    
  )
}

export default Home