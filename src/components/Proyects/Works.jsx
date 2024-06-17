import Comerce from '../../asset/Img/comerce.png'
import Turnos from '../../asset/Img/turnos.png'
import './proyects.css';



const Works = () => {
  return (
    <div className="work-container container grid">
          <div className="work-card">
            <img src={Turnos} alt="" className="work-img" />
            <h3 className="work-title">Patient Management</h3>
            <button className='work-button'>Ver mas <i class='bx bx-right-arrow-alt work-button-icon'></i></button>
          </div>

          <div className="work-card">
            <img src={Comerce} alt="" className="work-img" />
            <h3 className="work-title">E-commerce</h3>
            <button className='work-button'>Ver mas <i class='bx bx-right-arrow-alt work-button-icon'></i></button>
          </div>

          <div className="work-card">
            <img src={Turnos} alt="" className="work-img" />
            <h3 className="work-title">Patient Management</h3>
            <button className='work-button'>Ver mas <i class='bx bx-right-arrow-alt work-button-icon'></i></button>
          </div>

          <div className="work-card">
            <img src={Turnos} alt="" className="work-img" />
            <h3 className="work-title">Patient Management</h3>
            <button className='work-button'>Ver mas <i class='bx bx-right-arrow-alt work-button-icon'></i></button>
          </div>
    </div>
    
  )
}

export default Works