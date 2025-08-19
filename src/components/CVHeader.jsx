function CVHeader({ personalInfo }) {
  return (
    <div className="CV-header">
      <h2 className="name">{personalInfo.fullname}</h2>
      <div className="contact-info">
        <p id="email">{personalInfo.email}</p>
        <p id="phone">{personalInfo.phone}</p>
        <p id="address">{personalInfo.address}</p>
      </div>
    </div>
  );
}

export default CVHeader;
