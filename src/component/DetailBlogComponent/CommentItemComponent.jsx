import { ThumbsDown, ThumbsUp } from "lucide-react";
import React from "react";

const CommentItemComponent = () => {
  return (
    <div className="gid">
      <div className="flex gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx88G-18kUyz_BIdAMZzwdbkkJ1pHa8yhJPA&s"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-1 p-3 rounded-lg bg-slate-100">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">Haikal Imanuel</h1>
            <h1 className="text-sm text-slate-500">11/11/2022</h1>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            doloremque delectus repellendus fugit assumenda, modi fuga nam
            ratione nemo dignissimos alias commodi iste perferendis ad
            necessitatibus magni quis. Suscipit, dolorum?Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Rerum repellendus voluptas ea
            necessitatibus illum nam, illo aliquid dicta pariatur, ipsum
            blanditiis dignissimos. Expedita cupiditate aut nihil sint animi
            enim eius!
          </p>
        </div>
      </div>

      <div className="flex gap-4 mt-2 ms-11">
        <div className="flex items-center gap-2">
          <ThumbsUp className="text-black hover:fill-blue-700 " />
          <h5 className="font-semibold">110</h5>
        </div>
        <div className="flex items-center gap-2">
          <ThumbsDown className="text-black hover:fill-red-700 " />
          <h5 className="font-semibold">32</h5>
        </div>
      </div>
    </div>
  );
};

export default CommentItemComponent;
