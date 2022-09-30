import React from 'react'

const SkillCard = ({name}) => {
    return (
        <div className='bg-slate-900 text-teal-300 w-24 h-8
         flex  text-center rounded-md shadow-md
          items-center justify-center p-1 mx-2  my-3 cursor-pointer '>
            {name}
        </div>
    )
}

export default SkillCard