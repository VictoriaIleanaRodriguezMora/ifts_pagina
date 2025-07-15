// app/page.js

import Materias from "./materias/materias";
export const metadata = {
  title:
    "Regitro académico IFTS 18",
  description:
    "Registro de progreso académico y apuntes de la Tecnicatura Superior en Desarrollo de Software",
};

export default function Home() {
  return (
    <>
      <Materias />
    </>
  );
}
