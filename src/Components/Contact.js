
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify'
import "../Style/Contact.css"
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    let userName= e.target.user_name.value;
    let email= e.target.user_email.value;
    let message= e.target.message.value;

    if (userName=="" || email=="" || message==""){
      toast.error("Gerekli Alanları Doldurun")
    }
    else{
      emailjs.sendForm('service_d80x0sh', 'template_56t8f2e', form.current, 'bGhKghHb-_xPsKpQI')
      .then((result) => {
        toast.success("Mesajınız Gönderildi");
        e.target.user_name.value=""
        e.target.user_email.value=""
        e.target.message.value=""
      }, (error) => {
        toast.error(error.text);
      });
    }
  };

  return (
    <div>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <h3 className='text-center'>İletişim</h3>
        <label>İsim</label>
        <input type="text" name="user_name" placeholder='İsim' />
        <label>E-mail</label>
        <input type="email" name="user_email" placeholder='E-mail' />
        <label>Mesaj</label>
        <textarea name="message" placeholder='Mesajınız...' />
        <button type="submit" value="Send">
          Gönder
        </button>
      </form>

    </div>
  )
}


export default Contact

