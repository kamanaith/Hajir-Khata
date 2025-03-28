import React from "react";
import Marquee from "react-fast-marquee";
import hemanta from "../assets/images/Testimonials/hemanta.jpg";
import kesab from "../assets/images/Testimonials/kesab.jpg";
import kshitij from "../assets/images/Testimonials/kshitij.jpg";
import sumit from "../assets/images/Testimonials/sumit.jpg";
import naxa from "../assets/images/Testimonials/naxa.png";
import sajilo from "../assets/images/Testimonials/sajilo.png";
import hunchha from "../assets/images/Testimonials/hunchha.jpg";
import gorkha from "../assets/images/Testimonials/gorkha.jpg";

const testimonials = [
  {
    name: "Sumit Basnet",
    position: "CTO, Naxa Pvt. Ltd.",
    text: "Hajir Khata has transformed how we handle payroll at Naxa Pvt. Ltd. It's user-friendly and has saved us a lot of time and effort.",
    image: sumit,
    logo: naxa,
  },
  {
    name: "Hemanta Jung Karki",
    position: "CEO, Hunchha Digital",
    text: "Hajir Khata has been instrumental in helping us manage our payroll efficiently. It provides insightful reports and has significantly reduced our administrative workload.",
    image: hemanta,
    logo: hunchha,
  },
  {
    name: "Kshitij Dahal",
    position: "CEO, Sajilo 360",
    text: "Hajir Khata has streamlined our process, making it easy for attendance and payroll management.",
    image: kshitij,
    logo: sajilo,
  },
  {
    name: "Kesab Raj Ghimirey",
    position: "HR, Gorkha Department Store",
    text: "Hajir Khata has streamlined our process, making it easy for attendance and payroll management.",
    image: kesab,
    logo: gorkha,
  },
];

function Testimonials() {
  return (
    <>
      <div className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold">
          Check what our clients are saying
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          {" "}
          With customization features and industry-specific configuration, Hajir
          Khata payroll and attendance management software provides solutions
          for our clients.
        </p>
        <div className="mt-8 overflow-x-auto flex justify-center  md:flex-row px-6 ">
          <Marquee speed={1} pauseOnHover gradient={false}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border border-green-500 rounded-lg p-6 shadow-md mx-4  animate-scroll gap-3 w-[450px]  flex flex-row items-center"
              >
                <div className="w-2/5 ">
                  <img
                    src={testimonial.image}
                    alt={name}
                    className=" rounded-l-2xl h-[200px] w-[750px] object-cover"
                  />
                </div>
                <div className="w-3/5 pl-4">
                  <p className="text-gray-700 text-sm ">{testimonial.text}</p>
                  <div className="mt-4  flex text-sm justify-between items-left gap-2">
                    <b>{testimonial.name}</b>
                    <img
                      src={testimonial.logo}
                      alt="company logo"
                      className="w-6 h-6 "
                    />
                  </div>
                  <p className="text-sm text-left text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
