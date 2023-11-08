import React from "react";

export default function Restart() {
  return (
    <div className="w-[375px] h-[228px] flex flex-col text-center justify-center gap-[16px] bg-[#1F3641]">
      <p className="text-[Outfit] text-[24px] font-semibold text-[#A8BFC9] space-[1.5px]">
        RESTART GAME?
      </p>
      <div className="flex flex-row text-center justify-center gap-[16px] pt-[8px] ">
        <button className="w-[139px] h-[52px] rounded-[10px] bg-[#A8BFC9] shadow-smallGray font-[Outfit] text-[#1A2A33] text-[16px] font-semibold space-[1px] cursor-pointer">
          NO, CANCEL
        </button>
        <button className="w-[139px] h-[52px] rounded-[10px] bg-[#F2B137] shadow-yellow font-[Outfit] text-[#1A2A33] text-[16px] font-semibold space-[1px] cursor-pointer">
          YES, RESTART
        </button>
      </div>
    </div>
  );
}
