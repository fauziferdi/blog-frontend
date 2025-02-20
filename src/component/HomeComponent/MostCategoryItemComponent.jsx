import React from "react";

const MostCategoryItemComponent = () => {
  return (
    <div className="flex items-center border rounded-lg bg-slate-200">
      <div className="p-2 rounded-lg bg-slate-200">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4854/4854246.png"
          alt=""
          className="w-10 h-10"
        />
      </div>
      <div className="flex items-center gap-1 ml-2">
        <h3 className="text-lg font-semibold">Gaming</h3>
        <h4 className="mb-2 text-xs">(111)</h4>
      </div>
    </div>
  );
};

export default MostCategoryItemComponent;
