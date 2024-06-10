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

        <Swiper className="rec-container"
        loop={true}
        slidesPerView={1}
        spaceBetween={24}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
         modules={[Pagination]}
         
         > 
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