import React from "react";
import { useState } from "react";
import Otransparent from "../assets/icon-o-outline.svg";
import Ocolor from "../assets/icon-o.svg";
import restart from "../assets/icon-restart.svg";
import Xoutline from "../assets/icon-x-outline.svg";
import Xlight from "../assets/icon-x.svg";
import logo from "../assets/logo.svg";
export default function Home() {
  const [ticToc, setTicToc] = useState("Xoutline");

  return (
    <div className="flex flex-col items-center gap-[32px]">
      <img src={logo} alt="" />
      <div className="flex flex-col items-center justify-evenly bg-[#1F3641] w-[327px] h-[205px] rounded-[15px] shadow-[0px -8px 0px 0px #10212A] inset">
        <p className="font-[Outfit] text-[16px] font-semibold text-[#A8BFC9] ">
          PICK PLAYER 1’S MARK
        </p>
        <div className="flex flex-row items-center  justify-center  w-[279px] h-[72px] rounded-[10px] bg-[#1A2A33]">
          <div
            onClick={() => setTicToc("Xoutline")}
            className={
              ticToc == "Xoutline"
                ? `flex items-center justify-center rounded-[10px]  w-[132px] h-[54px] bg-[#A8BFC9]  cursor-pointer`
                : ` flex items-center justify-center  w-[132px] h-[54px] `
            }
          >
            <img src={Xoutline} alt="" className="w-[31px] h-[31px] " />
          </div>
          <div
            onClick={() => setTicToc("Otransparent")}
            className={
              ticToc == "Otransparent"
                ? `flex items-center justify-center rounded-[10px]    w-[132px] h-[54px] bg-[#A8BFC9]  cursor-pointer`
                : `flex items-center justify-center  w-[132px] h-[54px]`
            }
          >
            <img src={Otransparent} alt="" className="w-[31px] h-[31px] " />
          </div>
        </div>
        <p className="font-[Outfit] text-[16px] font-medium text-[#A8BFC9] opacity-[0.5]">
          REMEMBER : X GOES FIRST
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <button className="font-[Outfit] text-[16px] font-semibold  w-[327px] h-[56px] bg-[#F2B137] rounded-[15px] cursor-pointer  shadow-yellow">
          NEW GAME (VS CPU)
        </button>
        <button className="font-[Outfit] text-[16px] font-semibold w-[327px] h-[56px] bg-[#31C3BD] rounded-[15px] cursor-pointer shadow-skyblue  ">
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  );
}
