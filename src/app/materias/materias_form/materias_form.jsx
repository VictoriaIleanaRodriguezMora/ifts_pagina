import React, { useEffect, useState } from 'react'
import Materias_List from "./materias_list/materias_list";
import degree_in_software_development from "/public/subjects/subjects_data.json"

const Materias_Form = () => {

  const [dataApi, setDataApi] = useState([]) // Para cambiar la vista
  const [originalData, setOriginalData] = useState([]); // Para tener la copia original de los datos

  const [estadoChecked, setEstadoChecked] = useState({
    materia_promocionada: false,
    materia_pendiente: false,
    materia_cursando: false,
    // materia_tiene_apuntes: false,
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
    // console.log("handleOnChange", e); // e: SyntheticBaseEvent {} > target: input#materia_cursando > checked: true||false 
    // estadoChecked.filter((elem, i) => {
    //     console.log("elem", elem);
    //     if (elem[name] = checked) {
    //         console.log("IF **** elem", elem);
    //         return elem[name] = checked
    //     }
    // })
    console.log("---------estadoChecked", estadoChecked);
    // setEstadoChecked({ ...estadoChecked, [name]: checked })
    setEstadoChecked({ ...estadoChecked, [name]: checked })
    console.log("********* estadoChecked", estadoChecked);
    // console.log("e.target.checked", e.target.checked);
    // console.log("e.target.value", e.target.value);
    // console.log("e.target.name", e.target.name);
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    // setDataApi Para cambiar la vista
    // setOriginalData Para tener la copia original de los datos
    // setFilteredData Para setear a dataApi con los filtros
    const dataFiltradaSeleccionada = []
    let finalFiltrada = [...originalData]
    console.log("useEffect estadoChecked: estadoChecked", estadoChecked);

    if (estadoChecked.materia_promocionada) { dataFiltradaSeleccionada.push("Promocionada") }
    if (estadoChecked.materia_pendiente) { dataFiltradaSeleccionada.push("Pendiente") }
    if (estadoChecked.materia_cursando) { dataFiltradaSeleccionada.push("Cursando") }
    console.log("dataFiltradaSeleccionada", dataFiltradaSeleccionada);

    if (dataFiltradaSeleccionada.length > 0) {
      finalFiltrada = finalFiltrada.filter((e, i) => {
        // Quiero quedarme solo con las materias donde e.estado esté dentro de los valores que están marcados en los checkboxes (dataFiltradaSeleccionada)
        if (dataFiltradaSeleccionada.includes(e.estado)) {
          // console.log("finalFiltrada", finalFiltrada); // acá llega correctamente el nro de {}
        }
        return dataFiltradaSeleccionada.includes(e.estado)
      })
    }

    if (estadoChecked.materia_tiene_apuntes) {
      finalFiltrada = finalFiltrada.filter((e) => {
        // console.log("materia_tiene_apuntes finalFiltrada", finalFiltrada);
        return e.tiene_apuntes  // si tiene apuntes === true, se retorna
      })
    }

    console.log("finalFiltrada", finalFiltrada);
    console.log("dataApi", dataApi);

    setDataApi(finalFiltrada)
  }, [estadoChecked]) // cambia, cuando cambia estadoChecked. Y estadoChecked es seteado, cada vez que se hace click en un checkbox. 
  return (

    <>
      <div id='fitros_container' >
        <p>Filtrar por: </p>
        <input
          type="checkbox"
          id="materia_promocionada"
          name="materia_promocionada"
          value="Promocionada"
          onChange={handleOnChange}
        />
        <label
          htmlFor="materia_promocionada">
          Promocionada
        </label>

        <input
          type="checkbox"
          id="materia_pendiente"
          name="materia_pendiente"
          value="Pendiente"
          onChange={handleOnChange}
        />
        <label
          htmlFor="materia_pendiente">
          Pendiente
        </label>

        <input
          type="checkbox"
          id="materia_cursando"
          name="materia_cursando"
          value="Cursando"
          onChange={handleOnChange}
        />
        <label
          htmlFor="materia_cursando">
          Cursando
        </label>

        <input
          type="checkbox"
          id="materia_tiene_apuntes"
          name="materia_tiene_apuntes"
          value="tiene_apuntes"
          onChange={handleOnChange}
        />
        <label
          htmlFor="materia_tiene_apuntes">
          Tiene apuntes
        </label>
      </div>

      <Materias_List subjects_p={dataApi} />
      
    </>
  )
}

export default Materias_Form