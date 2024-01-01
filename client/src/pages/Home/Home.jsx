import React from "react";
import { Carousel, TopPicks, Series } from "./component";
import { Banner1, Banner2, Banner3, Banner1PC, Banner2PC, Banner3PC } from "../../assets/banner";

const slides = [Banner1, Banner2, Banner3];
const slidesPC = [Banner1PC, Banner2PC, Banner3PC]

const Home = () => {
  return (
    <>
      <section className="h-screen bg-primaryBlue">
        <Carousel slides={slides} slidesPC = {slidesPC}/>
        <Series/>
      </section>
    </>
  );
};

export default Home;
