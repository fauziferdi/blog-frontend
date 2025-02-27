import React from "react";
import CategoryItemComponent from "../component/CategoryComponent/CategoryItemComponent";

const CategoryPage = () => {
  return (
    <section className="w-full min-h-screen py-10 bg-slate-100">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="p-3 bg-white rounded-lg">
          <div className="flex items-center justify-center lg:mt-3">
            <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Category
            </h1>
          </div>
          <div className="py-3 sm:py-5 lg:py-8">
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 md:py-5">
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
              <CategoryItemComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CategoryPage;
