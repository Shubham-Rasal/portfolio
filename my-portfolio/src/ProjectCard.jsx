import React from 'react'
import dElect from './assets/dElect.png'
import SkillCard from './SkillCard'

export const ProjectCard = ({project}) => {
  console.log(project)
  return (
    <div className="card w-screen h-auto m-16 p-2
     flex flex-col items-center  dark:bg-slate-900 dark:text-teal-200
    " >
      <div className="flex relative pb-6 w-screen items-center h-36">

        <h1 className=' absolute lg:h-28 h-12 aspect-square  rounded-full flex justify-center items-center
          lg:text-7xl text-2xl font-semibold opacity-70
        text-white  drop-shadow-[0_35px_35px_rgba(0,0,0,1)] shadow-2xl dark:bg-teal-200 dark:text-teal-700 dark:opacity-20'>
         {project.index}
        </h1>
        <h2 className=' h-16 w-full lg:text-4xl
         text-teal-500 flex items-center justify-center underline underline-offset-8 pl-4 '>

          {project.title}
        </h2>
      </div>
      <div className="flex flex-col m-1 lg:h-96 lg:justify-around justify-center w-screen items-center lg:flex-row lg:flex  ">
        <div className=" lg:h-96 m-3 hover:bg-slate-700 transition-all duration-500  aspect-auto
         flex items-center justify-center 
         p-4 bg-slate-100 rounded-r-md shadow-2xl">
          <img src={project.image} alt="election photo" className=' object-cover h-full w-full ' />

        </div>

        <div className="h-full lg:w-1/3 flex flex-col lg:items-start items-center justify-center     ">
          <p className='w-full lg:text-start text-center text-2xl my-3 '>
           {project.description}
          </p>
          <div className="tech ">
            <div className="flex w-full">

              {project.tech.map((skill) => (
                 <div className="w-fit p-2 m-2 px-3 shadow-2xl shadow-slate-900  rounded-md   ">
                 {skill}
               </div>

                ))}

             
            
            </  div>

          </div>
          <div className="demo w-full h-16 flex lg:text-left lg:justify-start justify-center items-center m-2 "  >
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <div className="live bg-blue-500 cursor-pointer text-xl text-white rounded-2xl p-3  text-center ">

                Demo 🔗
              </div>
            </a>
          </div>
        </div>
      </div>



    </div>

  )
}
