// import { useState } from "react";

function PersonalInfo() {
  return (
    <>
      <div className="firstName personalInfo">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" />
      </div>
      <div className="lastName personalInfo">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" />
      </div>
      <div className="phoneInfo personalInfo">
        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" />
      </div>
      <div className="emailInfo personalInfo">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
    </>
  );
}

export default PersonalInfo;
