import { DataTest } from './DataTest'
import './testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section  className="testimonials container section">
        <h2 className="section-title">Recomendaciones<i class='bx bx-badge-check'></i> </h2>
        <span className="section-subtitle">Clientes, Acesores y Supervisores</span>

        <Swiper className="rec-container "> 
            {DataTest.map(({id, image, name, profession, description}) => {
              return (
                <SwiperSlide key={id} className="rec-card">
                  <img 
                  src={image} 
                  alt={name}
                  className='rec-img' />

                  <h3 className="rec-name"> {name} </h3>
                  <span className="rec-profession"> {profession} </span>

                  <p className="rec-des"> {description} </p>
                </SwiperSlide>
              )
            })}
        </Swiper>
       
        
    </section>
  )
}

export default Testimonials