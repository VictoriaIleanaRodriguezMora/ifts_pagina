'use client'
import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const pathname = usePathname();
    // const navbar = document.getElementById('navbar')
    const navbarRef = useRef()

    function openSidebar(e) {
        console.log("e", e);

        navbarRef.current.classList = 'show';
        // openButton.setAttribute('aria-expanded', 'true')
        // navbar.removeAttribute('inert')
    }

    function closeSidebar() {
        navbarRef.current.classList = '';
        // openButton.setAttribute('aria-expanded', 'false')
        // navbar.setAttribute('inert', '')
    }

    return (
        <>
            {/* Barra de navegación */}
            <header id='header' >
                <button id='open-sidebar-button' onClick={openSidebar} >
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <nav ref={navbarRef}>
                    <ul>
                        <li>
                            <button id='close-sidebar-button' onClick={closeSidebar}>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </li>
                        <li>
                            <Link href="https://www.ifts18.edu.ar/home" target='#blank' >
                                <Image src="/logo_ifts.jpg" alt="Logo terciario" width={40} height={40} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#footer"
                                className={pathname === '/contacto' ? 'active' : ''}
                            >
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/VictoriaIleanaRodriguezMora" target='#blank' className={pathname === '/proyectos' ? 'active' : ''}>
                                Sobre mí
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header