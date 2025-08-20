// import { useState } from "react";
import removeIcon from "../images/remove.svg";

function Experience({ experiences, setExperiences }) {
  function addExperience() {
    setExperiences((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), name: "", from: "", to: "" },
    ]);
  }

  function removeExperience(idToRemove) {
    setExperiences((prev) => prev.filter((exp) => exp.id !== idToRemove));
  }

  function updateExperiece(id, field, value) {
    setExperiences((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  }

  return (
    <>
      {experiences.map((exp) => (
        <div key={exp.id} className="experience-info">
          <label htmlFor={`company-${exp.id}`}>Company:</label>
          <input
            type="text"
            id={`company-${exp.id}`}
            placeholder="Google"
            value={exp.name}
            onChange={(e) => {
              updateExperiece(exp.id, "name", e.target.value);
            }}
          />
          <label htmlFor={`fromDate-${exp.id}`}>From:</label>
          <input
            type="date"
            name={`fromDate-${exp.id}`}
            id={`fromDate-${exp.id}`}
            className="date"
            value={exp.from}
            onChange={(e) => {
              updateExperiece(exp.id, "from", e.target.value);
            }}
          />
          <label htmlFor={`toDate-${exp.id}`}>To:</label>
          <input
            type="date"
            name={`toDate-${exp.id}`}
            id={`toDate-${exp.id}`}
            className="date"
            value={exp.to}
            onChange={(e) => {
              updateExperiece(exp.id, "to", e.target.value);
            }}
          />
          <img
            src={removeIcon}
            alt="remove experience"
            className="remove-icon"
            onClick={() => removeExperience(exp.id)}
          />
        </div>
      ))}
      <button onClick={addExperience} className="addBtn">
        + Experience
      </button>
    </>
  );
}

export default Experience;
