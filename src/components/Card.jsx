import React from 'react'

function Card({title, text}) {
  return (
    <div className='bg-slate-700 border-2 border-slate-400 rounded-lg px-10 py-5 min-w-[200px] max-w-[600px]'>
        <h2 className='text-center text-xl mb-5'>{title}</h2>
        <p className='text-center text-base'>{text}</p>
    </div>
  )
}

export default Card