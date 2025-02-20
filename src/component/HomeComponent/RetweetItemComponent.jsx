import React from "react";
import {
  Bookmark,
  GitCommitVertical,
  Heart,
  MessageCircle,
  Repeat,
  ThumbsUp,
} from "lucide-react";
import TagCategoryComponent from "./TagCategoryComponent";
import BlogItemComponent from "./BlogItemComponent";

const RetweetItemComponent = ({}) => {
  return (
    <div className="px-4 py-2 bg-white rounded-md ">
      {/* header Blog */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx88G-18kUyz_BIdAMZzwdbkkJ1pHa8yhJPA&s"
            alt="profile pictures"
            className="w-10 h-10 rounded-full"
          />
          <h3 className="text-sm font-semibold">Bunga Cintra Lestari</h3>
          <h3 className="text-xs text-gray-500">4 days ago</h3>
        </div>
      </div>
      {/* body blog */}
      <div className="md:ms-12">
        <div className="py-2 md:py-0 ">
          <p className="overflow-y-auto max-h-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eos perspiciatis optio esse, ratione, unde placeat deleniti aliquam
            itaque deserunt velit corporis, voluptatem architecto quibusdam rem
            perferendis est! Magnam, perspiciatis?..
          </p>
        </div>
        <div className="my-3 rounded-lg bg-slate-200">
          <BlogItemComponent retweet={true} />
        </div>
        <div className="flex items-center justify-between py-2">
          <h5> 3 min read</h5>
          <div className="flex items-center gap-2 w-28">
            <ThumbsUp className="hover:text-blue-700" />
            <MessageCircle className="hover:text-blue-700" />
            <Repeat className="hover:text-blue-700" />
            <Bookmark className="hover:text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetweetItemComponent;
