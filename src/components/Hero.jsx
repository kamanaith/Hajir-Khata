import React from "react";

function Hero() {
  return (
    <>
      <div className="text-center m-10">
        <h1 className=" font-bold text-3xl md:text-5xl">
          <span className="text-green-700">Easy & Affordable </span> <br />
          Attendence, HR & Payroll Software
        </h1>
        <p className="mt-5 font-semibold text-gray-600">
          Join 15+ thriving small and medium-sized businesses streamlining
          workforce management with Hajir khata
        </p>
        <div className="flex flex-row justify-center gap-5 m-5">
          <button
            type="button"
            className="border border-gray-400 p-2 rounded-xl  px-10 w-fit text-[15px] bg-green-700 text-white"
          >
            Book Your Demo
          </button>
          <button
            type="button"
            className="border border-gray-400 p-2 rounded-xl px-10 w-fit text-[15px] bg-green-700 text-white"
          >
            Try Demo
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
