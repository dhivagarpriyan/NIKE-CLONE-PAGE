const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imgURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover md:w-28 md:h-28 rounded-xl max-sm:p-4'>
          <img
            src={imgURL.thumbnail}
            alt='shoe colletion'
            
            className='object-contain w-[100px]'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;