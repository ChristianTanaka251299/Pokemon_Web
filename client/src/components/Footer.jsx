import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import LinkedInIcon from "../assets/linkedin.png";
const Footer = () => {
  return (
    <>
      <section className=" mt-auto bg-black py-3">
        <section className="container-screen flex items-center  py-3 text-white lg:flex-col lg:items-start">
          <div className="px-3 lg:mb-3 lg:px-0 ">
            <h1 className="font-helvetica text-xs lg:text-lg">Created By</h1>
          </div>
          <div className="ml-auto lg:ml-0">
            <h2 className="mb-2 text-xs underline underline-offset-2">
              Christian Tanaka
            </h2>
            <div className="mb-1 flex  items-center">
              <EnvelopeIcon className="h-4 " />
              <p className="ml-3 text-xs">christian.tanaka2512@gmail.com</p>
            </div>
            <div className="flex items-center">
              <img src={LinkedInIcon} className="h-4" />
              <a
                href="https://www.linkedin.com/in/christian-tanaka-693aa5284/"
                className="ml-3 text-xs transition duration-200 hover:text-slate-600"
              >
                Christian Tanaka
              </a>
            </div>
          </div>
        </section>
        <section className="container-screen flex justify-end">
          <p className="text-[8px] text-white/15 lg:text-xs">
            This website doesn’t related to Pokemon official
          </p>
        </section>
      </section>
    </>
  );
};

export default Footer;
