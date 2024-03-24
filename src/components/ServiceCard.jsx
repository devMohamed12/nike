import React from "react";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="bg-[#1faedd9d] w-full rounded-2xl px-7 py-14 cursor-default hover:-translate-y-5 hover:scale-105 duration-500 max-md:mb-6">
      
      <div className="flex max-md:flex-col gap-2 items-center mb-5 ">
        <div className="w-14 h-14 rounded-full bg-primary p-2">
          <img src={imgURL} alt={label} className="w-full" />
        </div>
        <h3 className="font-palanquin text-3xl font-bold ">{label}</h3>
      </div>

      <p className="break-words font-montserrat text-lg leading-normal text-white-400">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
