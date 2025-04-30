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

                                {
                                    (subject.nota && subject.tiene_apuntes)
                                        ? <>
                                            <p className='materias__item-detalle'>
                                                <span>Nota {subject.nota}</span>
                                                <span>📚 Apuntes</span>                                                </p>
                                        </>
                                        : (subject.nota && !(subject.tiene_apuntes))
                                            ?
                                            <p className='materias__item-nota'>
                                                <span>Nota {subject.nota}</span>
                                            </p>
                                            : (!(subject.nota) && (subject.tiene_apuntes))
                                                ?
                                                <p className='materias__item-apuntes'>
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