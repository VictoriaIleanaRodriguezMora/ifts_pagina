import React, { useEffect, useState } from 'react'
import Materias_List_Item from './materias_items.jsx/materias_items'

const Materias_List = ({...subjectsData}) => {

    return (
        <>
            <div id='materias_container' >
                <ul id="materias_lista" >
                    <Materias_List_Item {...subjectsData} />
                </ul>
            </div>
        </>
    )
}

export default Materias_List