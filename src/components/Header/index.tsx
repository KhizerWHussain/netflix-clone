import React from "react";

const Header = () => {
  return (
    <div className="inset-10 overflow-hidden flex pr-4 pl-4 md:pr-32 md:pl-32 top-0 z-[100] sticky bg-transparent w-full align-middle text-white h-24">
      <div className="flex w-full justify-between align-middle items-center">
        <div>
          <h1 className="text-primary text-[36px] cursor-pointer z-50">
            NETFLIX
          </h1>
        </div>
        <div>
          <button className="bg-primary p-2 rounded-md text-[14px] w-20 hover:bg-red-700 z-50">
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
