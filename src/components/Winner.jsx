import React from "react";
import Ocolor from "../assets/icon-o.svg";
import Xlight from "../assets/icon-x.svg";
import { useState } from "react";
export default function Winner() {
  const [win, setWin] = useState();
  const [round, seRound] = useState();

  return (
    <div className="w-[375px] h-[228px] flex flex-col text-center justify-center gap-[24px] bg-[#1F3641]">
      {win ? (
        <p className="text-[#A8BFC9] text-[14px] font-[Outfit] font-semibold ">
          OH NO, YOU LOST…
        </p>
      ) : (
        <p className="text-[#A8BFC9] text-[14px] font-[Outfit] font-semibold ">
          YOU WON!
        </p>
      )}
      <div className=" flex flex-row text-center  justify-center  gap-[8px] ">
        {round ? (
          <img className="w-[30px] h-[30px] " src={Ocolor} alt="" />
        ) : (
          <img className="w-[30px] h-[30px] " src={Xlight} alt="" />
        )}
        <p
          className={`  text-[Outfit] text-[24px] font-semibold  text-${
            round ? "#F2B137" : "#31C3BD"
          } space-[1.5px] `}
        >
          TAKES THE ROUND
        </p>
      </div>
      <div className="flex flex-row text-center justify-center gap-[16px]  ">
        <button className="w-[76px] h-[52px] rounded-[10px] bg-[#A8BFC9] shadow-smallGray font-[Outfit] text-[#1A2A33] text-[16px] font-semibold space-[1px] cursor-pointer">
          QUIT
        </button>
        <button className="w-[146px] h-[52px] rounded-[10px] bg-[#F2B137] shadow-yellow font-[Outfit] text-[#1A2A33] text-[16px] font-semibold space-[1px] cursor-pointer">
          NEXT ROUND
        </button>
      </div>
    </div>
  );
}
