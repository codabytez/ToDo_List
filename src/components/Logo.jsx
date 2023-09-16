import React from "react";
import resume from "../assets/resume.svg";

const Logo = () => {
  return (
    <div className="relative bg-[#0d0d0d] text-[#5e60ce] font-inter text-5xl font-extrabold text-center p-16 flex justify-center items-center gap-4 ">
      <img src={resume} alt="resume" className="w-16 h-16" /> <h1>Todo</h1>
    </div>
  );
};

export default Logo;
