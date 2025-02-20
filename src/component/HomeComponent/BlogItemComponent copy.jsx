import React from "react";
import { Heart } from "lucide-react";

const BlogItemComponentr = ({
  title = "Terima Kasih",
  body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  image = "https://lh6.googleusercontent.com/proxy/HSNVZUIVMyU6NLtDuSCPOqOhlW_JAT-TVVYjdpAa9VcY6FkJ4RpwSPzdZLeIAXoyZj0fj60t5E_8eDREH6rWCDCJEIom5NCHnwrdgPDXouoMeuAUhXZLqBNYE07S_xV_FG42vVbD2nRBKLxNwXlNShh1sv6bvQQk1e8P3Gsask0S5SL54L9BrfJu926_Udtw3VLviw", // Contoh gambar placeholder
  author = {
    name: "John Doe",
    image:
      "https://lh6.googleusercontent.com/proxy/HSNVZUIVMyU6NLtDuSCPOqOhlW_JAT-TVVYjdpAa9VcY6FkJ4RpwSPzdZLeIAXoyZj0fj60t5E_8eDREH6rWCDCJEIom5NCHnwrdgPDXouoMeuAUhXZLqBNYE07S_xV_FG42vVbD2nRBKLxNwXlNShh1sv6bvQQk1e8P3Gsask0S5SL54L9BrfJu926_Udtw3VLviw", // Contoh gambar profil placeholder
  },
  date = "20 Februari 2025",
  onClick,
  isLiked = false,
  onLike,
}) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48 bg-violet-600"
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <p className="mb-4 text-base text-gray-700">{body}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={author.image}
              alt={author.name}
              className="w-8 h-8 mr-2 rounded-full bg-violet-600 "
            />
            <div>
              <p className="text-sm text-gray-600">{author.name}</p>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
          <button onClick={onLike}>
            <Heart
              size={24}
              className={`text-${isLiked ? "red" : "gray-500"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogItemComponentr;
