import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons';

const basePath = "https://github.com/VictoriaIleanaRodriguezMora/ifts/tree/main/";
const Materias_List_Item = ({ ...subjectsData }) => {

    return (
        <>
            {
                subjectsData["subjects_p"].map((subject) => {
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
                                                        <FontAwesomeIcon icon={faBook} /> Apuntes
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