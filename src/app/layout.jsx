'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles/globals.scss'; // Import global Sass styles
import Header from "./header/header"
import Footer from "./footer/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const buttonUpRef = useRef();
  const buttonDownRef = useRef();

  const scrollCalc = (scroll) => {
    if (!buttonUpRef.current) return;

    if (scroll > 450) {
      // buttonUpRef.current.style.visibility = 'visible'
      // buttonUpRef.current.style.opacity = 1
      // buttonUpRef.current.classList.remove('button__hide')
      buttonUpRef.current.className = 'button__show'
    } else {
      // buttonUpRef.current.style.visibility = 'hidden'
      // buttonUpRef.current.classList.add('button__hide')
      buttonUpRef.current.className = 'button__hide'
    }

    if (scroll > 1500) {
      buttonDownRef.current.className = 'button__hide'
    } else {
      buttonDownRef.current.className = 'button__show'
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", function (e) {

      // console.log("document.documentElement.scrollBottom", e.target.documentElement.scrollBottom);
      scrollCalc(e.target.documentElement.scrollTop);
    })
    // return () => window.removeEventListener("scroll", scrollCalc(e.target.documentElement.scrollTop));

  }, [])

  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <Header />
        {/* Contenido de las páginas */}
        {children}
        <div id="navegacion">
          <a
            href="#header"
            className=" button__hide"
            ref={buttonUpRef}
            role="button"
            aria-label="Ir arriba"
          >
            <FontAwesomeIcon icon={faCircleArrowUp} className='navegacion__items' />
          </a>

          <a
            href="#footer"
            ref={buttonDownRef}
            role="button"
            aria-label="Ir abajo"
          >
            <FontAwesomeIcon icon={faCircleArrowDown} className='navegacion__items' />
          </a>
        </div>

        <Footer />
      </body>
    </html>
  );
}