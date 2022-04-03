import React from "react";
import ily from "./Components/img/suit-ily.png"
import yes from "./Components/img/suit-yes.png"
import hi from "./Components/img/suit-hi.png"

const Signs = () => {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center my-16 mx-72">
        <a
          href="#"
          class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={ily}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              I Love you
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
            To sign I love you, put up your thumb, index finger and pinkie finger, while keeping your ring finger and your middle finger down. Hold the hand out, palm facing away from you and move it back and forth slightly.
            </p>
          </div>
        </a>

        <a
          href="#"
          class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={yes}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              I care
            </h5>
            <p class="mb-3 font-normal text-gray-700">
              To signal that you care, hold up you left fist in the air
            </p>
          </div>
        </a>

        <a
          href="#"
          class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 "
        >
          <img
            class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={hi}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Hello
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              Wave your hand back and forth to say Hello
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Signs;
