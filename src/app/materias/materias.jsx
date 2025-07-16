"use client" // info
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import Materias_Form from "./materias_form/materias_form"
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function Materias() {
  return (
    <div id="materias">

      <main id="materias__content" >
        <h1>Tecnicatura Superior en Desarrollo de Software</h1>
        <h2>¡Hola! Soy Victoria Rodriguez. 👋🏽</h2>
        <p>
          Empecé a cursar esta carrera en el 2do cuatrimestre del año 2024. <strong>El propósito</strong> de esta página es <i>registrar mi progreso</i> a lo largo de la carrera y compartir mis apuntes.
          <br />
          Con el fin de ayudar a alguien que necesite apoyo, brindar otra perspectiva y/o dar un paneo general del contenido. <FontAwesomeIcon icon={faLightbulb} />
        </p>
        <span>
          <a href="https://docs.google.com/document/d/1TvsNM_z6B2KHBOyKITbnY7X0KlU6BsNd/edit?tab=t.0#heading=h.h44t47frzt2n" target='#blank'>
          Plan de estudios</a> <FontAwesomeIcon icon={faUpRightFromSquare} />
        </span>

      </main>

      <Materias_Form />

    </div>
  );
}