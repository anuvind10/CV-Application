import "./App.css";
import PersonalInfo from "../components/PersonalInfo";
import Education from "../components/Education";
import Experience from "../components/Experience";
import expandIcon from "./images/expand.svg";
// import collapse from "./images/collapse.svg";

function App() {
  return (
    <div className="input-section">
      <section className="personalInfo">
        <div className="header">
          <h2>Personal Details</h2>
          <img src={expandIcon} className="toggle-icon" id="personal-toggle" />
        </div>
        <PersonalInfo></PersonalInfo>
      </section>
      <section className="experience">
        <div className="header">
          <h2>Experience</h2>
          <img
            src={expandIcon}
            className="toggle-icon"
            id="experience-toggle"
          />
        </div>
        <Experience></Experience>
      </section>
      <section className="education">
        <div className="header">
          <h2>Education</h2>
          <img src={expandIcon} className="toggle-icon" id="education-toggle" />
        </div>
        <Education></Education>
      </section>
    </div>
  );
}

export default App;
