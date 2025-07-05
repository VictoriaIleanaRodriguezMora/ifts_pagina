import React, { useEffect, useState } from 'react'
import Materias_List_Item from './materias_list_items/materias_list_items'
import degree_in_software_development from "/public/subjects/subjects_data.json"
const basePath = "https://github.com/VictoriaIleanaRodriguezMora/ifts/tree/main/";

const Materias_List = () => {
    const [dataApi, setDataApi] = useState([]) // Para cambiar la vista
    const [originalData, setOriginalData] = useState([]); // Para tener la copia original de los datos
    const [filteredData, setFilteredData] = useState([]); // Para setear a dataApi con los filtros

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

        console.log("useEffect estadoChecked, dataApi", estadoChecked);
        console.log("originalData", originalData);

        // setFilteredData(originalData.filter((a) => a.estado === "Promocionada"))
        if (estadoChecked.materia_promocionada) { dataFiltradaSeleccionada.push("Promocionada") }
        // setFilteredData(originalData.filter((a) => a.estado === "Pendiente"))
        if (estadoChecked.materia_pendiente) { dataFiltradaSeleccionada.push("Pendiente") }
        // setFilteredData(originalData.filter((a) => a.estado === "Cursando"))
        if (estadoChecked.materia_cursando) { dataFiltradaSeleccionada.push("Cursando") }

        if (dataFiltradaSeleccionada.length > 0) {
            finalFiltrada = finalFiltrada.filter((elem, i) => {
                console.log("elem.estado", elem.estado);
                return elem.estado.includes(dataFiltradaSeleccionada)
            })
        }

        console.log("dataFiltradaSeleccionada", dataFiltradaSeleccionada);
        console.log("finalFiltrada", finalFiltrada);
        console.log("dataApi", dataApi);
        // console.log("filteredData", filteredData);
        

        setDataApi(finalFiltrada)

    }, [estadoChecked]) // cambia, cuando cambia estadoChecked. Y estadoChecked es seteado, cada vez que se hace click en un checkbox. 

    return (
        <>
            <div>
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
            <div id='materias_container' >
                <ul id="materias_lista" >
                    {
                        dataApi.map((subject) => {
                            return (
                                <li key={subject.codigo}>
                                    <div className='materias__item' >
                                        <span className={`estado_${(subject.estado).toLowerCase()}`} >{subject.estado}</span>
                                        <h4>{subject.nombre}</h4>
                                        {
                                            (!(subject.tiene_apuntes))
                                                ?
                                                <p className='materias__item-detalle'>
                                                    <span>Código: {subject.codigo}</span>
                                                </p>
                                                : ((subject.tiene_apuntes) && (subject.link_apuntes))
                                                    ?
                                                    <p className='materias__item-detalle'>
                                                        <span>Código: {subject.codigo}</span>
                                                        <span>
                                                            <a href={`${basePath}${subject.link_apuntes}`} target="#">
                                                                📚 Apuntes
                                                            </a>
                                                        </span>
                                                    </p>
                                                    : null
                                        }
                                    </div>
                                </li >
                            )
                        })}
                </ul>
            </div>
        </>
    )
}

export default Materias_List