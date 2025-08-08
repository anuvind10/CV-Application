// import { useState } from "react";

function Education() {
  return (
    <>
      <div className="school-info">
        <div>
          <label htmlFor="schoolName">School Name:</label>
          <input type="text" name="schoolName" />
        </div>
        <div>
          <label htmlFor="fromDate">From</label>
          <input type="date" name="fromDate" id="fromDate" className="date" />
        </div>
        <div>
          <label htmlFor="toDate">To</label>
          <input type="date" name="toDate" id="toDate" className="date" />
        </div>
      </div>
      <button>Add Education</button>
    </>
  );
}

export default Education;
