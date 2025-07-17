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
  const pathname = usePathname();
  const buttonUpRef = useRef();
  const buttonDownRef = useRef();

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const calcResize = (widthParam, heightParam) => {
    setWidth(widthParam);
    setHeight(heightParam);
    console.log("width", width);
    console.log("height", height);

  };


  const scrollCalc = (scroll) => {
    // if (!buttonUpRef.current) return;
    if (scroll > 450) {
      buttonUpRef.current.className = 'button__show'
    } else {
      buttonUpRef.current.className = 'button__hide'
    }

    if (scroll > 1500) {
      buttonDownRef.current.className = 'button__hide'
    } else {
      buttonDownRef.current.className = 'button__show'
    }
  }

  useEffect(() => {
    const documentHeight = document.documentElement.scrollHeight;

    // scrollcalc
    window.addEventListener("scroll", function (e) {
      scrollCalc(e.target.documentElement.scrollTop);
      console.log("scroll", e.target.documentElement.scrollHeight); // esto debo hacerlo preguntando por el estado de la data api, cuando cambia data api, debo recalcular el scrollsize
    })
    return () => window.removeEventListener("scroll", scrollCalc(e.target.documentElement.scrollTop));
  }, [])

  useEffect(() => {
    // calcResize
    console.log("window.innerHeight", window.innerHeight);
    console.log("window.innerWidth", window.innerWidth);

    window.addEventListener("resize", function (e) {
      // calcResize()

      // console.log("resize", e);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);

    });
    return () => {
      window.removeEventListener("resize", calcResize);
    };
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