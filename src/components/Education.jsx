import { useState } from "react";
import removeIcon from "../images/remove.svg";

function Education() {
  const [educations, setEducation] = useState([{ id: Date.now() }]);

  function addEducation() {
    setEducation((prev) => {
      return [...prev, { id: Date.now() + Math.random() }];
    });
  }

  function removeEducation(idToRemove) {
    setEducation((prev) => prev.filter((edu) => edu.id !== idToRemove));
  }

  return (
    <>
      {educations.map((edu) => (
        <div key={`education-${edu.id}`} className="school-info">
          <label htmlFor={`name-${edu.id}`}>School Name:</label>
          <input type="text" name={`name-${edu.id}`} id={`name-${edu.id}`} />
          <label htmlFor={`fromDate-${edu.id}`}>From</label>
          <input
            type="date"
            name={`fromDate-${edu.id}`}
            id={`fromDate-${edu.id}`}
            className="date"
          />
          <label htmlFor={`toDate-${edu.id}`}>To</label>
          <input
            type="date"
            name={`toDate-${edu.id}`}
            id={`toDate-${edu.id}`}
            className="date"
          />
          <img
            src={removeIcon}
            alt="remove education"
            className="remove-icon"
            onClick={() => {
              removeEducation(edu.id);
            }}
          />
        </div>
      ))}
      <button onClick={addEducation}>Add Education</button>
    </>
  );
}

export default Education;
