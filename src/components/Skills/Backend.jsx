import "./skills.css"
import SkillsNode from "../../asset/Img/nodejs-1-logo-png-transparent.png"
import SkillsEx from "../../asset/Img/express-js.png"
import SkillsDB from "../../asset/Img/2945120.webp"



const Backend = () => {
  return (
    <div className="skills-content">
        <h3 className="skills-title">Backend Developer</h3>
        <div className="skills-box">
            <div className="skills-group">
              <div className="skills-data">
                  <img 
                      width="50px"
                      height="50px"
                      src={SkillsNode}
                      alt="img"
                    />
                  <div>
                    <h4 className="skills-name"> 
                      Node
                    </h4>
                  </div>
              </div>
                <div className="skills-data">
                  <img 
                      width="40px"
                      height="40px"
                      src={SkillsEx}
                      alt="img"
                    />
                  <div>
                    <h4 className="skills-name"> 
                      Express Js
                    </h4>
                  </div>
                </div>
                
                
                
            </div>

            <div className="skills-group">
            <div className="skills-data">
                  <img 
                      width="30px"
                      height="30px"
                      src={SkillsDB}
                      alt="img"
                    />
                  <div>
                    <h4 className="skills-name"> 
                      MongoDB
                    </h4>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Backend