import React, { useState } from "react";
import TagCategoryComponent from "../component/HomeComponent/TagCategoryComponent";
import {
  ArrowDown01,
  ArrowDownUp,
  ChevronDown,
  Facebook,
  Instagram,
  LucideSortAsc,
  SortAsc,
  SortAscIcon,
  Twitter,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import ButtonFollow from "../component/ProfileComponent/ButtonFollow";
import CommentItemComponent from "../component/DetailBlogComponent/CommentItemComponent";
import ContainerComponent from "../component/ContainerComponent";

const DetailBlogPage = () => {
  const [sortOption, setSortOption] = useState("terbaru");

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <ContainerComponent>
      {" "}
      {/* body blog */}
      <div className="p-3 bg-white rounded-lg">
        <div className="flex items-center justify-center lg:mt-1">
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Detail Blog
          </h1>
        </div>

        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="space-y-4 md:space-y-8">
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="rounded"
              alt=""
            />
            <div className="flex gap-2">
              <TagCategoryComponent category={"Technology"} />
              <TagCategoryComponent category={"Portofolio"} />
            </div>
            <div class="max-w-xl md:max-w-3xl lg:max-w-6xl">
              <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <div className="flex gap-2 py-2">
                <h3 className="font-semibold">Fauzi Ferdiansyah</h3>
                <h3 className="text-slate-500">12/22/2024</h3>
              </div>
              <hr className="mt-1 mb-4" />

              <p class=" text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, molestiae quos aut vero laudantium neque velit
                provident ipsam adipisci quidem! Deserunt inventore iusto
                aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ipsa ad suscipit deleniti
                cumque ab dicta tenetur quia neque doloremque tempora laboriosam
                nisi dolorem voluptatem possimus voluptatibus maiores cum, iure
                doloribus?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit labore voluptate minima nihil quasi perspiciatis
                quaerat quisquam ullam sit eius est modi quos, placeat ab
                libero, blanditiis fugiat alias incidunt!Loremlorem
              </p>
              <p class="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, molestiae quos aut vero laudantium neque velit
                provident ipsam adipisci quidem! Deserunt inventore iusto
                aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ipsa ad suscipit deleniti
                cumque ab dicta tenetur quia neque doloremque tempora laboriosam
                nisi dolorem voluptatem possimus voluptatibus maiores cum, iure
                doloribus?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit labore voluptate minima nihil quasi perspiciatis
                quaerat quisquam ullam sit eius est modi quos, placeat ab
                libero, blanditiis fugiat alias incidunt!Loremlorem
              </p>
              <p class="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, molestiae quos aut vero laudantium neque velit
                provident ipsam adipisci quidem! Deserunt inventore iusto
                aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ipsa ad suscipit deleniti
                cumque ab dicta tenetur quia neque doloremque tempora laboriosam
                nisi dolorem voluptatem possimus voluptatibus maiores cum, iure
                doloribus?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit labore voluptate minima nihil quasi perspiciatis
                quaerat quisquam ullam sit eius est modi quos, placeat ab
                libero, blanditiis fugiat alias incidunt!Loremlorem
              </p>
              <p class="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, molestiae quos aut vero laudantium neque velit
                provident ipsam adipisci quidem! Deserunt inventore iusto
                aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ipsa ad suscipit deleniti
                cumque ab dicta tenetur quia neque doloremque tempora laboriosam
                nisi dolorem voluptatem possimus voluptatibus maiores cum, iure
                doloribus?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit labore voluptate minima nihil quasi perspiciatis
                quaerat quisquam ullam sit eius est modi quos, placeat ab
                libero, blanditiis fugiat alias incidunt!Loremlorem
              </p>
              <p class="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, molestiae quos aut vero laudantium neque velit
                provident ipsam adipisci quidem! Deserunt inventore iusto
                aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ipsa ad suscipit deleniti
                cumque ab dicta tenetur quia neque doloremque tempora laboriosam
                nisi dolorem voluptatem possimus voluptatibus maiores cum, iure
                doloribus?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Velit labore voluptate minima nihil quasi perspiciatis
                quaerat quisquam ullam sit eius est modi quos, placeat ab
                libero, blanditiis fugiat alias incidunt!Loremlorem
              </p>
              <hr className="mt-4" />
              <div className="flex items-center justify-end gap-2 py-2 md:gap-3 text-slate-500">
                <h3>Share This : </h3>
                <Link
                  to="https://www.facebook.com/"
                  className="hover:text-blue-500"
                >
                  <Facebook />
                </Link>
                <Link
                  to="https://www.facebook.com/"
                  className="hover:text-black"
                >
                  <Twitter />
                </Link>
                <Link
                  to="https://www.facebook.com/"
                  className="hover:text-pink-800"
                >
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* profile info creator */}
      <div className="mt-5 bg-white rounded-lg">
        <div className="flex flex-col items-center gap-2 p-4 md:flex-row md:items-center md:gap-10 md:px-20 lg:px-40">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx88G-18kUyz_BIdAMZzwdbkkJ1pHa8yhJPA&s"
            className="rounded-full w-28 sm:w-40 "
          />
          <div className="py-2 text-center md:text-start">
            <h1 className="text-2xl font-semibold">Fajar ahmadi</h1>
            <h2 className="mt-2 md:mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              praesentium aliquam, officia nam deserunt suscipit in, similique
              repudiandae corrupti dignissimos
            </h2>
          </div>
          <ButtonFollow />
        </div>
      </div>
      {/* Comment Section Blog */}
      <div className="mt-5 bg-white rounded-lg lg:px-10">
        <div className="flex justify-between">
          <h2 className="p-4 text-lg font-semibold md:text-xl">
            Comments(111)
          </h2>
          <div className="flex items-center justify-center gap-2 px-4">
            <div className="relative inline-block text-left">
              <div>
                <span className="rounded-md shadow-sm">
                  <select
                    value={sortOption}
                    onChange={handleSortOptionChange}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md appearance-none hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
                  >
                    <option value="terbaru">Terbaru</option>
                    <option value="terlama">Terlama</option>
                    <option value="terpopuler">Terpopuler</option>
                  </select>
                </span>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-4">
          {/* comment item */}
          <CommentItemComponent />
          <CommentItemComponent />
          <CommentItemComponent />
          <CommentItemComponent />
          <CommentItemComponent />
          <CommentItemComponent />
        </div>
      </div>
    </ContainerComponent>
  );
};

export default DetailBlogPage;
