import React from 'react'
import Materias_List from "./materias_list/materias_list";

const Materias_Form = () => {
  return (

    <>
      {/* <div>
        <p>Filtrar por: </p>
        <input type="checkbox" id="materia_promocionada" name="materia_promocionada" value="promocionada" checked={true} />
        <label htmlFor="materia_">Promocionada</label>

        <input type="checkbox" id="materia_pendiente" name="materia_pendiente" value="pendiente" />
        <label htmlFor="materia_pendiente">Pendiente</label>

        <input type="checkbox" id="materia_cursando" name="materia_cursando" value="en_curso" />
        <label htmlFor="materia_cursando">Cursando</label>

        <input type="checkbox" id="materia_tiene_apuntes" name="materia_tiene_apuntes" value="tiene_apuntes" />
        <label htmlFor="materia_tiene_apuntes">Tiene apuntes</label>
      </div> */}

      <Materias_List />
    </>
  )
}

export default Materias_Form