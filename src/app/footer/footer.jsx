import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
    return (
        <footer id='footer' >
            <h3>Contacto</h3>

            <nav>
                <ul>
                    <li><FontAwesomeIcon icon={faLinkedin} className='fa-linkedin' /></li>
                    <li><FontAwesomeIcon icon={faWhatsapp} className='fa-whatsapp' /></li>
                    <li><FontAwesomeIcon icon={faDiscord} className='fa-discord' /></li>
                    <li><FontAwesomeIcon icon={faEnvelope} className='fa-envelope' /></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer