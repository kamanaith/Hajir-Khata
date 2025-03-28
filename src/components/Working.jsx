import React from "react";

function Working() {
  return (
    <>
      <div className="w-full bg-green-600 flex items-center justify-center p-8 py-10 md:mb-10 relative overflow-hidden">
        <div className="inset-0 absolute">
          {/* <div className='absolute top-0 left-0 w-60 h-60 rounded-full translate-x-1/2 translate-y-1/2 bg-green-300'></div> */}
          <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full translate-x-1/2 translate-y-1/2 bg-green-300"></div>
        </div>
        <div className="w-[90%] z-10">
          <div className="text-center">
            <h3 className="text-2xl text-white lg:mt-10 uppercase font-medium ">
              Whats the function
            </h3>
            <h1 className="text-4xl text-white font-bold">
              Let's see how it works
            </h1>
          </div>
          <div className="flex flex-col justify-between items-start lg:flex lg:flex-row lg:mt-10">
            <div className="flex-1 relative pb-10">
              <div className="text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full  bg-white text-green-700 flex items-center justify-center text-xl font-bold mr-4">
                    01
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Contact Supports </h3>
                  <p className="text-sm lg:w-[250px] text-white">
                    Contact our support team to complete your registration.
                    We're here to provide all the assistance you need.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative pb-10">
              <div className="text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full  bg-white text-green-700 flex items-center justify-center text-xl font-bold mr-4">
                    02
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Get your demo </h3>
                  <p className="text-sm lg:w-[250px] text-white">
                    Contact our support team to complete your registration.
                    We're here to provide all the assistance you need.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative pb-10">
              <div className="text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full  bg-white text-green-700 flex items-center justify-center text-xl font-bold mr-4">
                    03
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Implement system </h3>
                  <p className="text-sm lg:w-[250px] text-white">
                    Contact our support team to complete your registration.
                    We're here to provide all the assistance you need.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative pb-10">
              <div className="text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full  bg-white text-green-700 flex items-center justify-center text-xl font-bold mr-4">
                    04
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Update data </h3>
                  <p className="text-sm lg:w-[250px] text-white">
                    Contact our support team to complete your registration.
                    We're here to provide all the assistance you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Working;
