import React, { useState } from "react";
import HandleSwitchComponent from "../component/HomeComponent/HandleSwitchComponent";
import { SquarePen } from "lucide-react";
import BlogItemComponent from "../component/HomeComponent/BlogItemComponent";
import RetweetItemComponent from "../component/HomeComponent/RetweetItemComponent";

const HomePage = () => {
  const [activeButton, setActiveButton] = useState("forYou");

  const handleClickMain = (button) => {
    setActiveButton(button);
  };
  return (
    <section className="w-full py-10 bg-slate-100">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 ">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
          {/* second main */}
          <div class=" rounded-lg md:col-span-2">
            <div className="flex justify-between">
              {/* button switch main follow */}
              <HandleSwitchComponent
                onChangeMain={handleClickMain}
                activeButton={activeButton}
              />
              {/* Button Write a blog */}
              <button className="hidden px-4 py-2 text-gray-500 bg-white border rounded-md md:block hover:bg-gray-100">
                <span className="flex items-center">
                  <SquarePen size={20} />
                  <span className="ml-2">Write a blog</span>
                </span>
              </button>
            </div>
            {/* active category blog */}
            <h4 className="py-4 text-slate-700 ">All Category</h4>

            {/* List Blog */}
            <div className="grid grid-cols-1 gap-4 py-4">
              <BlogItemComponent />
              <RetweetItemComponent />
            </div>
          </div>
          {/* section second */}
          <div class="h-32 rounded-lg bg-gray-200 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
