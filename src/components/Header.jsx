import React from "react";

import { brainwave } from "../assets/";

const Header = () => {
  return (
    <div className="fixed top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-b-8/90 lg:backdrop-blur-sm">
      <div className="flex intems-center px-5 lg:px-7.5 xl:px-10 max-lg:pu-4"></div>
      <a className="block w-48 xl:mr-8" href="#hero">
        <img src={brainwave} width={190} height={40} alt="Brainwave" />
      </a>
    </div>
  );
};

export default Header;
