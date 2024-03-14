"use client";

import React from "react";
import Image from "next/image";

import hexagons from "../public/hexagon-tiles.png";

const INITIAL_NUMBER_OF_HEXAGONS = 1000;

const colors = ["#ffcb05", "#ed1c24", "#0088cb"];

const randomColor = () => {
  if (Math.random() > 0.6) {
    return colors[Math.floor(Math.random() * colors.length)];
  } else return "";
};

const isIOS = () => {
  if (typeof window !== "undefined") {
    const userAgent = window.navigator.userAgent;
    return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
  }
  return false;
};

export default function Home() {
  return (
    <main className="main flex flex-col justify-center relative w-screen h-screen">
      <HexagonBackground />
      <div className="absolute flex w-auto h-auto self-center">
        <div className="bg-white p-10 rounded-full border-2 border-black font-black text-center ">
          <h1 className="text-2xl md:text-9xl ">Ataraxia</h1>
          <h2 className="text-xl">Nýtt bragð af hugbúnaðarbúllu</h2>
          {isIOS() ? null : <h3 className="text-lg">Snertu sexhyrningana!</h3>}
        </div>
      </div>
    </main>
  );
}

const HexagonBackground = () => {
  if (typeof window !== "undefined") {
    const userAgent = window.navigator.userAgent;

    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
      return (
        <div className="background">
          <Image
            alt="White hexagon grid with few hexagons colored in red, yellow and blue."
            src={hexagons}
            placeholder="blur"
            quality={100}
            fill
            sizes="200vw"
            priority
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      );
    }
  }
  return (
    <div className="background">
      <div className="hex-container">
        {[...Array(INITIAL_NUMBER_OF_HEXAGONS)].map((e, i) => (
          <Hexagon key={i} />
        ))}
      </div>
    </div>
  );
};

const Hexagon = () => {
  const [color, setColor] = React.useState<string | undefined>(() =>
    randomColor()
  );
  const changeColor = React.useCallback(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, []);

  return <div onClick={changeColor} style={{ backgroundColor: color }}></div>;
};
