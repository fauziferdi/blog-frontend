import { Plus } from "lucide-react";
import React from "react";

const ProfilePage = () => {
  return (
    <section className="w-full h-screen py-10 bg-slate-100">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="relative">
          <div className="flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx88G-18kUyz_BIdAMZzwdbkkJ1pHa8yhJPA&s"
              alt="profile pictures"
              className="z-10 rounded-full w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
            />
            <div className="absolute w-full pb-10 bg-white rounded-lg z-8 top-24">
              <div className="flex justify-end">
                <button className="flex items-center justify-center gap-1 px-2 py-1 mt-2 rounded-lg bg-slate-200 me-2 hover:bg-slate-100">
                  <Plus className="w-4 h-4 mt-1 md:w-6 md:h-6 lg:w-8 lg:h-8 text-slate-600" />
                  <span className="font-semibold text-md md:text-lg lg:text-2xl text-slate-600">
                    Follow
                  </span>
                </button>
              </div>
              <div className="mt-6 text-center sm:mt-10 lg:mt-14">
                <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl ">
                  Marsel Ahmad Zainudin
                </h1>
                <div className="flex items-center justify-center">
                  <h2 className="max-w-xl px-6 mt-2 text-sm lg:max-w-3xl text-slate-600 sm:text-md lg:text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis esse iusto dicta totam fugiat pariatur consequatur
                    temporibus, sequi eius quam in ipsa est aliquam doloremque
                    vitae deserunt ipsum perferendis dolore.
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-2 mx-10 mt-10 place-items-center">
                  <div>
                    <h2 className="text-5xl border sm:text-7xl lg:text-8xl">
                      100
                    </h2>
                    <h3 className="text-lg border sm:text-xl lg:text-2xl">
                      Followings
                    </h3>
                  </div>
                  <div>
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl">999</h2>
                    <h3 className="text-lg sm:text-xl lg:text-2xl">
                      Followers
                    </h3>
                  </div>
                  <div>
                    <h2 className="text-5xl sm:text-7xl lg:text-8xl">22</h2>
                    <h3 className="text-lg sm:text-xl lg:text-2xl">Blogs</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
