// import { useState } from "react";

function Experience() {
  // const [experiences, setExperiences] = useState();

  // function addExperience() {
  //   setExperiences((prev) => {
  //     [...prev, { id: Date.now() + Math.random() }];
  //   });
  // }

  return (
    <>
      <div className="experience info">
        <label htmlFor="Company">Company:</label>
        <input type="text" id="Company" />
        <label htmlFor="fromDate">From</label>
        <input type="date" name="fromDate" id="fromDate" className="date" />
        <label htmlFor="toDate">From</label>
        <input type="date" name="toDate" id="toDate" className="date" />
      </div>
    </>
  );
}

export default Experience;
