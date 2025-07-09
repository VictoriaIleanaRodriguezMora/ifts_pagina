import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const pathname = usePathname();

    return (
        <>
            {/* Barra de navegación */}
            <header>
                <nav>
                    <Link href="https://www.ifts18.edu.ar/home" target='#blank' >
                        <Image src="/logo_ifts.jpg" alt="Logo terciario" width={40} height={40} />
                    </Link>
                    <Link
                        href="/contacto"
                        className={pathname === '/contacto' ? 'active' : ''}
                        style={{ margin: '0 20px' }}
                    >
                        Contacto
                    </Link>
                    <Link href="https://github.com/VictoriaIleanaRodriguezMora" target='#blank' className={pathname === '/proyectos' ? 'active' : ''}>
                        Sobre mí
                    </Link>
                </nav>
            </header>
        </>
    )
}

export default Header