import React from "react";
import Tag from "./Tag";

const GifGenerator = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
        <h1 className="rounded-lg w-11/12 text-center mx-10 py-4 text-5xl font-bold text-purple-800 mt-[60px]">
          RANDOM GIFS
        </h1>
        <div className="flex flex-col w-full items-center gap-y-15 mt-[30px]">
          <Tag />
        </div>
      </div>
    </>
  );
};

export default GifGenerator;
