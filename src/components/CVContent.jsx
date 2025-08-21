function CVContent({ experiences, educations }) {
  return (
    <div className="CV-content">
      <h2>Experience</h2>
      <div className="experience-preview">
        {experiences.map((exp) => (
          <div key={exp.id}>
            <p>{exp.name}</p>
            <p>{exp.from}</p>
            <p>{exp.to}</p>
            <p>{exp.details}</p>
          </div>
        ))}
      </div>
      <h2>Education</h2>
      <div className="education-preview">
        {educations.map((edu) => (
          <div key={edu.id}>
            <p>{edu.name}</p>
            <p>{edu.from}</p>
            <p>{edu.to}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVContent;
