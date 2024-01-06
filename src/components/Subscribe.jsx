import React from 'react'

const Subscribe = () => {
  return (
    <div className=' max-w-[1440px] mx-8 md:mx-16 py-4'>
        <div className=' flex flex-col w-full mx-auto items-center'>
             <p className=' text-4xl text-center font-palanquin font-bold'>Sign Up For <span className=' text-coral-red'>Updates </span>And Newsletter</p>
             <div className=' mt-8 flex  justify-between border  border-slate-gray p-2 rounded-full  md:w-[50%] shadow-2xl shadow-white'>
                <input 
                  type='text'
                  placeholder='Subscribe@nike.com....'
                  className=' w-full p-1   focus:outline-none'
                  
                />
                <button className=' bg-coral-red text-white rounded-xl w-[100px] '>
                    Sign Up
                </button>
             </div>
        </div>
    </div>
  )
}

export default Subscribe