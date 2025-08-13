// import { useState } from "react";

function PersonalInfo() {
  return (
    <>
      <div className="personalInfo name">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="first and last name" />
      </div>
      <div className="personalInfo emailInfo">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="johndoe@gmail.com" />
      </div>
      <div className="personalInfo phoneInfo">
        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" placeholder="+91 9999988888" />
      </div>
      <div className="personalInfo addresss">
        <label htmlFor="email">Address:</label>
        <input type="text" id="address" placeholder="Bangalore, India 680005" />
      </div>
    </>
  );
}

export default PersonalInfo;
