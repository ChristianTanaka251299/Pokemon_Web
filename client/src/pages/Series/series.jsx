import React, { useState } from "react";
import Background from "../../assets/background.jpg";
import XSelected from "../../assets/x_selected.png";
import XUnselected from "../../assets/x.png";
import OmegaSelected from "../../assets/omega_selected.png";
import OmegaUnselected from "../../assets/omega_unselected.png";
import ShieldSelected from "../../assets/shield_selected.png";
import ShieldUnselected from "../../assets/shield_unselected.png";
import Wallpaper from "../../assets/series_wallpaper.jpg";

import Groudon from "../../assets/mega_groudon.png";

const Series = () => {
  const sectionStyle = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
  };
  const [selected, setSelected] = useState(1);
  return (
    <section>
      <section style={sectionStyle} className="  flex flex-col">
        {/* ICON SECTION */}
        <div className="container-screen flex justify-around">
          <button onClick={() => setSelected(1)}>
            {selected === 1 ? (
              <img src={OmegaSelected} className="w-10" />
            ) : (
              <img src={OmegaUnselected} className="w-10" />
            )}
          </button>
          <button onClick={() => setSelected(2)}>
            {selected === 2 ? (
              <img src={XSelected} className="w-10" />
            ) : (
              <img src={XUnselected} className="w-10" />
            )}
          </button>
          <button onClick={() => setSelected(3)}>
            {selected === 3 ? (
              <img src={ShieldSelected} className="w-10" />
            ) : (
              <img src={ShieldUnselected} className="w-10" />
            )}
          </button>
        </div>
        {/* TEXT SECTION */}
        <div className="mt-3 flex flex-col items-start justify-center">
          <div className="flex items-center justify-center">
            <img src={Wallpaper} className="relative w-auto" />
            <img src={Groudon} className="absolute mx-auto w-10/12" />
          </div>
          {/* <h1 className="border-l-4 border-primaryBlue pl-3 font-helvetica text-3xl text-primaryBlue">
            Mega Groudon
          </h1>
          <p className="my-4 text-primaryYellow">
            Groudon is said to be the personification of the land itself.
            Legends tell of its many clashes against Kyogre, as each sought to
            gain the power of nature.
          </p> */}
        </div>
      </section>
    </section>
  );
};

export default Series;
