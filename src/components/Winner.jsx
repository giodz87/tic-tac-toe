import React from "react";
import Ocolor from "../assets/icon-o.svg";
import Xlight from "../assets/icon-x.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Winner({
  count,
  setCount,
  x,
  setX,
  y,
  setY,
  setXmode,
  tide,
  setTide,
  setCountTide,
  reset,
  setReset,
}) {
  return (
    <div className=" bg-opacity-50 bg-[#000] w-screen h-screen flex flex-col  items-center text-center  justify-center gap-[24px]  absolute  ">
      <div className="w-[100%] h-[228px] bg-[#1F3641] flex flex-col text-center justify-center gap-[24px] md:h-[266px] md:gap-[23px]">
        {reset ? (
          <p className="text-[Outfit] text-[24px] font-semibold  text-[#A8BFC9] tracking-[1.5px] md:text-[40px]">
            RESTART GAME?
          </p>
        ) : (
          <>
            {tide ? (
              <p className="text-[Outfit] text-[24px] font-semibold  text-[#A8BFC9] tracking-[1.5px] md:text-[40px]">
                ROUND TIED
              </p>
            ) : (
              <>
                {y ? (
                  <p className="text-[#A8BFC9] text-[14px] font-[Outfit] font-semibold md:text-[16px] ">
                    PLAYER 2 WINS!
                  </p>
                ) : (
                  <p className="text-[#A8BFC9] text-[14px] font-[Outfit] font-semibold md:text-[16px] ">
                    PLAYER 1 WINS!
                  </p>
                )}
                <div className=" flex flex-row text-center  justify-center  gap-[8px] md:gap-[24px]">
                  {y ? (
                    <img
                      className="w-[30px] h-[30px] md:w-[64px] md:h-[64px] "
                      src={Ocolor}
                      alt=""
                    />
                  ) : x ? (
                    <img
                      className="w-[30px] h-[30px] md:w-[64px] md:h-[64px] "
                      src={Xlight}
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  <p
                    className={`  text-[Outfit] text-[24px] font-semibold   ${
                      x ? "text-[#31C3BD]" : y ? "text-[#F2B137]" : ""
                    }
          } tracking-[1.5px]  md:text-[40px]`}
                  >
                    TAKES THE ROUND
                  </p>
                </div>
              </>
            )}
          </>
        )}
        <div className="flex flex-row text-center justify-center gap-[16px] md:pt-[8px] ">
          {reset ? (
            <button
              onClick={() => {
                setReset(false);
              }}
              className="w-[139px] h-[52px] rounded-[10px] bg-[#A8BFC9] hover:bg-[#DBE8ED] shadow-smallGray font-[Outfit] text-[#1A2A33] text-[16px] font-semibold tracking-[1px] cursor-pointer"
            >
              NO, CANCEL
            </button>
          ) : (
            <Link to={"/"}>
              <button className="w-[76px] h-[52px] rounded-[10px] bg-[#A8BFC9] hover:bg-[#DBE8ED] shadow-smallGray font-[Outfit] text-[#1A2A33] text-[16px] font-semibold tracking-[1px] cursor-pointer">
                QUIT
              </button>
            </Link>
          )}

          {reset ? (
            <button
              onClick={() => {
                setCount(Array(9).fill(""));
                setXmode("even");
                setX(false);
                setY(false);
                setTide(false);
                setReset(false);
                setCountTide(8);
              }}
              className="w-[146px] h-[52px] rounded-[10px] bg-[#F2B137] hover:bg-[#FFC860] shadow-yellow font-[Outfit] text-[#1A2A33] text-[16px] font-semibold tracking-[1px] cursor-pointer"
            >
              YES, RESTART
            </button>
          ) : (
            <button
              onClick={() => {
                setCount(Array(9).fill(""));
                setX(false);
                setY(false);
                setXmode(false);
                setTide(false);
                setCountTide(8);
              }}
              className="w-[146px] h-[52px] rounded-[10px] bg-[#F2B137] hover:bg-[#FFC860] shadow-yellow font-[Outfit] text-[#1A2A33] text-[16px] font-semibold tracking-[1px] cursor-pointer"
            >
              NEXT ROUND
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
