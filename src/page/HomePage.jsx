import React from "react";

const HomePage = () => {
  return (
    <section className="bg-slate-100">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
          <div className="h-20 p-4 my-3 rounded-lg shadow-md bg-slate-200"></div>
          <div className="h-20 p-4 my-3 rounded-lg shadow-md bg-slate-200"></div>
          <div className="h-20 p-4 my-3 rounded-lg shadow-md bg-slate-200"></div>
          <div className="h-20 p-4 my-3 rounded-lg shadow-md bg-slate-200"></div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
