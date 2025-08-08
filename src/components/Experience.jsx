import { useState } from "react";
import removeIcon from "../images/remove.svg";

function Experience() {
  const [experiences, setExperiences] = useState([{ id: Date.now() }]);

  function addExperience() {
    setExperiences((prev) => {
      return [...prev, { id: Date.now() + Math.random() }];
    });
  }

  function removeExperience(idToRemove) {
    setExperiences((prev) => prev.filter((exp) => exp.id !== idToRemove));
  }

  return (
    <>
      {experiences.map((exp) => (
        <div key={exp.id} className="experience-info">
          <label htmlFor={`company-${exp.id}`}>Company:</label>
          <input type="text" id={`company-${exp.id}`} />
          <label htmlFor={`fromDate-${exp.id}`}>From:</label>
          <input
            type="date"
            name={`fromDate-${exp.id}`}
            id={`fromDate-${exp.id}`}
            className="date"
          />
          <label htmlFor={`toDate-${exp.id}`}>To:</label>
          <input
            type="date"
            name={`toDate-${exp.id}`}
            id={`toDate-${exp.id}`}
            className="date"
          />
          <img
            src={removeIcon}
            alt="remove experience"
            className="remove-icon"
            onClick={() => removeExperience(exp.id)}
          />
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </>
  );
}

export default Experience;
