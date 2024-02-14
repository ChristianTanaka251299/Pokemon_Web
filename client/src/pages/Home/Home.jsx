import React, { useEffect } from "react";
import { Carousel, TopPicks, Series } from "./component";
import {
  Banner1,
  Banner2,
  Banner3,
  Banner1PC,
  Banner2PC,
  Banner3PC,
} from "../../assets/banner";
import { useDispatch } from "react-redux";
import { resetParam } from "../../reducers/paramSlice";

const slides = [Banner1, Banner2, Banner3];
const slidesPC = [Banner1PC, Banner2PC, Banner3PC];

const Home = () => {
  const dispatch = useDispatch();

  const resetParams = () => {
    dispatch(resetParam());
  };

  useEffect(() => {
    resetParams();
  }, []);
  return (
    <>
      <section className=" bg-primaryBlue">
        <Carousel slides={slides} slidesPC={slidesPC} />
        <Series />
        <TopPicks />
      </section>
    </>
  );
};

export default Home;
