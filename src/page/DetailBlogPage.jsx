import React from "react";
import TagCategoryComponent from "../component/HomeComponent/TagCategoryComponent";

const DetailBlogPage = () => {
  return (
    <section className="w-full min-h-screen py-10 bg-slate-100">
      <div className="max-w-screen-xl px-4 mx-auto bg-white sm:px-6 lg:px-8">
        <div className="p-3 bg-white rounded-lg">
          <div className="flex items-center justify-center lg:mt-1">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Detail Blog
            </h1>
          </div>
          <section>
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

                  <p class="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, molestiae quos aut vero laudantium neque velit
                    provident ipsam adipisci quidem! Deserunt inventore iusto
                    aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsa ad
                    suscipit deleniti cumque ab dicta tenetur quia neque
                    doloremque tempora laboriosam nisi dolorem voluptatem
                    possimus voluptatibus maiores cum, iure doloribus?Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Velit
                    labore voluptate minima nihil quasi perspiciatis quaerat
                    quisquam ullam sit eius est modi quos, placeat ab libero,
                    blanditiis fugiat alias incidunt!Loremlorem
                  </p>
                  <p class="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, molestiae quos aut vero laudantium neque velit
                    provident ipsam adipisci quidem! Deserunt inventore iusto
                    aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsa ad
                    suscipit deleniti cumque ab dicta tenetur quia neque
                    doloremque tempora laboriosam nisi dolorem voluptatem
                    possimus voluptatibus maiores cum, iure doloribus?Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Velit
                    labore voluptate minima nihil quasi perspiciatis quaerat
                    quisquam ullam sit eius est modi quos, placeat ab libero,
                    blanditiis fugiat alias incidunt!Loremlorem
                  </p>
                  <p class="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, molestiae quos aut vero laudantium neque velit
                    provident ipsam adipisci quidem! Deserunt inventore iusto
                    aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsa ad
                    suscipit deleniti cumque ab dicta tenetur quia neque
                    doloremque tempora laboriosam nisi dolorem voluptatem
                    possimus voluptatibus maiores cum, iure doloribus?Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Velit
                    labore voluptate minima nihil quasi perspiciatis quaerat
                    quisquam ullam sit eius est modi quos, placeat ab libero,
                    blanditiis fugiat alias incidunt!Loremlorem
                  </p>
                  <p class="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, molestiae quos aut vero laudantium neque velit
                    provident ipsam adipisci quidem! Deserunt inventore iusto
                    aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsa ad
                    suscipit deleniti cumque ab dicta tenetur quia neque
                    doloremque tempora laboriosam nisi dolorem voluptatem
                    possimus voluptatibus maiores cum, iure doloribus?Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Velit
                    labore voluptate minima nihil quasi perspiciatis quaerat
                    quisquam ullam sit eius est modi quos, placeat ab libero,
                    blanditiis fugiat alias incidunt!Loremlorem
                  </p>
                  <p class="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, molestiae quos aut vero laudantium neque velit
                    provident ipsam adipisci quidem! Deserunt inventore iusto
                    aliquid nobis, ex dolorem officiis omnis esse. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Ipsa ad
                    suscipit deleniti cumque ab dicta tenetur quia neque
                    doloremque tempora laboriosam nisi dolorem voluptatem
                    possimus voluptatibus maiores cum, iure doloribus?Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Velit
                    labore voluptate minima nihil quasi perspiciatis quaerat
                    quisquam ullam sit eius est modi quos, placeat ab libero,
                    blanditiis fugiat alias incidunt!Loremlorem
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default DetailBlogPage;
