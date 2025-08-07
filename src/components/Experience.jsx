import { useState } from "react";

function Experience() {
  const [experiences, setExperiences] = useState([{ id: Date.now() }]);

  function addExperience() {
    setExperiences((prev) => {
      return [...prev, { id: Date.now() + Math.random() }];
    });
  }

  return (
    <>
      {experiences.map((exp) => (
        <div key={exp.id} className="experienceInfo">
          <div>
            <label htmlFor={`company-${exp.id}`}>Company:</label>
            <input type="text" id={`company-${exp.id}`} />
          </div>
          <div>
            <label htmlFor={`fromDate-${exp.id}`}>From:</label>
            <input
              type="date"
              name={`fromDate-${exp.id}`}
              id={`fromDate-${exp.id}`}
              className="date"
            />
          </div>
          <div>
            <label htmlFor={`toDate-${exp.id}`}>To:</label>
            <input
              type="date"
              name={`toDate-${exp.id}`}
              id={`toDate-${exp.id}`}
              className="date"
            />
          </div>
        </div>
      ))}
      <button onClick={addExperience}>Add Experience</button>
    </>
  );
}

export default Experience;
