import React from "react";
import Sajilo from "../assets/images/Sponsors/sajilo.webp";
import Gorkha from "../assets/images/Sponsors/gorkha.webp";
import Konnect from "../assets/images/Sponsors/konnect.webp";
import Yaksha from "../assets/images/Sponsors/yaksa.webp";
import Ecowrap from "../assets/images/Sponsors/ecowrap.webp";
import Jwala from "../assets/images/Sponsors/jwala.webp";
import Aertc from "../assets/images/Sponsors/aertc.webp";
import Geovation from "../assets/images/Sponsors/geovation.webp";
import Century from "../assets/images/Sponsors/centurylink.svg";

function Sponsors() {
  const sponsor = [
    { img: Sajilo, name: "Sajilo 360 ERP" },
    { img: Gorkha, name: "Gorkha Department" },
    { img: Konnect, name: "Konnect Nepal" },
    { img: Yaksha, name: "Yaksha Cafe" },
    { img: Ecowrap, name: "Ecowrap" },
    { img: Jwala, name: "Jwala" },
    { img: Aertc, name: "AERTC" },
    { img: Geovation, name: "Geovation" },
    { img: Century, name: "Century Link" },
  ];
  return (
    <>
      <div className="text-center mb-6 text-2xl">
        <h1 className="font-bold  text-green-600">
          Hajir Khata: Trusted by top Businesses in Nepal
        </h1>
        <p className="text-sm p-5 text-gray-600">
          Hajir Khata is Nepal’s leading{" "}
          <span className="font-semibold ">attendance management</span> and{" "}
          <span className="font-semibold">payroll calculation software.</span>{" "}
          It is trusted by top businesses for its ease of use, affordability,
          and reliability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:px-20 lg:mb-10 gap-6 place-items-center">
        {sponsor.map((sponsor, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={sponsor.img}
              alt={sponsor.name}
              className="h-20 w-32 object-contain"
            />
            <h2 className="mt-2 text-lg font-semibold text-gray-800">
              {sponsor.name}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default Sponsors;
