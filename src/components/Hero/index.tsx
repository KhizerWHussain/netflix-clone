import React from "react";
import style from "./hero.module.css";

const HeroSection = () => {
  return (
    <div className="h-full w-screen overflow-hidden justify-center align-middle items-center flex flex-col">
      <div className={`${style.heroImage}`} />

      <div className="absolute inset-0 bg-black/75" />
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4 w-full mt-36">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 w-1/2">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-xl md:text-2xl mb-4">
          Starts at Rs 250. Cancel anytime.
        </h2>
        <p className="text-[16px] mb-8 w-2/3">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-2">
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 rounded-md w-full md:w-96 text-white border-gray-50/75 bg-[#0F0F0F]/75 border"
          />
          <button className="bg-red-600 text-white px-5 py-3 rounded-md hover:bg-red-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
