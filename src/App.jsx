import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVHeader from "./components/CVHeader";
import CVContent from "./components/CVContent";
import expandIcon from "./images/expand.svg";
import { useState } from "react";
// import collapse from "./images/collapse.svg";

function Section({ className, header, section, isActive, onActivate }) {
  return (
    <>
      <section className={className}>
        <div className="header" onClick={() => onActivate(className)}>
          <h2>{header}</h2>
          <img
            src={expandIcon}
            alt="expand section"
            className={`toggle-icon ${isActive ? "expanded" : "collapsed"}`}
          />
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
  const [activeSection, setActiveSection] = useState("personal-info");

  const [personalInfo, setPersonlInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  const [experiences, setExperiences] = useState([
    {
      id: Date.now(),
      name: "",
      from: "",
      to: "",
    },
  ]);

  const [educations, setEducations] = useState([
    { id: Date.now(), name: "", from: "", to: "" },
  ]);

  return (
    <>
      <div className="input-section">
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
          className="experience"
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
          className="education"
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
      <div className="CV-preview">
        <CVHeader personalInfo={personalInfo}></CVHeader>
        <CVContent></CVContent>
      </div>
    </>
  );
}

export default App;
