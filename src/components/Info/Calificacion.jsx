import { useState } from "react";
import "./C.css";

const Calificacion = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }
  return (
    <section className="q section">
        <h2 className="section-title">Calificación<i class='bx bx-badge-check'></i></h2>
        <span className="section-subtitle">Crecimiento Profesional</span>

        <div className="q-container container">
            <div className="q-tabs">
                <div className= {toggleState === 1 ? "q-button q-active button-flex" : "q-button button-flex"} 
                onClick={() => toggleTab(1)}>
                <i class='bx bxs-graduation icon'></i> Educación

                </div>
                <div className= {toggleState === 2 ? "q-button q-active button-flex" : "q-button button-flex"}
                onClick={() => toggleTab(2)}>
                <i class='bx bxs-briefcase icon'></i> Experiencia
                </div>
            </div>


            <div className="q-sections">
                <div className={toggleState === 1 ? "q-content q-content-active" : "q-content"}
                onClick={() => toggleTab(1)}>
                    <div className="q-data">
                        <div>
                            <h3 className="q-title">Next Js</h3>
                            <span className="q-subtitle">
                                Udemy - Plataforma Digital
                            </span>
                            <div className="q-calendar">
                            <i class='bx bxs-calendar'></i>  
                            2023 - Al presente
                            </div>
                        </div>

                        <div>
                            <span className="q-rounder"></span>
                            <span className="q-line"></span>
                        </div>
                    </div>
                    <div className="q-data">
                        <div></div>
                        <div>
                            <span className="q-rounder"></span>
                            <span className="q-line"></span>
                        </div>

                        <div>
                            <h3 className="q-title">React Js Avanzado</h3>
                            <span className="q-subtitle">
                                Coderhouse, Argentina
                            </span>
                            <div className="q-calendar">
                            <i class='bx bxs-calendar'></i>  
                            2022 - 2023
                            </div>
                        </div>

                        
                    </div>
                    <div className="q-data">
                        <div>
                            <h3 className="q-title">Javascript</h3>
                            <span className="q-subtitle">
                                EducaciónIT, Argentina
                            </span>
                            <div className="q-calendar">
                            <i class='bx bxs-calendar'></i>  
                            2021 - 2022
                            </div>
                        </div>

                        <div>
                            <span className="q-rounder"></span>
                            <span className="q-line"></span>
                        </div>
                    </div>
                    <div className="q-data">
                        <div></div>
                        <div>
                            <span className="q-rounder"></span>
                            <span className="q-line"></span>
                        </div>

                        <div>
                            <h3 className="q-title">HTML y CSS</h3>
                            <span className="q-subtitle">
                               EducacionIT, Argentina
                            </span>
                            <div className="q-calendar">
                            <i class='bx bxs-calendar'></i>  
                            2021 - 2022
                            </div>
                        </div>

                        
                    </div>
                    
                    

                </div>

                <div className={toggleState === 2 ? "q-content q-content-active" : "q-content"}
                onClick={() => toggleTab(2)}>
                    <div className="q-data">
                        <div>
                            <h3 className="q-title">Frontend Developer</h3>
                            <span className="q-subtitle">
                                The Higher Self NFTs - Buenos Aires, Argentina
                            </span>
                            <div className="q-calendar"><i class='bx bxs-calendar'></i> 2021 - 2023
                            </div>
                        </div>

                        <div>
                            <span className="q-rounder"></span>
                            <span className="q-line"></span>
                        </div>
                    </div>
                    <div className="q-data">
                        <div></div>
                        <div>
                            <span className="q-rounder"></span>
                            <span className="q-line"></span>
                        </div>

                        <div>
                            <h3 className="q-title">Technical Support</h3>
                            <span className="q-subtitle">
                                I4Vision - California, Estados Unidos
                            </span>
                            <div className="q-calendar">
                            <i class='bx bxs-calendar'></i>  
                            2021 - 2022
                            </div>
                        </div>

                        
                    </div>
                    
                    
                    

                </div>

               
            </div>
        </div>
    </section>
  )
}

export default Calificacion