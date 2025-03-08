import React from "react";
import { Plus } from "lucide-react";
import { checkUSer } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const ButtonFollow = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(checkUSer()); // Panggil action creator dan kirim action object ke dispatch
  };

  return (
    <button
      className="flex items-center justify-center gap-1 px-2 py-1 mt-2 rounded-lg bg-slate-200 me-2 hover:bg-slate-100"
      onClick={handleClick} // Gunakan handleClick sebagai event handler
    >
      <Plus className="w-4 h-4 mt-1 md:w-6 md:h-6 lg:w-8 lg:h-8 text-slate-600" />
      <span className="font-semibold text-md md:text-lg lg:text-2xl text-slate-600">
        Follow
      </span>
    </button>
  );
};

export default ButtonFollow;
