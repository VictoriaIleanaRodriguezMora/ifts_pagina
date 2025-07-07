'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './styles/globals.scss'; // Import global Sass styles

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <body suppressHydrationWarning>
        {/* Barra de navegación */}
        <nav>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link 
            href="/contacto" 
            className={pathname === '/contacto' ? 'active' : ''}
            style={{ margin: '0 20px' }}
          >
            Contacto
          </Link>
          <Link href="/proyectos" className={pathname === '/proyectos' ? 'active' : ''}>
            Proyectos
          </Link>
        </nav>

        {/* Contenido de las páginas */}
        {children}
      </body>
    </html>
  );
}