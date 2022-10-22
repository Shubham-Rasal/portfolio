import React from 'react'

const SkillCard = ({name}) => {
    return (
        <div className='skillcard bg-slate-50 text-teal-600 w-32  aspect-square
         flex  text-center rounded-lg  text-2xl hover:scale-105
          transition scale duration-700
          items-center justify-center m-4 cursor-pointer shadow-2xl 
           dark:bg-slate-800 dark:text-teal-200
          dark:hover:bg-teal-200 dark:hover:text-slate-900            
            dark:hover:opacity-100
            dark:opacity-70
            dark:border-l-2
            dark:border-t-2
            
            
          '>
            {name}
        </div>
    )
}

export default SkillCard