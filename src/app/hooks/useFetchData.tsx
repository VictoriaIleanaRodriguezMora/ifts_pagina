import React, { useEffect, useState } from "react";
// import apiUrl from "/public/subjects/subjects_data.json";

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataApi, setDataApi] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  useEffect(() => {

    fetch("/public/subjects/subjects_data.json")
      .then((res) => res.json())
      .then((dataSubjects) => {
        setDataApi(dataSubjects);
        setOriginalData(dataSubjects);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log("Error al consumir API", e);
      })
      .finally(() => {
        console.log("FINALLY dataApi", dataApi);
      });
  }, []);
  return { isLoading, dataApi, setDataApi, originalData };
};

export default useFetchData;
