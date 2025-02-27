import React from "react";
import TagCategoryComponent from "./TagCategoryComponent";

const BlogSideItemComponent = () => {
  return (
    <div className="p-1 bg-white rounded-md">
      <div className="flex justify-between">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx88G-18kUyz_BIdAMZzwdbkkJ1pHa8yhJPA&s"
              alt="profile pictures"
              className="rounded-full w-7 h-7"
            />
            <h3 className="text-sm font-semibold text-slate-600">
              Bunga Cintra Lestari
            </h3>
          </div>
        </div>
        <div className="items-center hidden gap-2 p-2 sm:flex">
          <h3 className="hidden text-xs text-slate-500 lg:block">11-222-22</h3>
        </div>
      </div>
      <div>
        <h2 className="max-w-md py-2 text-sm font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
          itaque fugit.
        </h2>
      </div>
    </div>
  );
};
export default BlogSideItemComponent;
