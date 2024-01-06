import React from 'react'
import { offer } from '../assets/images'
import {RxArrowRight} from "react-icons/rx"

const SpecialOffers = () => {
  return (
    <div className=' max-w-[1440px] mx-8 md:mx-16 py-4'>
         <div className=' w-full grid md:grid-cols-2 mx-auto'>
              <div className=' hover:scale-95 duration-300'>
                <img
                  src={offer}  
              
                  className=' object-cover w-full'
                />
              </div>
              <div className=' flex flex-col justify-center my-auto'>
              <p className=' font-bold font-palanquin text-4xl py-4'><span className=' text-coral-red'>Special</span> Offers</p>
              <p className='mt-4 info-text'>
                  Embark on a shopping journey that redefines your experience with
                  unbeatable deals. From premier selections to incredible savings, we
                  offer unparalleled value that sets us apart.
              </p>
              <p className='mt-6 info-text'>
                  Navigate a realm of possibilities designed to fulfill your unique
                  desires, surpassing the loftiest expectations. Your journey with us is
                   nothing short of exceptional.
               </p>
                <div className=' flex justify-start gap-4'>
                  <button className=' bg-red-500 text-white w-[150px] rounded-full font-montserrat font-semibold mt-4
                  flex items-center justify-center py-2
                  '>
                    Shop Now
                    <RxArrowRight
                      className='rounded-full bg-white text-gray-500 mx-1'
                    />
                 </button>
                 <button className=' text-slate-gray w-[120px] rounded-full font-montserrat border-slate-gray border py-2 mt-4'>
                    Learn More
                 </button>
                </div>
              </div>
         </div>
    </div>
  )
}

export default SpecialOffers