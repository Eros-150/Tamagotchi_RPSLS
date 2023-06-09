import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../../../App.css";

function FormTamagotchi(props) {
  const [formData, setFormData] = useState({
    name: '',

    hunger: props.hunger,

    happiness: props.happiness,

    health: props.health,

    years: props.age,

    causeOfDeath: props.causeOfDeath,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/tamagotchi", {
      method: "POST",

      headers: { "Content-Type": "application/json" },

      body: JSON.stringify(formData),
    })
      .then((response) => response.json())

      .then((data) => console.log(data))

      .catch((error) => console.error(error));

    document.getElementById("submit").disabled = true;
  };

  return (
    <form id="tamagotchi-form" onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name:</label>
      <input
        type="text"
        id="name-input"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <br />
      {}

      <button className="btn btn-primary rounded" id="submit" type="submit">
        Submit
      </button>
    </form>
  );
}

export default FormTamagotchi;
