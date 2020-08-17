import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people");
  return res.json();
};

function People() {
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data);

  return (
    <>
      <h2>People</h2>

      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </>
  );
}

export default People;
