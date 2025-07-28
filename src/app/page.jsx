// app/page.js

import Materias from "./materias/materias";
export const metadata = {
  title:
    "Registro académico IFTS 18",
  description:
    "Registro de progreso académico y apuntes de la Tecnicatura Superior en Desarrollo de Software",
  icons: {
    icon: '/icono_libros_1.ico', // mg
  },
};

export default function Home() {
  return (
    <>
      <Materias />
    </>
  );
}
