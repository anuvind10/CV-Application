// import { useState } from "react";

function Experience() {
  // const [experiences, setExperiences] = useState();

  // function addExperience() {
  // setExperiences((prev) => {
  // [...prev, { id: Date.now() + Math.random() }];
  // });
  // }

  return (
    <>
      <div className="experienceInfo">
        <div>
          <label htmlFor="Company">Company:</label>
          <input type="text" id="Company" />
        </div>
        <div>
          <label htmlFor="fromDate">From:</label>
          <input type="date" name="fromDate" id="fromDate" className="date" />
        </div>
        <div>
          <label htmlFor="toDate">To:</label>
          <input type="date" name="toDate" id="toDate" className="date" />
        </div>
      </div>
      <button>Add Experience</button>
    </>
  );
}

export default Experience;
