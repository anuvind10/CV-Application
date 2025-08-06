import "./App.css";
import BasicInfo from "../components/Basic_Info";
import Education from "../components/Education";
import Experience from "../components/Experience";

function App() {
  return (
    <div className="content">
      <section className="basicInfo">
        <h2>Basic Info</h2>
        <BasicInfo></BasicInfo>
      </section>
      <section class="experience">
        <h2>Experience</h2>
        <Experience></Experience>
      </section>
      <section className="education">
        <h2>Education</h2>
        <Education></Education>
      </section>
    </div>
  );
}

export default App;
