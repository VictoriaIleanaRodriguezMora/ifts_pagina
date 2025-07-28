import React, { useEffect, useState } from "react"
import Materias_List from "./materias_list/materias_list";
import degree_in_software_development from "/public/subjects/subjects_data.json"

const Materias_Form = () => {

  const [dataApi, setDataApi] = useState([]) 
  const [originalData, setOriginalData] = useState([]); 

  const [estadoChecked, setEstadoChecked] = useState({
    materia_promocionada: false,
    materia_pendiente: false,
    materia_cursando: false,
  })

  const fetchData = async () => {
    try {
      setDataApi(await degree_in_software_development.subjects)
      setOriginalData(await degree_in_software_development.subjects)
    }
    catch (e) {
      console.log("Error al consumir API", e);
    }
    finally {
      console.log("FINALLY dataApi", dataApi);
      console.log("Finalizó la carga");
    }
  }

  const handleOnChange = async (e) => {
    const { name, checked } = e.target;
    setEstadoChecked({ ...estadoChecked, [name]: checked })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const dataFiltradaSeleccionada = []
    let finalFiltrada = [...originalData]

    if (estadoChecked.materia_promocionada) { dataFiltradaSeleccionada.push("Promocionada") }
    if (estadoChecked.materia_pendiente) { dataFiltradaSeleccionada.push("Pendiente") }
    if (estadoChecked.materia_cursando) { dataFiltradaSeleccionada.push("Cursando") }

    if (dataFiltradaSeleccionada.length > 0) {
      finalFiltrada = finalFiltrada.filter((e, i) => {
        return dataFiltradaSeleccionada.includes(e.estado)
      })
    }

    if (estadoChecked.materia_tiene_apuntes) {
      finalFiltrada = finalFiltrada.filter((e) => {
        return e.tiene_apuntes 
      })
    }

    setDataApi(finalFiltrada)
  }, [estadoChecked]) 
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