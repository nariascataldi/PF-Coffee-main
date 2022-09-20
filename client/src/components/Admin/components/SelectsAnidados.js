import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [diet, setDiet] = useState("");

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>México</h3>
      <SelectList
        title="name"
        url="http://localhost:3001/DIETS"
        handleChange={(e) => {
          setDiet(e.target.value);
        }}
      />
      <pre>
        <code>
          {diet}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;
