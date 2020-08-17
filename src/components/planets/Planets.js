import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

function Planets() {
  const { data, status } = useQuery("planets", fetchPlanets);
  console.log(data);

  return (
    <>
      <h2>Planets</h2>
      {/* <p>{status}</p> */}

      {status === "loading" && <div>Loading data...</div>}

      {status === "error" && <div>Error fetching data</div>}

      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet}/>
          ))}
        </div>
      )}
    </>
  );
}

export default Planets;
