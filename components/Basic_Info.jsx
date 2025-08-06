// import { useState } from "react";

function BasicInfo() {
  return (
    <>
      <div className="firstName info">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" />
      </div>
      <div className="lastName info">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" />
      </div>
      <div className="phoneInfo info">
        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" />
      </div>
      <div className="emailInfo info">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
      </div>
    </>
  );
}

export default BasicInfo;
