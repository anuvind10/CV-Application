import "./styles/App.css";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import expandIcon from "./images/expand.svg";
// import collapse from "./images/collapse.svg";

function Section({ className, header, section }) {
  return (
    <>
      <section className={className}>
        <div className="header">
          <h2>{header}</h2>
          <img src={expandIcon} alt="expand section" className="toggle-icon" />
        </div>
        {section}
      </section>
    </>
  );
}

function App() {
  return (
    <>
      <div className="input-section">
        <Section
          className="personal-info"
          header="Personal Details"
          section={<PersonalInfo></PersonalInfo>}
        ></Section>
        <Section
          className="experience"
          header="Experience"
          section={<Experience></Experience>}
        ></Section>
        <Section
          className="education"
          header="Education"
          section={<Education></Education>}
        ></Section>
      </div>
      <div className="CV-preview">
        <div className="CV-header"></div>
        <div className="CV-content"></div>
      </div>
    </>
  );
}

export default App;
