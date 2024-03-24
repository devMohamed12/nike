
const ShoeCard = ({ img, changeMainImg, mainImg }) => {

    const handleClick = () => {
        if (mainImg !== img.bigShoe) {
            changeMainImg(img.bigShoe);
            
        }
        console.log(img);
        console.log(mainImg);
    }
  return (
      <div className={`border-2 rounded-xl ${mainImg === img.bigShoe ? "border-x-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
      
      onClick={handleClick}
      >
          
          <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
              <img src={img.thumbnail} alt="shoe collection" width={127} height={103} className="object-contain" />
          </div>
      </div>
  );
};

export default ShoeCard