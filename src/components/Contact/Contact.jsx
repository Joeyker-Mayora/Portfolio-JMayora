import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import'./contact.css';

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tkiglu8', 'template_r0lnjil', form.current, 'qizGgZQ3iGe96C32r')
      .then((result) => {
          console.log(result.text);
          alert('Correo enviado exitosamente!');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          alert('Ocurrió un error al enviar el correo.');
      });
  };

  return (
    <section className="contact section" id="Contactame">
        <h2 className="section-title">Contactame<i class='bx bx-badge-check'></i> </h2>
        <span className="section-subtitle">Enviame un Mensaje</span>

        <div className="contact-container container grid">
            <div className="contact-content">
                <h3 className="contact-title">Habla conmigo</h3>

                <div className="contact-info">
                    <div className="contact-card">
                        <i class='bx bxs-envelope icon-contact'></i>

                        <h3 className="contact-card-title">Email</h3>
                        <span className="contact-card-data">oswaldo_avilez@outlook.es</span>

                        <a href="mailto:oswaldo_avilez@outlook.es" className="contact-button">
                            Escribeme {""}
                            <i class='bx bx-right-arrow-alt contact-button-icon'></i>
                        </a>
                    </div>

                    <div className="contact-card">
                        <i class="uil uil-whatsapp-alt icon-contact"></i> 

                        <h3 className="contact-card-title">whatsApp</h3>
                        <span className="contact-card-data">+5491127029297</span>

                        <a href="https://wa.me/1127029297" className="contact-button">
                            Escribeme {""}
                            <i class='bx bx-right-arrow-alt contact-button-icon'></i>
                        </a>
                    </div>

                    <div className="contact-card">
                        <i class="uil uil-linkedin icon-contact"></i>

                        <h3 className="contact-card-title">LinkedIn</h3>
                        <span className="contact-card-data">Joeyker Oswaldo Mayora</span>

                        <a href="https://www.linkedin.com/in/joeyker-mayora-avilez-3b9993265/" className="contact-button">
                            Escribeme {""}
                            <i class='bx bx-right-arrow-alt contact-button-icon'></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact-content">
                <h3 className="contact-title">Que proyecto tienes en mente</h3>

                <form 
                ref={form} 
                onSubmit={sendEmail}
                className='contact-form'>

                    <div className="contact-form-div">
                        <label className='label-contact'>Nombre</label>
                        <input 
                        placeholder='Escribe tu nombre' 
                        className='input-contact' 
                        type="text" 
                        name="user_name" 
                        required />
                    </div>

                    <div className="contact-form-div">
                        <label className='label-contact'>Email</label>
                        <input
                        placeholder='Escribe tu Email' 
                        className='input-contact' 
                        type="email" 
                        name="user_email" 
                        required />
                    </div>

                    <div className="contact-form-div form-area">
                        <label className='label-contact'>Proyecto</label>
                        <textarea 
                        placeholder='Hablemos de el Proyecto'
                        className='input-contact' 
                        name="message" 
                        required />
                    </div>

                   
                    

                    <button className="btn-cv button button-flex" type="submit">
                        Enviar Mensaje<i class='bx bxs-send'></i>
                        </button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact