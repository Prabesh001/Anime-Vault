"use client";
import React, { useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";

const Bookmark = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div
      className="flex cursor-pointer flex-row gap-2 items-center"
      onClick={() => setIsClicked((prev) => !prev)}
    >
      {isClicked ? <FaBookmark color="green"/> : <FaRegBookmark />}
      <p className={`text-base font-bold ${isClicked?"text-green-500":"text-[#e79f41]"}`}>1</p>
    </div>
  );
};

export default Bookmark;
