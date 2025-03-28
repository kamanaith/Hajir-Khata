import React from "react";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6 md:p-12">
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-green-600 text-sm md:text-lg font-semibold">
                Contact
              </h2>
              <h1 className="text-2xl md:text-3xl font-bold">
                Let's talk and solve your problems
              </h1>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We’re here to help and answer any questions you might have. We
                look forward to hearing from you.
              </p>
              <div>
                <h3 className="text-green-600 font-semibold text-sm md:text-base">
                  Location
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Kathmandu, Nepal | Itahari, Nepal
                </p>
              </div>
              <div>
                <h3 className="text-green-600 font-semibold text-sm md:text-base">
                  Phone
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  +977-9824386694
                </p>
              </div>
              <div>
                <h3 className="text-green-600 font-semibold text-sm md:text-base">
                  Email
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  hajirkhata@gmail.com
                </p>
              </div>
            </div>
            <form className="space-y-5">
              <div>
                <label className="block font-semibold text-sm md:text-base">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded-md text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm md:text-base">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-md text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm md:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter the subject"
                  className="w-full px-4 py-2 border rounded-md text-sm md:text-base"
                />
              </div>
              <div>
                <label className="block font-semibold text-sm md:text-base">
                  Message
                </label>
                <textarea
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border rounded-md h-24 text-sm md:text-base"
                ></textarea>
              </div>
              <p className="text-gray-500 text-xs md:text-sm">
                Your message will be sent through email
              </p>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 text-sm md:text-base"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
