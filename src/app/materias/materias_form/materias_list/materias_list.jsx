import React, { useEffect, useState } from 'react'
import Materias_List_Item from './materias_items.jsx/materias_items'

const Materias_List = ({ ...subjectsData }) => {

    return (
        <>
            <ul id="materias__lista" >
                <Materias_List_Item {...subjectsData} />
            </ul>
        </>
    )
}

export default Materias_List