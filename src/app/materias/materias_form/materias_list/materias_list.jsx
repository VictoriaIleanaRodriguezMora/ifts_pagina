import React, { useEffect, useState } from 'react'
import Materias_List_Item from './materias_list_items/materias_list_items'
import degree_in_software_development from "/public/subjects/subjects_data.json"
const basePath = "https://github.com/VictoriaIleanaRodriguezMora/ifts/tree/main/";

const Materias_List = () => {
    const [dataApi, setDataApi] = useState([])

    const [estadoChecked, setEstadoChecked] = useState([{
        materia_promocionada: false,
        materia_pendiente: false,
        materia_cursando: false,
        materia_tiene_apuntes: false,
    }])

    let api_subjects = [];
    let api_subjects_filtered = [];

    const fetchData = async () => {
        try {
            api_subjects = await degree_in_software_development.subjects
            setDataApi(api_subjects)
        }
        catch (e) {
            console.log("Error al consumir API", e);
        }
        finally {
            console.log("FINALLY api_subjects", api_subjects);
            console.log("FINALLY dataApi", dataApi);
            console.log("Finalizó la carga");
        }
    }

    const handleOnChange = async (e) => {
        console.log("handleOnChange", e); // e: SyntheticBaseEvent {} > target: input#materia_cursando > checked: true||false 
        const filter = estadoChecked.filter((elem, i) => {
            console.log("elem", elem);
            if (elem[e.target.name] = e.target.checked) {
                console.log("****IF****");

                console.log("elem", elem);
                return elem[e.target.name] = e.target.checked
            }

            // elem = e.target.name
        })
        console.log("filter", filter);

        console.log("estadoChecked", estadoChecked);
        setEstadoChecked({ ...estadoChecked, [e.target.name]: e.target.checked })
        console.log("estadoChecked", estadoChecked);
        console.log("e.target.checked", e.target.checked);
        console.log("e.target.value", e.target.value);
        console.log("e.target.name", e.target.name);
    }

    useEffect(() => {
        fetchData()
        console.log("useEffect", api_subjects);
        console.log("useEffect dataApi", dataApi);
    }, [])

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