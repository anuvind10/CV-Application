function CVContent({ experiences, educations }) {
  return (
    <div className="CV-content">
      <h2>Experience</h2>
      <div className="experience-preview">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience">
            <div className="experience-left">
              <div className="date-disp">
                <p>{exp.from}</p>
                <p>{exp.from !== "" ? "-" : ""}</p>
                <p>
                  {exp.to !== "" ? exp.to : exp.from !== "" ? "present" : ""}
                </p>
              </div>
              <p>{exp.location}</p>
            </div>
            <div className="experience-right">
              <p className="company-name">{exp.name}</p>
              <p>{exp.details}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Education</h2>
      <div className="education-preview">
        {educations.map((edu) => (
          <div key={edu.id} className="education">
            <div className="education-left">
              <div className="date-disp">
                <p>{edu.from}</p>
                <p>{edu.from !== "" ? "-" : ""}</p>
                <p>
                  {edu.to !== "" ? edu.to : edu.from !== "" ? "present" : ""}
                </p>
              </div>
              <p>{edu.location}</p>
            </div>
            <div className="education-right">
              <p className="institute-name">{edu.name}</p>
              <p>{edu.course}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVContent;
