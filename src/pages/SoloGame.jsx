import React from "react";
import { useState, useEffect } from "react";
import Otransparent from "../assets/icon-o-outline.svg";
import Ocolor from "../assets/icon-o.svg";
import restart from "../assets/icon-restart.svg";
import Xoutline from "../assets/icon-x-outline.svg";
import Xlight from "../assets/icon-x.svg";
import logo from "../assets/logo.svg";
import Winner from "../components/Winner";

export default function SoloGame() {
  const button = ["", "", "", "", "", "", "", "", ""];
  const [xMode, setXmode] = useState("");
  const [count, setCount] = useState(Array(9).fill(""));
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  const [xWInner, setXwinner] = useState(0);

  const [yWinner, setYwinner] = useState(0);
  const [countWinner, setCountWinner] = useState(0);

  const [countTide, setCountTide] = useState(8);

  const [tide, setTide] = useState(false);

  const [reset, setReset] = useState(false);

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

    ticTocWinner(countCircle);
  };

  const ticTocWinner = (countCircle) => {
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

    if (winnerPlayer(X) === true) {
      setX(true);
      setCountWinner(countWinner + 1);
      setXwinner(xWInner + 1);
    } else if (winnerPlayer(Y) === true) {
      setY(true);
      setCountWinner(countWinner + 1);
      setYwinner(yWinner + 1);
    }
    if (countTide == 0 && winnerPlayer(X) != true && winnerPlayer(Y) != true) {
      setTide(true);
      setCountWinner(countWinner + 1);
      console.log(tide);
    }
    console.log(count, countTide);
  };
  function winnerPlayer(player) {
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

    for (const arr of winner) {
      if (arr.every((element) => player.includes(element))) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-[64px] w-[330px] relative md:gap-[20px]">
      {x || y || tide || reset ? (
        <Winner
          count={count}
          setCount={setCount}
          x={x}
          setX={setX}
          y={y}
          setY={setY}
          setXmode={setXmode}
          tide={tide}
          setTide={setTide}
          setCountTide={setCountTide}
          reset={reset}
          setReset={setReset}
          className="absolute top-0"
        />
      ) : null}
      <header className="flex flex-row items-center  justify-between w-[328px] md:w-[460px] ">
        <img src={logo} alt="" />
        {xMode === "odd" ? (
          <button className="w-[96px] h-[40px] rounded-[5px] bg-[#1f3641] flex flex-row items-center justify-center gap-[9px] font-[Outfit] text-[14px] font-semibold text-[#A8BFC9] me-[14px] cursor-pointer shadow-smallGreen md:w-[140px] md:h-[52px] md:mr-[25px] md:rounded-[10px] md:text-[16px]">
            <img
              src={Otransparent}
              alt=""
              className=" w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
            />
            TURN
          </button>
        ) : (
          <button className="w-[96px] h-[40px] rounded-[5px] bg-[#1f3641] flex flex-row items-center justify-center gap-[9px] font-[Outfit] text-[14px] font-semibold text-[#A8BFC9] me-[14px] cursor-pointer shadow-smallGreen md:w-[140px] md:h-[52px] md:mr-[25px] md:rounded-[10px] md:text-[16px]">
            <img
              src={Xoutline}
              alt=""
              className=" w-[16px] h-[16px] md:w-[20px] md:h-[20px]"
            />
            TURN
          </button>
        )}
        <button
          onClick={() => {
            setReset(true);
          }}
          className="w-[40px] h-[40px] bg-[#A8BFC9] hover:bg-[#DBE8ED] rounded-[5px] flex items-center justify-center cursor-pointer  md:w-[52px] md:h-[52px] "
        >
          <img src={restart} alt="" />
        </button>
      </header>
      <div className="grid grid-cols-3 gap-4 w-[328px] md:w-[460px] ">
        {button.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                countNumbers(index);
                setCountTide(countTide - 1);
              }}
              className={`w-[96px] h-[96px] bg-[#1F3641] gap-[20px] flex flex-row items-center justify-center rounded-[15px] cursor-pointer shadow-bigGreen md:w-[140px] md:h-[140px]`}
            >
              {count[index] === "odd" ? (
                <>
                  <img src={Ocolor} alt="" />
                </>
              ) : count[index] === "even" ? (
                <img src={Xlight} alt="" />
              ) : null}
            </button>
          );
        })}

        <button className="w-[96px] h-[64px] bg-[#31C3BD] gap-[20px] flex flex-row items-center justify-center rounded-[10px] md:w-[140px] md:h-[72px] md:rounded-[15px]">
          <p className="flex flex-col items-center leading-tight">
            X (P1){" "}
            <strong className="text-[20px] font-[Outfit] tracking-[1.25px] text-[#1A2A33]">
              {xWInner}
            </strong>{" "}
          </p>
        </button>
        <button className="w-[96px] h-[64px] bg-[#A8BFC9] gap-[20px] flex flex-row items-center justify-center rounded-[10px] md:w-[140px] md:h-[72px] md:rounded-[15px]">
          <p className="flex flex-col items-center leading-tight">
            TIES{" "}
            <strong className="text-[20px] font-[Outfit] tracking-[1.25px] text-[#1A2A33]">
              {countWinner}
            </strong>{" "}
          </p>
        </button>
        <button className="w-[96px] h-[64px] bg-[#F2B137] gap-[20px] flex flex-row items-center justify-center rounded-[10px] md:w-[140px] md:h-[72px] md:rounded-[15px] ">
          <p className="flex flex-col items-center leading-tight">
            O (P2){" "}
            <strong className="text-[20px] font-[Outfit] tracking-[1.25px] text-[#1A2A33] ">
              {yWinner}
            </strong>{" "}
          </p>
        </button>
      </div>
    </div>
  );
}
