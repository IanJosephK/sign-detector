import React from "react";
import Card from "./Components/Card";
import img from "./Components/img/mitron.jpg";

const AboutUs = () => {
  return (
    <div className="">
      <h1 className=" text-3xl font-bold p-10 text-center">About Us</h1>
      <div className="flex gap-5 mx-60 py-30">
        <Card
          name="Royden"
          img={img}
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum saepe ducimus dolorem doloribus alias excepturi, quisquam commodi tenetur quis modi!"
        ></Card>
        <Card
          name="Royden"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum saepe ducimus dolorem doloribus alias excepturi, quisquam commodi tenetur quis modi!"
        ></Card>
        <Card
          name="Royden"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum saepe ducimus dolorem doloribus alias excepturi, quisquam commodi tenetur quis modi!"
        ></Card>
      </div>
    </div>
  );
};

export default AboutUs;
