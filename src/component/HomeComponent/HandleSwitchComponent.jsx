import React from "react";

const HandleSwitchComponent = ({ activeButton, onChangeMain }) => {
  return (
    <div className="inline-flex w-full overflow-hidden border border-gray-300 rounded-md md:w-1/2">
      <button
        className={`px-4 py-2 w-1/2 font-bold focus:outline-none transition-colors duration-300
    ${
      activeButton === "forYou"
        ? "bg-white text-black hover:bg-black-600"
        : "bg-transparent text-gray-700 hover:bg-gray-100"
    }`}
        onClick={() => onChangeMain("forYou")}
      >
        For You
      </button>
      <button
        className={`px-4 py-2 w-1/2 font-bold focus:outline-none transition-colors duration-300
    ${
      activeButton === "following"
        ? "bg-white text-black hover:bg-black-600"
        : "bg-transparent text-gray-700 hover:bg-gray-100"
    }`}
        onClick={() => onChangeMain("following")}
      >
        Following
      </button>
    </div>
  );
};

export default HandleSwitchComponent;
