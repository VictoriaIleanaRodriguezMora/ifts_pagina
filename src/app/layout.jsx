'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles/globals.scss'; // Import global Sass styles
import Header from "./header/header"
import Footer from "./footer/footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

export default function RootLayout({ children }) {
  const buttonUpRef = useRef();
  const buttonDownRef = useRef();

const scrollCalc = (scrollTopParam, documentHeightParam) => {
  const scrollMax = documentHeightParam - window.innerHeight; // !
  const veintePorciento = scrollMax * 0.20;
  const ochentaPorciento = scrollMax * 0.80;

  // console.log("scrollTopParam:", scrollTopParam);
  // console.log("scrollMax:", scrollMax);
  // console.log("20%", veintePorciento);
  // console.log("80%", ochentaPorciento);

  if (scrollTopParam > veintePorciento) {
    // console.log("20% SUPERADO");
    buttonUpRef.current.className = 'button__show';
  } else {
    buttonUpRef.current.className = 'button__hide';
  }
  if (scrollTopParam > ochentaPorciento) {
    // console.log("80% SUPERADO");
    buttonDownRef.current.className = 'button__hide';
  } else {
    buttonDownRef.current.className = 'button__show';
  }
};

  useEffect(() => {
    // scrollcalc
    window.addEventListener("scroll", function (e) {
      scrollCalc(e.target.documentElement.scrollTop, e.target.documentElement.scrollHeight);
    })
    return () => window.removeEventListener("scroll", scrollCalc(e.target.documentElement.scrollTop));
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