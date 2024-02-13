import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { PCFilter, MobileFilter } from "./components";
import { HeartIcon } from "@heroicons/react/24/solid";
import Background from "../../assets/background.jpg";
import Loading from "../../components/LoadingFetchData";
import { capitalizeFirstLetter } from "../../helper/string";
import { useSelector } from "react-redux";

const Pokemon = () => {
  const sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const item = searchParams.get("item");
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?limit=8&offset=0`,
  );
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const fetchList = async (link) => {
    try {
      setLoading(true);
      const res = await axios.get(link);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokemon(res.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemon = async (res) => {
    setPokeData([]);
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    fetchList(url);
  }, [url]);

  return (
    <section style={sectionStyle}>
      {loading && (
        <div className="mt-10 flex items-center justify-center">
          <Loading color="#4A84FF" />
        </div>
      )}
      <PCFilter
        setSearchParams={setSearchParams}
        fetchList={fetchList}
        setUrl={setUrl}
      />
      <MobileFilter
        setSearchParams={setSearchParams}
        fetchList={fetchList}
        setUrl={setUrl}
      />
      <div className="container-screen my-3 grid grid-cols-2 gap-4 md:grid-cols-4">
        {pokeData.length > 0 &&
          pokeData.map((value) => (
            <>
              <div className="flex h-40 flex-col rounded-md bg-primaryBlue p-3 md:h-64">
                <button className=" items-end">
                  <HeartIcon className="ml-auto w-5 text-white hover:text-primaryYellow lg:w-7" />
                </button>
                <img
                  src={value?.sprites.other["official-artwork"].front_default}
                  className="mx-auto h-24 w-24 lg:h-40 lg:w-40"
                />
                <p className="mt-2 text-center font-helvetica text-xs text-white lg:mt-3 lg:text-base">
                  {capitalizeFirstLetter(value?.name)}
                </p>
              </div>
            </>
          ))}
      </div>
      <div className="container-screen text flex justify-center font-helvetica lg:justify-end ">
        {prevUrl && (
          <button
            className="mr-5"
            onClick={() => {
              setPokeData([]);
              setUrl(prevUrl);
            }}
          >
            {"Prev"}
          </button>
        )}
        {nextUrl && (
          <button
            onClick={() => {
              setPokeData([]);
              setUrl(nextUrl);
            }}
          >
            {"Next"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Pokemon;
