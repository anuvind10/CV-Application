// import { useState } from "react";

function Education() {
  return (
    <>
      <div className="school info">
        <label htmlFor="schoolName">School Name:</label>
        <input type="text" name="schoolName" />
        <label htmlFor="fromDate">From</label>
        <input type="date" name="fromDate" id="fromDate" className="date" />
        <label htmlFor="toDate">From</label>
        <input type="date" name="toDate" id="toDate" className="date" />
      </div>
    </>
  );
}

export default Education;
