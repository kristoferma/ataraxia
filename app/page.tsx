"use client";

import React from "react";
const INITIAL_NUMBER_OF_HEXAGONS = 1000;

const colors = ["yellow", "red", "blue"];

const randomColor = () => {
  if (Math.random() > 0.6) {
    return colors[Math.floor(Math.random() * colors.length)];
  } else return "";
};

export default function Home() {
  return (
    <main className="main relative">
      <div className="background">
        <div className="hex-container">
          {[...Array(INITIAL_NUMBER_OF_HEXAGONS)].map((e, i) => (
            <div className={randomColor()} key={i}></div>
          ))}
        </div>
      </div>
      <div className="absolute flex w-screen h-screen justify-center items-center">
        <div className="bg-white p-10 rounded-full border-2 border-black font-black text-9xl">
          Ataraxia
        </div>
      </div>
    </main>
  );
}
