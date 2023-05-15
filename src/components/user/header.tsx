import React from "react";

const HeaderComponent = () => {
  return (
    <div className="bg-[#075985] h-[59px] w-full relative">
      <img
        src="assets/images/header-mask.svg"
        className="absolute top-0 w-full"
      ></img>
      <div className="flex flex-row">
        <img
          src="assets/images/QadahLogo.png"
          className="h-[24px] my-[17.5px] mr-[16px]"
        ></img>
        <div className="h-[29px] border-[0.5px] my-[15px] mx-[24px] bg-[#FEFEFE] rounded"></div>
        <div className="flex flex-col justify-center text-white font-cairo text-[12px]">
          <p> Weekly Schedual </p>
          <p> 18 / 3 / 2023 - 12 / 3 / 2023 </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
