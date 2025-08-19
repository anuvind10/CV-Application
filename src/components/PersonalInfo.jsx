function PersonalInfo({ personalInfo, setPersonlInfo }) {
  return (
    <>
      <div className="personalInfo name">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="John Doe"
          value={personalInfo.fullname || ""}
          onChange={(e) => {
            setPersonlInfo({ ...personalInfo, fullname: e.target.value });
          }}
        />
      </div>
      <div className="personalInfo emailInfo">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
          value={personalInfo.email}
          onChange={(e) => {
            setPersonlInfo({ ...personalInfo, email: e.target.value });
          }}
        />
      </div>
      <div className="personalInfo phoneInfo">
        <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          placeholder="+91 9999988888"
          value={personalInfo.phone}
          onChange={(e) => {
            setPersonlInfo({ ...personalInfo, phone: e.target.value });
          }}
        />
      </div>
      <div className="personalInfo addresss">
        <label htmlFor="email">Address:</label>
        <input
          type="text"
          id="address"
          placeholder="Bangalore, India 680005"
          value={personalInfo.address}
          onChange={(e) => {
            setPersonlInfo({ ...personalInfo, address: e.target.value });
          }}
        />
      </div>
    </>
  );
}

export default PersonalInfo;
