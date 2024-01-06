import React from 'react'
import { customer1,customer2 } from '../assets/images';
import { star } from '../assets/icons';
const ReviewCard = () => {

    const reviews = [
        {
            imgURL: customer1,
            customerName: 'Morich Brown',
            rating: 4.5,
            feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
        },
        {
            imgURL: customer2,
            customerName: 'Lota Mongeskar',
            rating: 4.5,
            feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
        }
    ];
  return (
    <div className=' max-w-[1440px] mx-8 md:mx-16 py-4'>
        <p className=' text-3xl text-center font-bold md:text-4xl'>
            What Our <span className=' text-coral-red'>Customer </span>
            Says
        </p>
        <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className=' w-full grid lg:grid-cols-2 mx-auto gap-4'>
          {reviews.map((review)=>(
            <div key={review.feedback} className=' w-full shadow-3xl flex flex-col items-center py-2 mt-4 mx-auto border-2 rounded-xl'>
                <img 
                   src={review.imgURL}
                   className=' rounded-full w-[120px] h-[120px] mb-2'
                />
                <p className=' font-bold text-slate-gray'>{review.customerName}</p>
                <div className=' font-bold text-slate-gray flex gap-2'>
                    <img 
                      src={star}
                    />
                    <p>({review.rating})</p>
                </div>
                <p className=' font-bold text-slate-gray text-center mb-4'>{review.feedback}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ReviewCard