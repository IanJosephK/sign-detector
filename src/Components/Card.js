import React from "react";

const Card = (props) => {
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md ">
    <a href="#">
        <img class="rounded-t-lg" src={props.img} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{props.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 ">{props.desc}</p>
    </div>
</div>
  );
};

export default Card;
