import React from 'react'
import { ProjectCard } from './ProjectCard'
import SkillCard from './SkillCard'
import number from './assets/number-one.png'
export default function App() {
    return (
        <div className='bg-slate-900 h-screen w-screen overflow-x-hidden '>
            <main className='md:snap-y  lg:snap-proximity md:snap-proximity  h-screen w-screen' >
                <section className='about snap-center  h-screen w-screen flex justify-center items-center flex-col'>
                    <h1 className='text-2xl   font-semibold '>Shubham Rasal</h1>
                    <h3>Software Enthusiast</h3>
                    <p>I am a passion programmer who likes to code.
                    </p>
                </section>
                <section className='skills snap-center  h-auto w-screen flex items-center flex-col bg-teal-500'>
                    <h1 className=' text-black  text-xl flex items-start w-screen font-semibold border-slate-900 border-b-4 p-2'>Skills</h1>
                    <div className="holder flex justify-around m-3 my-12 items-center  flex-wrap w-5/6 ">
                        <SkillCard name={'HTML'} />
                        <SkillCard name={'CSS'} />
                        <SkillCard name={'Tailwind'} />
                        <SkillCard name={'JS'} />
                        <SkillCard name={'React'} />
                        <SkillCard name={'Node.js'} />
                        <SkillCard name={'Git'} />
                        <SkillCard name={'Blockchain'} />
                        <SkillCard name={'C++'} />

                    </div>

                </section>

                <section className='projects flex items-center justify-center snap-center  h-auto w-screen bg-slate-900'>
                     
                     
                     <ProjectCard/> 


                </section>
            </main>

        </div>
    )
}
