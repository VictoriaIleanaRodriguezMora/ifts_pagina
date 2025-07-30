import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBookBookmark, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const basePath = "https://github.com/VictoriaIleanaRodriguezMora/ifts/tree/main/";
const Materias_List_Item = ({ ...subjectsData }) => {


    return (
        <>
            {
                subjectsData["subjects_p"].map((subject) => {
                    const estado_materia = (subject.estado).toLowerCase()
                    const condicion_tiene_apuntes = (subject.tiene_apuntes) && (subject.link_apuntes)
                    return (
                        <li key={subject.codigo}>
                            <div className='materias__item' >
                                <span className={`estado_${estado_materia}`} >{subject.estado}</span>
                                <h4>{subject.nombre}</h4>
                                {
                                    (condicion_tiene_apuntes)
                                        ?
                                        <p className='materias__item-detalle'>
                                            <span>Código: {subject.codigo}</span>
                                            <span>
                                                <a href={`${basePath}${subject.link_apuntes}`} target="#">
                                                    <FontAwesomeIcon icon={faBookOpen} />  Apuntes                                                   </a>
                                            </span>
                                        </p>
                                        :
                                        <p className='materias__item-detalle'>
                                            <span>Código: {subject.codigo}</span>
                                        </p>
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