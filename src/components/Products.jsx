import React from 'react'
import {shoe4,shoe5,shoe6,shoe7} from "../assets/images"
import star from "../assets/icons/star.svg"
const Products = () => {

  const products = [
    {
        id:1,
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        id:2,
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        id:3,     
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        id:4,
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];
  return (
    <div name="Products" className="max-w-[1440px] mt-4  mx-8 md:mx-16 mb-4">
        <div className=' flex flex-col justify-start mx-auto'>
           <p className=' font-palanquin text-3xl font-bold'>Our<span className='text-coral-red'> Popular</span> Products</p>
           <p className=' mt-2 text-slate-gray font-semibold max-w-[500px]'>Experience top-notch quality and style with our sought-after selections.Discover a world of comfort,design and value</p>
        </div>
        <div className=' w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto mt-4 gap-4'>
           {products.map((item)=>(
            <div key={item.id} className=' mx-auto hover:scale-105 duration-200'>
              <img 
                src={item.imgURL}
              />
              <div className=' flex gap-x-2 items-center'>
              <img 
                src={star}
                className=' mt-2'
              />
              <p className=' mt-2 text-slate-gray'>(4.5)</p>
             </div>
             <p className=' font-bold font-montserrat mt-2'>{item.name}</p>
             <p className=' font-semibold text-coral-red font-montserrat'>{item.price}</p>
            </div>
           ))}
        </div>

    </div>
  )
}

export default Products