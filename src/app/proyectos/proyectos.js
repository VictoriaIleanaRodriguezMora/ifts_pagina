// app/proyectos/page.js

import degree_in_software_development from "/public/subjects/subjects_data.json"
// console.log(subjects_data);
// degree_in_software_development.stringify()
const subjects = degree_in_software_development.subjects
// console.log(subject);

export default function Proyectos() {
  return (
    <div>
      <h1>Proyectos</h1>

      {
        subjects.map((subject, i) => {
          console.log(subject.nombre);

          return (
              <li key={i}>
                <h3>{subject.nombre}</h3>
                <p>{subject.codigo}</p>
                <span>{subject.año_cuatri}</span>
              </li>
          )
        })
      }

      <ul>
        <li>Proyecto 1</li>
        <li>Proyecto 2</li>
      </ul>
    </div>
  );
}