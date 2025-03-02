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

const BlogItemComponent = ({ retweet = false }) => {
  return (
    <div
      className={`px-4 py-2 rounded-md hover:bg-gray-100 ${
        retweet ? "" : "bg-white"
      }`}
    >
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
        <div className="items-center hidden gap-2 p-2 sm:flex">
          <TagCategoryComponent category={"Technology"} />
          <TagCategoryComponent category={"Portofolio"} />
        </div>
      </div>
      {/* body blog */}
      <div className="grid grid-cols-3 gap-4 py-2 ">
        <div className="col-span-2">
          <h2 className="mb-1 text-xl font-semibold">
            Your Title Min Is a naught beautyfull
          </h2>
          <p className="overflow-y-auto max-h-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eos perspiciatis optio esse, ratione, unde placeat deleniti aliquam
            itaque deserunt velit corporis, voluptatem architecto quibusdam rem
            perferendis est! Magnam, perspiciatis?..
          </p>
        </div>
        <div className="items-center justify-center sm:flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvefdgiMzP7NaQ9U6STbn9Zb8WvNMH2HVkg&s"
            alt=" blog 1"
            className="w-52"
          />
        </div>
      </div>
      {/* footer blog */}
      {!retweet && (
        <div className="flex items-center justify-between py-2">
          <h5> 3 min read</h5>
          <div className="flex items-center gap-2 w-28">
            <ThumbsUp className="text-black hover:text-blue-700 fill-blue-500 " />
            <MessageCircle className=" hover:text-blue-700" />
            <Repeat className="hover:text-blue-700" />

            <Bookmark className="hover:text-blue-700" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogItemComponent;
