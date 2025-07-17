import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    const date = new Date();
    const [year] = [
        date.getFullYear(),
    ];


    return (
        <footer id='footer' >
            <h2>Contacto</h2>

            <nav>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/victoriaileanarodriguez/" target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} className='footer_icons fa-linkedin' />
                            <span>/victoriaileanarodriguez</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me//5491133990583?text=Hola%20Victoria%20">
                            <FontAwesomeIcon icon={faWhatsapp} className='footer_icons fa-whatsapp' />
                            <span>+54 9 11 3399 0583</span>
                        </a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faDiscord} className='footer_icons fa-discord' />
                        <span>Victoria Rodriguez#1198</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} className='footer_icons fa-envelope' />
                        <span>victoriaileanarodriguezmora@gmail.com</span>
                    </li>
                </ul>
            </nav>

            <h3>Victoria Ileana Rodriguez Mora | {year} </h3>
        </footer>
    )
}

export default Footer