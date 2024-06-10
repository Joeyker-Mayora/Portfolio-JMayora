import "./skills.css"
//import "./skills2.css"
import SkillsHtml from "../../asset/Img/html.png"
import SkillsCss from "../../asset/Img/css.png"
import SkillsJs from "../../asset/Img/js.png"
import SkillsXjs from "../../asset/Img/R.png"
import SkillsRex from "../../asset/Img/re.png"
import SkillsTw from "../../asset/Img/ta.png"
import SkillsBt from "../../asset/Img/Bootstrap_(front-end_framework)-Logo.wine.png"

const Frontend = () => {
  
  return (
    <div className="skills-content">
        <h3 className="skills-title">Frontend Developer</h3>

        <div className="skills-box">
          <div className="div skills-group">
            <div className="skills-data">
                <img 
                  width="40px"
                  height="40px"
                  src={SkillsHtml}
                  alt="img"
                />  

                <div>
                  <h4 className="skills-name">HTML</h4>
                </div>
              </div>
              <div className="skills-data">
                    <img 
                      width="40px"
                      height="40px"
                      src={SkillsCss}
                      alt="img"
                    />  

                   <div>
                        <h4 className="skills-name">CSS</h4>
                   </div>
                </div>
                <div className="skills-data">
                    <img 
                      width="30px"
                      height="30px"
                      src={SkillsJs}
                      alt="img"
                    />  

                   <div>
                        <h4 className="skills-name">Javascript</h4>
                   </div>
                </div>
                <div className="skills-data">
                    <img 
                      width="60px"
                      height="60px"
                      src={SkillsBt}
                      alt="img"
                    />  

                   <div>
                        <h4 className="skills-name">Bootsrap</h4>
                   </div>
                </div>
          </div>

            <div className="skills-group">
                  <div className="skills-data">
                    <img 
                      width="40px"
                      height="40px"
                      src={SkillsXjs}
                      alt="img"
                    />  

                   <div>
                        <h4 className="skills-name">React Js</h4>
                   </div>
                </div>
                <div className="skills-data">
                    <img 
                      width="40px"
                      height="40px"
                      src={SkillsRex}
                      alt="img"
                    />  

                   <div>
                        <h4 className="skills-name">Redux</h4>
                   </div>
                </div>
                <div className="skills-data">
                    <img 
                      width="40px"
                      height="40px"
                      src={SkillsTw}
                      alt="img"
                    />  

                   <div>
                        <h4 className="skills-name">Tailwind CSS</h4>
                   </div>
                </div>
                
                
               
            </div>
        </div>
    </div>
  )
}

export default Frontend