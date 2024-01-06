import React from 'react'
import { truckFast,shieldTick,support } from '../assets/icons';
const Services = () => {
    const services = [
        {
            imgURL: truckFast,
            label: "Free shipping",
            subtext: "Enjoy seamless shopping with our complimentary shipping service."
        },
        {
            imgURL: shieldTick,
            label: "Secure Payment",
            subtext: "Experience worry-free transactions with our secure payment options."
        },
        {
            imgURL: support,
            label: "Love to help you",
            subtext: "Our dedicated team is here to assist you every step of the way."
        },
    ];
  return (
    <div className=' max-w-[1440px] mx-8 md:mx-16 py-4'>
        <div className=' w-full grid  md:grid-cols-2 lg:grid-cols-3  gap-4'>
              {services.map((service)=>(
                <div key={service.label} className=' w-full  shadow-md bg-white p-4 rounded-xl  border-2
                  flex flex-col justify-center items-center gap-4 mx-auto
                '>
                    <img 
                      src={service.imgURL}
                      className='bg-coral-red w-11 h-11 rounded-full p-1'

                    />
                    <p className='text-slate-gray font-palanquin font-bold text-xl py-2'>{service.label}</p>
                    <p  className='text-slate-gray font-palanquin font-bold text-xl pb-2 text-center'>{service.subtext}</p>
                </div>
              ))}
        </div>
    </div>
  )
}

export default Services