"use client" // info
import React, { useEffect, useState } from 'react'

const Materias_List_Item = ({ ...subjects_p }) => {
    /* for (let i = 0; i < subjects_p.length; i++) {
            console.log("subjects_p", subjects_p[i].codigo);
            // Esto devolvía un arreglo cuya clave es "subjects_p", yo no estaba accediendo bien en el map a los datos
    } */

    // const renderDetailContent = (arraySubjects) => {
    //     const tieneNotaApuntes = 0
    //     return
    // }

    // const [estado, setEstado] = useState("")

    // useEffect(() => {
    //     if(estado === "") return
    //     switch (estado) {
    //         case (estado === "Promocionada"):
    //             console.log("promocionada", estado);
    //             setEstado("promocionada")
    //             return "promocionada"
    //             break;
    //         case (estado === "En curso"):
    //             console.log("En curso");
    //             setEstado("en_curso", estado)
    //             return "en_curso"
    //             break;
    //         case (estado === "Pendiente"):
    //             console.log("Pendiente");
    //             setEstado("pendiente", estado)
    //             return "pendiente"
    //             break;
    //         default:
    //             console.log("undefined");
    //             return "undefined"
    //             break;
    //     }
    // }, [])

    // const tagStatus = async (estado) => {
    //     console.log("estado", estado);
    //     if (estado === "Promocionada") {
    //         setEstado("promocionada")
    //     }
    //     if (estado === "En curso") {
    //         setEstado("en_curso")
    //     }
    //     if (estado === "Pendiente") {
    //         setEstado("pendiente")
    //     }
    //     // switch (estado) {
    //     //     case (estado === "Promocionada"):
    //     //         console.log("promocionada", estado);
    //     //         setEstado("promocionada")
    //     //         return "promocionada"
    //     //         break;
    //     //     case (estado === "En curso"):
    //     //         console.log("En curso");
    //     //         setEstado("en_curso")
    //     //         return "en_curso"
    //     //         break;
    //     //     case (estado === "Pendiente"):
    //     //         console.log("Pendiente");
    //     //         setEstado("pendiente", estado)
    //     //         return "pendiente"
    //     //         break;
    //     //     default:
    //     //         console.log("undefined");
    //     //         return "undefined"
    //     //         break;
    //     // }
    // }


    return (
        <>
            {
                subjects_p["subjects_p"].map((subject) => {
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
                                        : (subject.tiene_apuntes)
                                            ?
                                            <p className='materias__item-detalle'>
                                                <span>Código: {subject.codigo}</span>
                                                <span>📚 Apuntes</span>
                                            </p>
                                            : null
                                }
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

export default Materias_List_Item