import React, { useEffect, useState } from "react"
import Materias_List from "./materias_list/materias_list";
import degree_in_software_development from "/public/subjects/subjects_data.json"
import useFetchData from "../../../hooks/useFetchData";
import useFilterData from "../../../hooks/useFilterData";

const Materias_Form = () => {
  const { isLoading, dataApi, setDataApi, originalData } = useFetchData()

  const [estadoChecked, setEstadoChecked] = useState({
    materia_promocionada: false,
    materia_pendiente: false,
    materia_cursando: false,
    // materia_tiene_apuntes: false,
  })

  const handleOnChange = async (e) => {
    const { name, checked } = e.target;
    setEstadoChecked({ ...estadoChecked, [name]: checked })
  }

  const { finalFiltrada } = useFilterData(estadoChecked, originalData)

  useEffect(() => {
    setDataApi(finalFiltrada)
  }, [finalFiltrada])

  return (
    <>
      <div id="materias__filtros">
        <h3>Filtrar por: </h3>
        <div className="filtros__inputs">
          <label
            htmlFor="materia_promocionada">
            <input
              type="checkbox"
              id="materia_promocionada"
              name="materia_promocionada"
              value="Promocionada"
              onChange={handleOnChange}
            />

            Promocionada
          </label>

          <label
            htmlFor="materia_pendiente">
            <input
              type="checkbox"
              id="materia_pendiente"
              name="materia_pendiente"
              value="Pendiente"
              onChange={handleOnChange}
            />
            Pendiente
          </label>

          <label
            htmlFor="materia_cursando">
            <input
              type="checkbox"
              id="materia_cursando"
              name="materia_cursando"
              value="Cursando"
              onChange={handleOnChange}
            />
            Cursando
          </label>

          <label
            htmlFor="materia_tiene_apuntes">
            <input
              type="checkbox"
              id="materia_tiene_apuntes"
              name="materia_tiene_apuntes"
              value="tiene_apuntes"
              onChange={handleOnChange}
            />
            Tiene apuntes
          </label>
        </div>
      </div>

      <Materias_List subjects_p={dataApi} />

    </>
  )
}

export default Materias_Form