import React from "react";
import Present from "../assets/images/Intro/Present.png";

function Intro() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex lg:flex-row">
        <div>
          {" "}
          <img src={Present} alt="Presentimage" className="" />{" "}
        </div>
        <div className="text-center  mx-auto max-w-xl space-y-4 xl:text-left flex flex-col justify-center ">
          <h1 className="text-3xl text-gray-900  font-bold mx-auto md:text-5xl">
            <span className="text-green-600">Efficiently</span> track, manage,
            and optimize your attendance & payroll.
          </h1>
          <p className=" text-gray-500">
            Hajir, Helps manage employee , payroll & attendance all at one place
            that is hajir khata. With all the data stored and managed through
            cloud service
          </p>
        </div>
      </div>
    </>
  );
}

export default Intro;
