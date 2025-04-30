// app/proyectos/page.js

import degree_in_software_development from "/public/subjects/subjects_data.json"
import Materias_List from "./materias_list/materias_list";

export default function Materias() {
  return (
    <div>
      <h2>Materias</h2>

      <div>
        <p>Filtrar por: </p>
        <input type="checkbox" id="materia_promocionada" name="materia_" value="promocionada" />
        <label htmlFor="materia_">Promocionada</label>

        <input type="checkbox" id="materia_pendiente" name="materia_" value="pendiente" />
        <label htmlFor="materia_pendiente">Pendiente</label>

        <input type="checkbox" id="materia_en_curso" name="materia_" value="en_curso" />
        <label htmlFor="materia_en_curso">En curso</label>

        <input type="checkbox" id="materia_tiene_apuntes" name="materia_" value="tiene_apuntes" />
        <label htmlFor="materia_tiene_apuntes">Tiene apuntes</label>
      </div>

      <Materias_List />

    </div>
  );
}