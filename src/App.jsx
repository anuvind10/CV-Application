import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVHeader from "./components/CVHeader";
import CVContent from "./components/CVContent";
import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

function Section({ className, header, section, isActive, onActivate }) {
  return (
    <>
      <section className={className}>
        <div className="header" onClick={() => onActivate(className)}>
          <h2>{header}</h2>
        </div>
        <div
          className={`section-content ${isActive ? "expanded" : "collapsed"}`}
        >
          {section}
        </div>
      </section>
    </>
  );
}

function App() {
  const formRef = useRef();
  const [activeSection, setActiveSection] = useState("personal-info");
  const [personalInfo, setPersonlInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });
  const [experiences, setExperiences] = useState([
    {
      id: Date.now() + Math.random(),
      name: "",
      location: "",
      from: "",
      to: "",
      details: "",
    },
  ]);
  const [educations, setEducations] = useState([
    {
      id: Date.now() + Math.random(),
      name: "",
      location: "",
      from: "",
      to: "",
      course: "",
    },
  ]);

  function clearCV() {
    setPersonlInfo({ fullname: "", email: "", phone: "", address: "" });
    setExperiences([
      {
        id: Date.now() + Math.random(),
        name: "",
        location: "",
        from: "",
        to: "",
        details: "",
      },
    ]);
    setEducations([
      {
        id: Date.now() + Math.random(),
        name: "",
        location: "",
        from: "",
        to: "",
        course: "",
      },
    ]);
  }

  function saveCV() {
    const element = formRef.current;
    const options = {
      margin: 10,
      filename: "My-CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  }

  return (
    <>
      <div className="input-section">
        <div className="btns">
          <button onClick={clearCV} className="clear-btn">
            Clear
          </button>
          <button onClick={saveCV} className="save-btn">
            Save
          </button>
        </div>
        <Section
          className="personal-info"
          header="Personal Details"
          section={
            <PersonalInfo
              personalInfo={personalInfo}
              setPersonlInfo={setPersonlInfo}
            ></PersonalInfo>
          }
          isActive={activeSection === "personal-info"}
          onActivate={setActiveSection}
        ></Section>
        <Section
          className="experience-input"
          header="Experience"
          section={
            <Experience
              experiences={experiences}
              setExperiences={setExperiences}
            ></Experience>
          }
          isActive={activeSection === "experience"}
          onActivate={setActiveSection}
        ></Section>
        <Section
          className="education-input"
          header="Education"
          section={
            <Education
              educations={educations}
              setEducations={setEducations}
            ></Education>
          }
          isActive={activeSection === "education"}
          onActivate={setActiveSection}
        ></Section>
      </div>
      <div className="CV-preview" ref={formRef}>
        <CVHeader personalInfo={personalInfo}></CVHeader>
        <CVContent
          experiences={experiences}
          educations={educations}
        ></CVContent>
      </div>
    </>
  );
}

export default App;
