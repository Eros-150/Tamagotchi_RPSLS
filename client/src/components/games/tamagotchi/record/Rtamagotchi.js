import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../../../App.css";

const Rtamagotchi = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/tamagotchi/records");
      const data = await response.json();
      setResults(data);
    };

    fetchData();
  }, []);

  return (
<>
      <table className="results-table mx-auto">
        <thead>
          <tr>
            <th className="p-1">Name</th>
            <th>Hunger</th>
            <th>Happiness</th>
            <th>Health</th>
            <th>Years</th>
            <th>Cause Of Death</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td className="p-1">{result.name}</td>
              <td>{result.hunger}</td>
              <td>{result.happiness}</td>
              <td>{result.health}</td>
              <td>{result.years}</td>
              <td>{result.causeOfDeath}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>  );
};

export default Rtamagotchi;
