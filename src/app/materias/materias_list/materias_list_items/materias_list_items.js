import React from 'react'

const Materias_List_Item = ({ ...subjects_p }) => {
    /* for (let i = 0; i < subjects_p.length; i++) {
            console.log("subjects_p", subjects_p[i].codigo);
            // Esto devolvía un arreglo cuya clave es "subjects_p", yo no estaba accediendo bien en el map a los datos
    } */
    // if (condition) {

    // }
    return (
        <>
            {
                subjects_p["subjects_p"].map((subject) => {
                    return (
                        <li key={subject.codigo}>
                            <div className='materias__item' >
                                <h4>{subject.nombre}</h4>
                                <p>Código: {subject.codigo}</p>
                                <span>{subject.año_cuatri}</span>
                                <span>{subject.estado}</span>
                                <p className='materias__item-detalles' >
                                    {
                                        (subject.estado === 'Pendiente' || subject.estado === 'En curso')
                                            ? null
                                            : <span>Nota {subject.nota}</span>
                                    }

                                    {
                                        subject.tiene_apuntes ? <span>📚 Apuntes</span> : null
                                    }

                                </p>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

export default Materias_List_Item