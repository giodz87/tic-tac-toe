import React from "react";
import { useState } from "react";
import Otransparent from "../assets/icon-o-outline.svg";
import Ocolor from "../assets/icon-o.svg";
import restart from "../assets/icon-restart.svg";
import Xoutline from "../assets/icon-x-outline.svg";
import Xlight from "../assets/icon-x.svg";
import logo from "../assets/logo.svg";
export default function SoloGame() {
  const button = ["", "", "", "", "", "", "", "", ""];
  const [xMode, setXmode] = useState();
  const [count, setCount] = useState(Array(9).fill(""));
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const countNumbers = (num) => {
    if (count[num] !== "") {
      return;
    }

    let countCircle = { ...count };
    if (xMode === "odd") {
      countCircle[num] = "odd";
      setXmode("even");
    } else {
      countCircle[num] = "even";
      setXmode("odd");
    }
    setCount(countCircle);

    console.log(countCircle);
    ticTocWinner(countCircle);
  };

  const ticTocWinner = (countCircle) => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    let X = [];
    let Y = [];
    for (let key in countCircle) {
      if (countCircle[key] == "even") {
        X.push(Number(key));
      } else if (countCircle[key] == "odd") {
        Y.push(Number(key));
      }
    }
    X.sort((a, b) => a - b);
    Y.sort((a, b) => a - b);
    console.log(winnerPlayer(X), winnerPlayer(Y));
  };

  function winnerPlayer(player) {
    let winner = player.some((item) => {
      for (let i = 0; i < item.length; i++) {
        if (item[i] != X[i]) {
          return false;
        }
      }
      return true;
    });

    return winner;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-[64px] w-[370px]">
      <p className=" text-[red]">TURN {xMode}</p>
      <header className="flex flex-row items-center justify-center gap-[60px]">
        <img src={logo} alt="" />
        {xMode === "odd" ? (
          <button className="w-[96px] h-[40px] rounded-[5px] bg-[#1f3641] flex flex-row items-center justify-center gap-[9px] font-[Outfit] text-[14px] font-semibold text-[#A8BFC9] me-[14px] cursor-pointer shadow-smallGreen ">
            <img src={Otransparent} alt="" className=" w-[16px] h-[16px]" />
            TURN
          </button>
        ) : (
          <button className="w-[96px] h-[40px] rounded-[5px] bg-[#1f3641] flex flex-row items-center justify-center gap-[9px] font-[Outfit] text-[14px] font-semibold text-[#A8BFC9] me-[14px] cursor-pointer shadow-smallGreen">
            <img src={Xoutline} alt="" className=" w-[16px] h-[16px]" />
            TURN
          </button>
        )}
        <button
          onClick={() => {
            setCount(Array(9).fill(""));
            setXmode("even");
          }}
          className="w-[40px] h-[40px] bg-[#A8BFC9] rounded-[5px] flex items-center justify-center cursor-pointer"
        >
          <img src={restart} alt="" />
        </button>
      </header>
      <div className="flex flex-row  flex-wrap gap-[25px] items-center justify-center  ">
        {button.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                countNumbers(index);
              }}
              className="w-[96px] h-[96px] bg-[#1F3641] gap-[20px] flex flex-row items-center justify-center rounded-[15px] cursor-pointer shadow-bigGreen"
            >
              {count[index] === "odd" ? (
                <img src={Ocolor} alt="" />
              ) : count[index] === "even" ? (
                <img src={Xlight} alt="" />
              ) : null}
            </button>
          );
        })}
        <button className="w-[96px] h-[64px] bg-[#31C3BD] gap-[20px] flex flex-row items-center justify-center rounded-[10px]">
          <p>X (YOU)</p>
        </button>
        <button className="w-[96px] h-[64px] bg-[#A8BFC9] gap-[20px] flex flex-row items-center justify-center rounded-[10px]">
          <p>TIES</p>
        </button>
        <button className="w-[96px] h-[64px] bg-[#F2B137] gap-[20px] flex flex-row items-center justify-center rounded-[10px]">
          <p>O (CPU)</p>
        </button>
      </div>
    </div>
  );
}
