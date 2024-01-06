import React, { useState } from 'react'
import { bigShoe1, bigShoe2, bigShoe3, thumbnailBackground } from '../assets/images'
import { thumbnailShoe1,thumbnailShoe2,thumbnailShoe3, } from '../assets/images'

import { RxArrowRight } from 'react-icons/rx'
import ShoeCard from './ShoeCard'
const Hero = () => {
  const[bigShoeImg,setBigShoeImg]=useState(bigShoe1);
    const statistics = [
        {id:1, value: '1k+', label: 'Brands' },
        {id:2,value: '500+', label: 'Shops' },
        {id:3, value: '250k+', label: 'Customers' },
    ];
    const shoes = [
      {
          thumbnail: thumbnailShoe1,
          bigShoe: bigShoe1,
      },
      {
          thumbnail: thumbnailShoe2,
          bigShoe: bigShoe2,
      },
      {
          thumbnail: thumbnailShoe3,
          bigShoe: bigShoe3,
      },
  ];
    
  return (
    <div name="Home" className=' max-w-[1440px] py-4 mx-8 md:mx-16 '>
        <div className=' w-full grid md:grid-cols-2 mx-auto gap-2'>
            <div className=' flex flex-col justify-center bg-white '>
                <p className=' font-bold text-lg text-orange-400 mb-2'>Our Summer Collection</p>
                <p className=' font-bold  text-[48px] md:text-8xl'>
                    <span className= 'bg-none whitespace-normal xl:bg-white relative z-10 xl:whitespace-nowrap  rounded-md'>The New Arrival</span>
                    <br/>
                    <span className=' text-orange-400'>Nike</span><span> Shoes</span>
                </p>
                <div className=' pt-4 font-semibold text-gray-500'>
                <p>Discover Stylish Nike Arrivals,Quality</p>
                <p>Comfort And Innovation For Your Active Life</p>
                </div>
                <button className=' bg-red-500 text-white w-[150px] rounded-full font-montserrat font-semibold mt-2
                  flex items-center justify-center p-1 
                '>
                    Shop Now
                    <RxArrowRight
                      className='rounded-full bg-white text-gray-500 mx-1'
                    />
                </button>
                <div className=' flex gap-4 mt-4 font-palanquin font-bold bg-slate-100 w-[220px] p-1'>
                     {statistics.map((item)=>(
                        <div key={item.id}>
                            <p>{item.value}</p>
                            <p>{item.label}</p>
                        </div>
                     ))}
                </div>
            </div>
          
            <div className='rounded-lg mt-4 relative z-[5] '>
                <div className=' rounded-lg bg-center bg-cover z-[-5]' style={{backgroundImage:`URL(${thumbnailBackground})`}}>
                <img 
                    src={bigShoeImg}
                    className=' object-contain w-[300px] md:w-[500px] h-[300px] md:h-screen '
                 />
                </div>
                <div className='flex justify-center items-center  mx-auto z-10 '>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
             
            </div>
         
             
                
             
        </div>
    </div>
  )
}

export default Hero