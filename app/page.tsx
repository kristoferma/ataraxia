"use client";

import React from "react";
const INITIAL_NUMBER_OF_HEXAGONS = 1000;

export default function Home() {
  return (
    <main className="main">
      <div className="hex-container">
        {[...Array(INITIAL_NUMBER_OF_HEXAGONS)].map((e, i) => (
          <div key={i}></div>
        ))}
      </div>
    </main>
  );
}
