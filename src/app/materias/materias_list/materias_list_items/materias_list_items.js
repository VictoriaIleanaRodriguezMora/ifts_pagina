import React from 'react'

const Materias_List_Item = ({ ...subjects_p }) => {
    /* for (let i = 0; i < subjects_p.length; i++) {
            console.log("subjects_p", subjects_p[i].codigo);
            // Esto devolvía un arreglo cuya clave es "subjects_p", yo no estaba accediendo bien en el map a los datos
    } */

    return (
        <>
            {
                subjects_p["subjects_p"].map((subject) => {
                    return (
                        <li key={subject.codigo}>
                            <h3>{subject.nombre}</h3>
                            <p>{subject.codigo}</p>
                            <span>{subject.año_cuatri}</span>
                            <span>{subject.estado}</span>
                        </li>
                    )
                })
            }
        </>
    )
}

export default Materias_List_Item