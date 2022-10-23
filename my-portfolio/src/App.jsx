import React from "react";
import { ProjectCard } from "./ProjectCard";
import SkillCard from "./SkillCard";
import number from "./assets/number-one.png";
import code from "./assets/code.svg";
import dark from "./assets/dark.svg";
import light from "./assets/light.svg";

import { projects } from "./projects";
export default function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className={`h-screen w-screen ${darkMode ? "dark" : ""} `}>
      <div className="mode-seletor opacity-70 shadow-sm  fixed z-50   h-14 flex justify-end items-center  w-screen">
        <div className="icon opacity-100  text-slate-100   m-6 dark:bg-teal-200 bg-white p-2 rounded-full">
          <button
            className="  flex items-center justify-center "
            onClick={() => setDarkMode(!darkMode)}
          >
            <img
              src={darkMode ? light : dark}
              alt="DARKMODE"
              className="text-red-700"
              height={20}
              width={20}
            />
          </button>
        </div>
      </div>
      <main
        className="md:snap-y  lg:snap-proximity md:snap-proximity  h-screen w-screen transition duration-700
       dark:bg-slate-900 dark:text-teal-300
       font-pangolin 
       bg-slate-100"
      >
        <section className="about snap-center  h-screen w-screen flex justify-center items-center flex-col
         dark:bg-slate-900  bg-slate-200
         transition duration-700 ">
          <img
            src={code}
            alt=""
            height={100}
            width={100}
            className="rounded-full 
                     motion-safe:animate-bounce
                      lg:text-6xl lg:h-48 lg:w-48 my-12
                     dark:drop-shadow-[0_35px_120px_rgba(28,255,286,1)]
                     w-48 h-48 md:text-4xl

                    shadow-2xl                  
                   
                    "
          />
          <h1 className="text-5xl   font-semibold text-teal-500 ">
            Shubham Rasal
          </h1>
          <h3 className="text-2xl transition duration-700 my-2n text-teal-600 dark:text-teal-400 ">
            Software Enthusiast
          </h3>
          <p className="dark:text-teal-600 text-xl my-4 lg:w-1/2 w-full px-3  text-slate-700 text-center">
            I am a software developer who loves to build things that live on the
            internet, from websites to web apps. I specialize in building
            exceptional websites, applications, and everything in between.
             Some technologies I enjoy working with include
            ReactJS, NodeJS, ExpressJS, MongoDB, and Firebase.
          </p>
        </section>

        <section className="skills snap-center  min-h-screen w-screen flex  items-center flex-col bg-slate-200   dark:bg-slate-900 dark:text-teal-300 ">
          <h1
            className=" text-black p-3 m-3  text-4xl text-center justify-center
                     flex items-start  font-semibold dark:text-teal-300 transition duration-700 border-b-4 w-1/2 border-teal-300 dark:border-teal-400 "
          >
            Skills
          </h1>
          <div className="holder flex justify-center m-3 my-12 items-center h-full  flex-wrap w-screen p-3 ">
            <SkillCard name={"HTML"} />
            <SkillCard name={"CSS"} />
            <SkillCard name={"Tailwind"} />
            <SkillCard name={"JS"} />
            <SkillCard name={"React"} />
            <SkillCard name={"Node.js"} />
            <SkillCard name={"Git"} />
            <SkillCard name={"Blockchain"} />
            <SkillCard name={"C++"} />
          </div>
        </section>

        <section className="projects flex flex-col items-center justify-center snap-center  h-fit w-screen bg-slate-200 dark:bg-slate-900 transition duration-700 ">
          <h1
            className="text-4xl text-center justify-center flex items-start w-screen font-semibold font-pangolin
         dark:bg-slate-900 bg-slate-200 mt-2 dark:text-teal-300 transition duration-700 px-8 border-b-4 
         lg:w-1/2 border-teal-300 dark:border-teal-400 p-4 "
          >
            Projects
          </h1>
          <div className="holder w-screen flex flex-col items-center justify-center dark:bg-slate-900 transition duration-700">
            {projects.map((project, index) => {
              return <ProjectCard project={project} key={index} />;
            })}
          </div>
        </section>
        <footer className="footer flex justify-center  h-16 items-center text-center w-screen bg-teal-200 dark:bg-slate-800 dark:text-slate-900 transition duration-700 ">
          <p className="text-xl text-teal-900 dark:text-teal-300 ">
            © All right is reserved by Shubham Rasal | Made with ❤️ by me
          </p>
        </footer>
      </main>
    </div>
  );
}
