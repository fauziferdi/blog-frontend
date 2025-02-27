import React from "react";
import { Link } from "react-router-dom";

const CategoryItemComponent = () => {
  return (
    <Link to="#">
      <div className="flex items-center justify-center rounded-lg group">
        <div>
          <img
            src="https://e7.pngegg.com/pngimages/810/895/png-clipart-graphics-pixel-art-grumpy-cat-drawing-rectangle-head.png"
            alt="category item"
            className="w-20 h-20 transition-transform duration-300 rounded-lg sm:w-28 sm:h-28 group-hover:scale-110"
          />
          <h3 className="mt-1 font-semibold text-center transition-colors duration-300 group-hover:text-slate-500">
            Programming
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItemComponent;
