'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css'; // Opcional: para estilos

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="es">
      <body>
        {/* Barra de navegación */}
        <nav style={{ padding: '20px', background: '#f0f0f0' }}>
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
        <main>{children}</main>
      </body>
    </html>
  );
}