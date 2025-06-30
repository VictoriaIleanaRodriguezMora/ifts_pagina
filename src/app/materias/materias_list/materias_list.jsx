import React, { useEffect, useState } from 'react'
import Materias_List_Item from './materias_list_items/materias_list_items'
import degree_in_software_development from "/public/subjects/subjects_data.json"



const Materias_List = () => {
    const [dataApi, setDataApi] = useState([])
    let api_subjects = [];

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
            console.log("Finalizó la carga");
        }
    }

    useEffect(() => {
        fetchData()
        console.log("useEffect", api_subjects);
        console.log("useEffect dataApi", dataApi);
    }, [])

    return (
        <>
            <div id='materias_container' >
                <ul id="materias_lista" >
                    <Materias_List_Item subjects_p={dataApi} />
                </ul>
            </div>
        </>
    )
}

export default Materias_List