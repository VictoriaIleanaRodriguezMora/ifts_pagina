import React from 'react'
import Materias_List_Item from './materias_list_items/materias_list_items'
import degree_in_software_development from "/public/subjects/subjects_data.json"
const subjects = degree_in_software_development.subjects

const Materias_List = () => {
    return (
        <>
            <div id='materias_container' >
                <ul id="materias_lista" >
                    <Materias_List_Item subjects_p={subjects} />
                </ul>
            </div>
        </>
    )
}

export default Materias_List