import React from "react";
import { Plus } from "lucide-react";

const ButtonFollow = () => {
  return (
    <button className="flex items-center justify-center gap-1 px-2 py-1 mt-2 rounded-lg bg-slate-200 me-2 hover:bg-slate-100">
      <Plus className="w-4 h-4 mt-1 md:w-6 md:h-6 lg:w-8 lg:h-8 text-slate-600" />
      <span className="font-semibold text-md md:text-lg lg:text-2xl text-slate-600">
        Follow
      </span>
    </button>
  );
};
export default ButtonFollow;
