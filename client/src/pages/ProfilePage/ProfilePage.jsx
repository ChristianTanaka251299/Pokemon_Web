import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { UserProfile, FavoritePokemon, DropImage } from "./components"
import { Modal } from "../../components"

const ProfilePage = () => {
  const userId = useSelector((state) => state.user.id);
  const [userInfo, setUserInfo] = useState([]);
  const [userFav, setUserFav] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [pokelist, setPokeList] = useState([]);

  const getUserInfo = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/user/get/${userId}`,
    );
    setUserInfo(result.data.result);
  };

  const getUserFav = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/favorite/get`,
        {
          params: { user_id: userId },
        },
      );
      const pokemonList = res.data.data;
      setUserFav(res.data.data);
      // getPokeInfo(pokemonList);
    } catch (error) {
      console.log("Error fetching user favorites:", error);
    }
  };

  
  // const getPokeInfo = async (list) => {
  //   try {
  //     list.map(async (list) => {
  //       const result = await axios.get(
  //         `https://pokeapi.co/api/v2/pokemon/${list.pokemon_name}`,
  //       );
  //       const finalResult = result.data;
  //       setPokeList((prev) => [...prev, finalResult]);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getUserInfo();
    getUserFav();
  }, []);
  return (
    <>
      <section className="container-screen lg:w-[78%]">
        <UserProfile userInfo={userInfo} setShowModal={setShowModal}/>
        <FavoritePokemon userFav={userFav} userId={userId}/>
      </section>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <DropImage/>
      </Modal>
    </>
  );
};

export default ProfilePage;
