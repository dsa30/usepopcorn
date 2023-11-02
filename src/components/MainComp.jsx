import React, { useState } from "react";
import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

const MainComp = ({ tempWatchedData, tempMovieData, average }) => {
  return (
    <main className="main">
      <ListBox tempMovieData={tempMovieData} />
      <WatchedBox tempWatchedData={tempWatchedData} average={average} />
    </main>
  );
};

export default MainComp;
