import React from "react";
import Ily from "./Components/img/Blue-ily.png";

const Home = () => {
  return (
    <>      <div class="bg-white overflow-hidden">
        <div class="text-center w-full mx-auto py-20 px-4 sm:px-6 lg:py-32 lg:px-8 z-20">
          <h2 class="text-black sm:text-4xl">
            <span class="block text-3xl font-semibold">Welcome to</span>
            <span class="block text-4xl font-extrabold text-cyan-400">
              Sign language Detector!
            </span>
          </h2>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-4 px-6  bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500 focus:ring-offset-cyan-200 text-white w-full transition ease-in duration-200 text-center text-2xl font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              ><a href="/Detector"> Get started!</a>
              </button>
            </div>
          </div>
          <div className="flex">
            <img className="w-24 mx-auto my-5" src={Ily} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
