import React, { useState, useEffect } from "react";
import "./index.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Carousel = ({ slides, slidesPC }) => {
  const [curent, setCurent] = useState(0);
  const prev = () =>
    setCurent((curent) => (curent === 0 ? slides.length - 1 : curent - 1));
  const next = () =>
    setCurent((curent) => (curent === slides.length - 1 ? 0 : curent + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3500);

    return () => clearInterval(interval);
  }, [next]);

  return (
    <>
      <div className=" container-screen  my-5 h-[250px] lg:h-auto">
        <div className="relative flex h-3/4 overflow-hidden rounded-lg ">
          <div
            className="flex transition-transform duration-500 ease-out sm:hidden"
            style={{ transform: `translateX(-${curent * 100}%)` }}
          >
            {slides.map((img, index) => (
              <img key={index} src={img} className="w-full" />
            ))}
          </div>

          <div
            className="hidden transition-transform duration-500 ease-out sm:flex"
            style={{ transform: `translateX(-${curent * 100}%)` }}
          >
            {slidesPC.map((img, index) => (
              <img key={index} src={img} className="w-full" />
            ))}
          </div>

          <div className="absolute inset-0 mx-2 flex items-center justify-between">
            <button
              onClick={prev}
              className="chevron-button h-6 w-6 rounded-full p-1 lg:h-10 lg:w-10"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={next}
              className="chevron-button h-6 w-6 rounded-full p-1  lg:h-10 lg:w-10"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        {/* Circle pagination */}
        <div className="flex items-center justify-center sm:justify-start">
          {slides.map((_, i) => (
            <div
            key={i}
              className={`mx-1  mt-3 rounded-full transition-all  ${
                curent === i
                  ? "h-3 w-3 bg-primaryYellow"
                  : "h-2 w-2 bg-primaryYellow/20"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
