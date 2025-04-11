// app/proyectos/page.js

import degree_in_software_development from "/public/subjects/subjects_data.json"
const subjects = degree_in_software_development.subjects
import Materias_List from "./materias_list/materias_list";

export default function Materias() {
  return (
    <div>
      <h1>Materias</h1>

      <Materias_List />

    </div>
  );
}