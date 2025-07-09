"use client" // info

import Materias_Form from "./materias_form/materias_form"

export default function Materias() {
  return (
    <div id="materias">

      <div id="materias__content" >
        <h2>Tecnicatura Superior en Desarrollo de Software</h2>
        {/* <div> */}
        <h5>¡Hola! Soy Victoria Rodriguez. 👋🏽</h5>
        <p>
          Empecé a cursa esta carrera en el año 2024. <strong>El propósito</strong> de esta página es <i>registrar mi progreso</i> a lo largo de la carrera y compartir mis 📚 apuntes. 
          <br />
          Con el fin de ayudar a alguien que necesite apoyo, brindar otra perspectiva y/o dar un paneo general del contenido. 💡
        </p>
        {/* </div> */}
      </div>

      <Materias_Form />

    </div>
  );
}