import React from "react";
import { ProjectCard } from "./ProjectCard";
import SkillCard from "./SkillCard";
import number from "./assets/number-one.png";
import code from "./assets/code.svg";
import dark from "./assets/dark.svg";
import light from "./assets/light.svg";
import dElect from "./assets/dElect.png";
import codersdao from "./assets/coders-dao.png";
export default function App() {
  // const project = {
  //     title: 'dElect - Decentralized Election System',
  //     image: 'https://i.ibb.co/7bZJYyv/d-Elect.png',
  //     description: 'Artistry Inc is a brand that resonates with quality designer products that promise a subtle yet elegant touch. The company has been synonymous with luxury, quality and perfection ever since its inception.',
  //     tech: ['React', 'Tailwind', 'HTML'],
  //     demo: 'https://shubham-rasal.github.io/dElect/',
  //     github: 'https://github.com/shubham-rasal/dElect'
  // }

  const projects = [
    {
      index: 1,
      title: "dElect - Decentralized Election System",
      image: dElect,
      description:
        "Artistry Inc is a brand that resonates with quality designer products that promise a subtle yet elegant touch. The company has been synonymous with luxury, quality and perfection ever since its inception.",
      tech: ["React", "Tailwind", "HTML", "Solidity", "Web3"],
      demo: "https://shubham-rasal.github.io/dElect/",
      github: "https://github.com/shubham-rasal/dElect",
    },
    {
      index: 2,
      title: "Coder's Dao",
      image: codersdao,
      description:
        "Artistry Inc is a brand that resonates with quality designer products that promise a subtle yet elegant touch. The company has been synonymous with luxury, quality and perfection ever since its inception.",
      tech: ["React", "Tailwind", "HTML", "Solidity", "Web3"],
      demo: "https://shubham-rasal.github.io/coders-dao/",
      github: "https://github.com/Shubham-Rasal/coders-dao",
    },
  ];

  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className={`h-screen w-screen ${darkMode ? "dark" : ""}   `}>
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
      <main className="md:snap-y  lg:snap-proximity md:snap-proximity  h-screen w-screen transition duration-700 dark:bg-slate-900 dark:text-teal-300 ">
        <section className="about snap-center  h-screen w-screen flex justify-center items-center flex-col ">
          <img
            src={code}
            alt=""
            height={100}
            width={100}
            className="rounded-full 
                     motion-safe:animate-bounce
                      lg:text-6xl lg:h-64 lg:w-64 my-12
                     dark:drop-shadow-[0_35px_120px_rgba(28,255,286,1)]
                    shadow-2xl                  
                   
                    "
          />
          <h1 className="text-5xl   font-semibold text-teal-300 ">
            Shubham Rasal
          </h1>
          <h3 className="text-2xl transition duration-700 text-teal-600 dark:text-teal-400 ">
            Software Enthusiast
          </h3>
          <p className="dark:text-teal-600 text-xl w-1/2 text-center">
            I am a passion programmer who likes to code. I like to build things
            that can provide value to People as i believe in utility of code.
          </p>
        </section>
        
        <section className="skills snap-center  min-h-screen w-screen flex  items-center flex-col bg-slate-200   dark:bg-slate-900 dark:text-teal-300 ">
          <h1
            className=" text-black p-3 m-3  text-4xl text-center justify-center
                     flex items-start  font-semibold dark:text-teal-300 transition duration-700 border-b-4 w-1/2 border-teal-600 dark:border-teal-400 "
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

        <h1 className="text-4xl text-center justify-center flex items-start w-screen font-semibold
         dark:bg-slate-900 dark:text-teal-300 transition duration-700 ">
          Projects
        </h1>
        <section className="projects flex items-center justify-center snap-center  h-fit w-screen bg-slate-100 dark:bg-slate-900 transition duration-700 ">
          <div className="holder w-screen flex flex-col items-center justify-center dark:bg-slate-900 transition duration-700">
            {projects.map((project, index) => {
              return <ProjectCard project={project} key={index} />;
            })}
          </div>
        </section>
        <footer className="footer flex justify-center items-center h-14 w-screen bg-teal-200 dark:bg-slate-500 dark:text-slate-900 transition duration-700 ">
          <p className="text-xl text-teal-900 dark:text-teal-300 ">
            Made with ❤️ by Shubham Rasal
          </p>
        </footer>
      </main>
    </div>
  );
}
