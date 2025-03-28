import React, { useState } from "react";
import Dashboard1 from "../assets/images/Dashboard/Dashboard1.png";
import Dashboard2 from "../assets/images/Dashboard/Dashboard2.png";
import Admin1 from "../assets/images/Dashboard/Admin1.png";
import User1 from "../assets/images/Dashboard/User1.png";

const tabs = ["Dashboard", "Admin App", "User App"];

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100 min-h-screen p-8 max-w-screen">
        <div className="flex space-x-4 bg-white rounded-2xl md:px-20 py-2 shadow-md mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`items-center bg-gray-300 p-2  font-semibold rounded-2xl ${
                activeTab === tab
                  ? "bg-green-700 text-white"
                  : "bg-gray-200 text-green-700 "
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Image Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeTab === "Dashboard" && (
            <div className="flex flex-col gap-4 md:flex md:flex-row ">
              <img
                src={Dashboard1}
                alt="Dashboard View"
                className="w-full rounded-lg p-10 shadow-lg"
              />
              <img
                src={Dashboard2}
                alt="Dashboard View"
                className="w-full rounded- p-10 shadow-lg"
              />
            </div>
          )}
          {activeTab === "Admin App" && (
            <img
              src={Admin1}
              alt="Admin App View"
              className="w-fit rounded-lg p-10 shadow-lg"
            />
          )}
          {activeTab === "User App" && (
            <img
              src={User1}
              alt="User App View"
              className="w-full rounded-lg p-10 shadow-lg"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
