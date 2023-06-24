import React from 'react'
import Contact from "../Components/Contact";
import "../Style/Footer.css"
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs'


function Footer() {
    return (
        <footer>
                <div className='social-media'>
                    <h4>Sosyal Medya</h4>
                    <li><a href='#'>Facebook <BsFacebook /> </a></li>
                    <li><a href='#'>İnstagram <BsInstagram /> </a></li>
                    <li><a href="https://wa.me/905530681904" target={"_blank"}>Whatsapp <BsWhatsapp /> </a></li>
               </div>
            <div className='contact'>
            <Contact />
            <p>Bizlere üst kısımdaki "İletişim" kısmından mail adresimize mesaj gönderebilirsiniz.</p>
            </div>
        </footer>
    )
}

export default Footer
