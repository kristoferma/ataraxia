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
    <main className="main">
      <div className="hex-container">
        {[...Array(INITIAL_NUMBER_OF_HEXAGONS)].map((e, i) => (
          <div className={randomColor()} key={i}></div>
        ))}
      </div>
    </main>
  );
}
