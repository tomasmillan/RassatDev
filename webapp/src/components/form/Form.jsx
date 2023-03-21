import React from 'react'
import './form.css'


const Form = () => {

   

  return (
    <div className='container-f'>
        <h1>Contacto</h1>
        <form id="custom-contact-form" name="#subscribe-form" method="post" action="contact_form.php" novalidate>
            <div className='form-group'>
                <label htmlFor='name'>Nombre Completo</label>
                {/* ANTES DE DEPLOY CAMBIAR EL CONTACT-FORM PHP PARA QUE ENVIE NOMBRE  Y APELLIDO TODO JUNTO y tambien copiar los links de php y js del pruebahtml */}
                <input type='text' className='form-control' id="ccf-name" name="name" data-display="Nombre" data-required="true" placeholder="Nombre y Apellido"/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' className='form-control' id="ccf-email" name="email" data-required="true" data-display="e-mail" data-validate="email" placeholder='Email' />
            </div>
            <div className='form-group'>
                <label htmlFor='message'>Mensaje</label>
                <textarea className='form-control' id="ccf-message" name="message" data-display="Mensaje" data-required="true" placeholder='Mensaje' ></textarea>
            </div>
            <button type='submit' id="ccf-send" className='btnForm'>Enviar</button>
        </form>
    </div>
  )
}

export default Form