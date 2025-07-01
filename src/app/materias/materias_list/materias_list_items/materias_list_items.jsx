
import React, { useEffect, useState } from 'react'

const basePath = "https://github.com/VictoriaIleanaRodriguezMora/ifts/tree/main/";
// { ...subjects_p } ¿
const Materias_List_Item = ({ ...subjects_p }) => {


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
                })
            }
        </>
    )
}

export default Materias_List_Item