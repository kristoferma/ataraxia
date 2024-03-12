"use client";

import React from "react";
const INITIAL_NUMBER_OF_HEXAGONS = 500;

const colors = ["#ffcb05", "#ed1c24", "#0088cb"];

const randomColor = () => {
  if (Math.random() > 0.6) {
    return colors[Math.floor(Math.random() * colors.length)];
  } else return "";
};

export default function Home() {
  return (
    <main className="main flex flex-col justify-center relative w-screen h-screen">
      <div className="background">
        <div className="hex-container">
          {[...Array(INITIAL_NUMBER_OF_HEXAGONS)].map((e, i) => (
            <Hexagon key={i} />
          ))}
        </div>
      </div>
      <div className="absolute flex w-auto h-auto self-center">
        <div className="bg-white p-10 rounded-full border-2 border-black font-black text-2xl md:text-9xl">
          Ataraxia
        </div>
      </div>
    </main>
  );
}

const Hexagon = () => {
  const [color, setColor] = React.useState<string | undefined>(() =>
    randomColor()
  );
  const changeColor = React.useCallback(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  return <div onClick={changeColor} style={{ backgroundColor: color }}></div>;
};
