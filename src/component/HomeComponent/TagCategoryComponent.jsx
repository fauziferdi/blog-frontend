import React from "react";

const TagCategoryComponent = ({ category }) => {
  return (
    <div className="px-2 py-1 my-1 text-xs text-center rounded-full sm:my-0 bg-slate-300">
      {category}
    </div>
  );
};

export default TagCategoryComponent;
