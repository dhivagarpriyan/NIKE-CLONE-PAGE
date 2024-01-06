import React from 'react'
import { shoe8 } from '../assets/images'

const Superqualitysection = () => {
  return (
    <div className=' max-w-[1440px] mx-8 md:mx-16 py-4'>
        <div className=' w-full grid md:grid-cols-2 gap-12'>
            <div className=' flex flex-col justify-center '>
                <p className=' font-bold font-palanquin text-4xl py-4'>We Provide You <span className=' text-coral-red'>Super <br/> Quality</span> Shoes</p>
                <p className=' mt-2 font-semibold font-montserrat text-slate-gray py-4'>Ensuring premium comfort and style.Our meticulously crafted footwear is designed to elevate your experience,providing you with unmatched quality,innovation and a touch of elegance</p>
                <button className=' bg-red-500 text-white w-[150px] rounded-full font-montserrat font-semibold mt-2
                  flex items-center justify-center p-1 
                '>
                     View More
                </button>
            </div>
            <div className=' hover:rotate-6 duration-300'>
                <img src={shoe8}
                   className=' object-contain'
                />
            </div>
        </div>
    </div>
  )
}

export default Superqualitysection