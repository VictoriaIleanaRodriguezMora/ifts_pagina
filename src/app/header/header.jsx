'use client'
import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


const Header = () => {
    const pathname = usePathname();
    const navbarRef = useRef()
    const openButtonRef = useRef()



    function openSidebar(e) {
        // console.log("e", e);

        navbarRef.current.classList = 'show';
        openButtonRef.current.setAttribute('aria-expanded', 'true')
        navbarRef.current.removeAttribute('inert')
    }

    function closeSidebar() {
        navbarRef.current.classList = '';
        openButtonRef.current.setAttribute('aria-expanded', 'false')
        navbarRef.current.setAttribute('inert', '')
    }

    useEffect(() => {
        const media = window.matchMedia("(width < 500px)")

        function updateNavbar(e) {
            const isMobile = e.matches
            console.log("isMobile", isMobile);
            
            if (isMobile) {
                navbarRef.current?.setAttribute('inert', '')
            } else {
                navbarRef.current?.removeAttribute('inert')
            }
        }

        // Ejecutar al montar por si ya coincide
        updateNavbar(media)

        media.addEventListener('change', updateNavbar)

        return () => {
            media.removeEventListener('change', updateNavbar)
        }
    }, [])


    return (
        <>
            {/* Barra de navegación */}
            <header id='header' >
                <button ref={openButtonRef} id='open-sidebar-button' onClick={openSidebar} aria-label='open sidebar' aria-expanded="false" aria-controls='navbar'>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <nav ref={navbarRef} id='navbar'>
                    <ul>
                        <li>
                            <button id='close-sidebar-button' onClick={closeSidebar} aria-label='close sidebar'>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </li>
                        <li aria-current="Página del terciario" >
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
                <div id="overlay" onClick={closeSidebar} aria-hidden="true" ></div>
            </header>

        </>
    )
}

export default Header