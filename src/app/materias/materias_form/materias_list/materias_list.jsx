import React, { useEffect, useState } from 'react'
import Materias_List_Item from './materias_list_items/materias_list_items'

const Materias_List = ({...subjects_p}) => {
console.log("Materias_List", subjects_p);

    return (
        <>

            <div id='materias_container' >
                <ul id="materias_lista" >
                    <Materias_List_Item {...subjects_p} />
                </ul>
            </div>
        </>
    )
}

export default Materias_List