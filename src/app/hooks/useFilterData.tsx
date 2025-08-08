import React, { useEffect, useState } from "react";
// import apiUrl from "/public/subjects/subjects_data.json";

/*
import { useFilteredSubjects } from "../../../hooks/useFilteredSubjects";

const Materias_Form = () => {
  const { isLoading, dataApi, setDataApi, originalDataParam } = useFetchData();
  const [estadoChecked, setEstadoChecked] = useState({
    materia_promocionada: false,
    materia_pendiente: false,
    materia_cursando: false,
    materia_tiene_apuntes: false,
  });

  const filtered = useFilteredSubjects(originalDataParam, estadoChecked);

  useEffect(() => {
    setDataApi(filtered);
  }, [filtered]);

  const handleOnChange = (e) => {
    const { name, checked } = e.target;
    setEstadoChecked((prev) => ({ ...prev, [name]: checked }));
  };

  if (isLoading) return <p>Cargando materias...</p>;

  return (
    <>
      <div id="materias__filtros">
        <h3>Filtrar por:</h3>
        <div className="filtros__inputs">
          {["Promocionada", "Pendiente", "Cursando"].map((estado) => {
            const id = `materia_${estado.toLowerCase()}`;
            return (
              <label key={id} htmlFor={id}>
                <input
                  type="checkbox"
                  id={id}
                  name={id}
                  onChange={handleOnChange}
                />
                {estado}
              </label>
            );
          })}
          <label htmlFor="materia_tiene_apuntes">
            <input
              type="checkbox"
              id="materia_tiene_apuntes"
              name="materia_tiene_apuntes"
              onChange={handleOnChange}
            />
            Tiene apuntes
          </label>
        </div>
      </div>

      <Materias_List subjects_p={dataApi} />
    </>
  );
};

export default Materias_Form;
*/

/*
export const useFilteredSubjects = (originalDataParam, estadoChecked) => {
  const filtrosEstado = ["Promocionada", "Pendiente", "Cursando"];
  const estadosSeleccionados = filtrosEstado.filter((estado) =>
    estadoChecked[`materia_${estado.toLowerCase()}`]
  );

  const filtrado = originalDataParam.filter((materia) => {
    const coincideEstado =
      estadosSeleccionados.length === 0 || estadosSeleccionados.includes(materia.estado);
    const coincideApuntes =
      !estadoChecked.materia_tiene_apuntes || materia.tiene_apuntes;

    return coincideEstado && coincideApuntes;
  });

  return filtrado;
};
*/

const useFilterData = (estadoCheckedParam: any, originalDataParam: any) => {
  // let finalFiltrada = [...originalDataParam];
  // useEffect(() => {
    const dataFiltradaSeleccionada = [];
    let finalFiltrada = [...originalDataParam];

    if (estadoCheckedParam.materia_promocionada) { dataFiltradaSeleccionada.push("Promocionada"); }
    if (estadoCheckedParam.materia_pendiente) { dataFiltradaSeleccionada.push("Pendiente"); }
    if (estadoCheckedParam.materia_cursando) { dataFiltradaSeleccionada.push("Cursando"); }

    if (dataFiltradaSeleccionada.length > 0) {
      finalFiltrada = finalFiltrada.filter((e, i) => {
        return dataFiltradaSeleccionada.includes(e.estado);
      });
    }

    if (estadoCheckedParam.materia_tiene_apuntes) {
      finalFiltrada = finalFiltrada.filter((e) => {
        return e.tiene_apuntes;
      });
    }

    // setDataApi(finalFiltrada)
  // }, [estadoCheckedParam]);
  return { finalFiltrada };
};

export default useFilterData;
