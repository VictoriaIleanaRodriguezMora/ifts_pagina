'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles/globals.scss'; // Import global Sass styles
import Header from "./header/header"

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <body suppressHydrationWarning>
        <Header />
        {/* Contenido de las páginas */}
        {children}
      </body>
    </html>
  );
}