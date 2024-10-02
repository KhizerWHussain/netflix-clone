import dynamic from "next/dynamic";
import React from "react";
const HeroSection = dynamic(() => import("@/components/Hero"), { ssr: true });
const TrendingNow_Main = dynamic(
  () => import("@/components/TrendingNow_Main"),
  { ssr: false }
);

const Base = () => {
  return (
    <>
      <HeroSection />
      <TrendingNow_Main />
    </>
  );
};

export default Base;
