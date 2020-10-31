// import data from "./data.json";
import Header from "../components/header";
import Contact from "../components/contact";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Education from "../components/education";
import Options from "../components/options";
import Editor from "../components/editor";
import { useState } from "react";

const parseResume = (str) => {
  let ans = {};

  try {
    ans = JSON.parse(str);
  } catch {
    return {};
  }

  return ans;
};

export default function Home() {
  const [data, setData] = useState("{}");
  const { header, contact, skills, experience, education } = parseResume(data);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <>
      <Options />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem"
        }}
      >
        <Editor data={data} handleChange={handleChange} />
        <section className="sheet" id="resume">
          {header && <Header header={header} />}
          {contact && <Contact contact={contact} />}
          {experience && <Experience experience={experience} />}
          {skills && <Skills skills={skills} />}
          {education && <Education education={education} />}
        </section>
      </div>
    </>
  );
}
