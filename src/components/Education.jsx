import removeIcon from "../images/remove.svg";

function Education({ educations, setEducations }) {
  function addEducation() {
    setEducations((prev) => [
      ...prev,
      { id: Date.now() + Math.random(), name: "", from: "", to: "" },
    ]);
  }

  function removeEducation(idToRemove) {
    setEducations((prev) => prev.filter((edu) => edu.id !== idToRemove));
  }

  function updateEducation(id, field, value) {
    setEducations((prev) =>
      prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  }

  return (
    <>
      {educations.map((edu) => (
        <div key={`education-${edu.id}`} className="school-info">
          <label htmlFor={`name-${edu.id}`}>Institute:</label>
          <input
            type="text"
            name={`name-${edu.id}`}
            id={`name-${edu.id}`}
            placeholder="IIT Bombay"
            value={edu.name}
            onChange={(e) => updateEducation(edu.id, "name", e.target.value)}
          />
          <label htmlFor={`fromDate-${edu.id}`}>From</label>
          <input
            type="date"
            name={`fromDate-${edu.id}`}
            id={`fromDate-${edu.id}`}
            className="date"
            value={edu.from}
            onChange={(e) => updateEducation(edu.id, "from", e.target.value)}
          />
          <label htmlFor={`toDate-${edu.id}`}>To</label>
          <input
            type="date"
            name={`toDate-${edu.id}`}
            id={`toDate-${edu.id}`}
            className="date"
            value={edu.to}
            onChange={(e) => updateEducation(edu.id, "to", e.target.value)}
          />
          <img
            src={removeIcon}
            alt="remove education"
            className="remove-icon"
            onClick={() => {
              removeEducation(edu.id);
            }}
          />
        </div>
      ))}
      <button onClick={addEducation} className="addBtn">
        + Education
      </button>
    </>
  );
}

export default Education;
