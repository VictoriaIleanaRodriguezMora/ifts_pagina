import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
    const pathname = usePathname();

    return (
        <>
            {/* Barra de navegación */}
            <header id='header' >
                <nav>
                    <ul>
                        <li>
                            <Link href="https://www.ifts18.edu.ar/home" target='#blank' >
                                <Image src="/logo_ifts.jpg" alt="Logo terciario" width={40} height={40} />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#footer"
                                className={pathname === '/contacto' ? 'active' : ''}
                                // style={{ margin: '0 20px' }}
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