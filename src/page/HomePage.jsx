import React, { useState } from "react";
import HandleSwitchComponent from "../component/HomeComponent/HandleSwitchComponent";
import {
  Bookmark,
  FireExtinguisher,
  Flame,
  Medal,
  Search,
  SearchIcon,
  SquarePen,
} from "lucide-react";
import BlogItemComponent from "../component/HomeComponent/BlogItemComponent";
import RetweetItemComponent from "../component/HomeComponent/RetweetItemComponent";
import MostCategoryItemComponent from "../component/HomeComponent/MostCategoryItemComponent";
import BlogSideItemComponent from "../component/HomeComponent/BlogSideItemComponent";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [activeButton, setActiveButton] = useState("forYou");

  const handleClickMain = (button) => {
    setActiveButton(button);
  };
  return (
    <section className="w-full py-10 bg-slate-100">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
          {/* second main */}
          <div className="rounded-lg  md:col-span-2">
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
            <h4 className="py-4 text-slate-700 ms-1">All Category</h4>

            {/* List Blog */}
            <div className="grid grid-cols-1 gap-4 py-4">
              <BlogItemComponent />
              <RetweetItemComponent />
            </div>
          </div>
          {/* section second */}
          <div className="hidden rounded-lg md:block ">
            {/* search section */}
            <div className="relative">
              <div className="flex items-center">
                <Search className="absolute left-3 text-slate-500" size={20} />
                <input
                  className="w-full px-4 py-2 pl-10 rounded-lg"
                  type="text"
                  placeholder="Search for anything"
                />
              </div>
            </div>
            {/* most category section */}
            <div className="mt-3">
              <div className="pb-2 bg-white rounded-lg shadow-md">
                <div className="flex items-center p-2 text-red-600">
                  <Flame />
                  <h2 className="font-semibold ms-1">Most Category</h2>
                </div>
                <div className="grid justify-center grid-cols-1 gap-2 px-2 lg:grid-cols-2">
                  <MostCategoryItemComponent />
                  <MostCategoryItemComponent />
                  <MostCategoryItemComponent />
                  <MostCategoryItemComponent />
                  <MostCategoryItemComponent />
                  <MostCategoryItemComponent />
                </div>
              </div>
            </div>
            {/* most category section */}
            <div className="mt-3">
              <div className="pb-2 bg-white rounded-lg shadow-md">
                <div className="flex items-center p-2 text-red-600">
                  <Medal />
                  <h2 className="font-semibold ms-1">Recomendation Blog</h2>
                </div>
                <div className="grid grid-cols-1 gap-1 px-2">
                  <BlogSideItemComponent />
                  <BlogSideItemComponent />
                  <BlogSideItemComponent />
                </div>
                <div className="text-sm ms-3 text-slate-500">
                  <Link to="#">See The Full List</Link>
                </div>
              </div>
            </div>

            {/* recent bookmark section */}
            <div className="mt-3">
              <div className="pb-2 bg-white rounded-lg shadow-md">
                <div className="flex items-center p-2 text-red-600">
                  <Bookmark />
                  <h2 className="font-semibold ms-1">Recently Saved</h2>
                </div>
                <div className="grid grid-cols-1 gap-1 px-2">
                  <BlogSideItemComponent />
                  <BlogSideItemComponent />
                  <BlogSideItemComponent />
                </div>
                <div className="text-sm ms-3 text-slate-500">
                  <Link to="#">See All (88)</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
