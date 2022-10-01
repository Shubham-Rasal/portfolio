import React from 'react'
import dElect from './assets/dElect.png'

export const ProjectCard = () => {
  return (
    <div className="card w-screen h-screen m-16 p-2 bg-slate-700">
      <div className="flex relative pb-32">

        <h1 className=' absolute h-28 aspect-square  rounded-full flex justify-center items-center
      text-7xl font-semibold opacity-70
      text-white  drop-shadow-[0_35px_35px_rgba(0,0,0,1)] shadow-2xl'>
          01
        </h1>
        <h2 className=' h-16 bg-slate-900 w-full text-4xl text-cyan-200 flex items-center justify-center'>
          <u>

            dElect - Decentralized voting system
          </u>
        </h2>
      </div>
      <div className="flex flex-col justify-around w-screen items-center bg-red-300  lg:flex-row lg:flex">
        <div className="h-full aspect-auto flex items-center justify-center">
          <img src={dElect} alt="election photo" className=' object-cover h-full w-full' />
        </div>

        <div className="h-full w-1/3 flex items-center justify-center bg-teal-600 px-12 ">
          <p className='h-full w-full text-start bg-teal-900 '>
            Artistry Inc is a brand that resonates
            with quality designer products that promise
            a subtle yet elegant touch. The company has
            been synonymous with luxury, quality and
            perfection ever since its inception.
          </p>
        </div>
      </div>



    </div>

  )
}
