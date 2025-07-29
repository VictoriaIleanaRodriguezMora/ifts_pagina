'use client'

import './styles/globals.scss'; // Import global Sass styles
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Buttons_Nav from './components/Buttons_Nav/Buttons_Nav';

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <Header />
        {/* Contenido de las páginas */}
        {children}
        <Buttons_Nav />

        <Footer />
      </body>
    </html>
  );
}