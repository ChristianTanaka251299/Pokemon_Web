import React from "react";
import { BounceLoader } from "react-spinners";

const LoadingFetchData = () => {
  return (
    <div className='
    fixed inset-0 bg-white bg-opacity-25 backdrop-blur-sm 
    flex justify-center items-center z-50' 
    >
      <div className='w-[600px] flex flex-col items-center'>      
          <BounceLoader color="#4A84FF"/>
      </div> 
    </div>
  );
};

export default LoadingFetchData;