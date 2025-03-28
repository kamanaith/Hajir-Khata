import React from "react";
import { Check } from "lucide-react";
import { Features } from "tailwindcss";

function Prizing() {
  const plans = [
    {
      name: "Starter Plan",
      originalPrice: "15,000",
      discountedPrice: "12,000",
      staffLimit: "Upto 40 Staff",
    },
    {
      name: "Growth Plan",
      originalPrice: "27,500",
      discountedPrice: "22,000",
      staffLimit: "Upto 100 Staff",
    },
    {
      name: "Plus (+) Plan",
      originalPrice: "37,500",
      discountedPrice: "30,000",
      staffLimit: "Upto 250 Staff",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            <span className="text-green-600">Affordable</span> Pricing Options
          </h2>
          <p className="mt-2 text-gray-600">
            Choose the perfect plan for your organization's size and
            requirements.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center"
            >
              <h3 className="text-lg font-semibold text-green-600">
                {plan.name}
              </h3>
              <div className="mt-2 text-red-500 line-through text-sm">
                Rs.{plan.originalPrice}
              </div>
              <div className="text-2xl font-bold text-gray-900">
                Rs. {plan.discountedPrice}
                <span className="text-base">/Year</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{plan.staffLimit}</p>
              <div className="mt-4 bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full inline-block">
                Save 20%!
              </div>
              <ul className="mt-4 text-gray-700 text-sm space-y-2">
                <li className="flex gap-3 ">
                  <Check size={16} className="text-green-600" />
                  Employee Record Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Attendance
                  Tracking
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Payroll
                  Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Payslip
                  Generation
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Bank-ready
                  salary sheet
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Leave
                  Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Tax Reporting{" "}
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Payment
                  Addition/Deduction
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Secure Data
                  Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Biometrics
                  Integration or Mobile App
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Employee Mobile
                  App Support
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Shift
                  Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Admin Mobile
                  App Support(comming soon)
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Multi-Branch
                  Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" />{" "}
                  Multi-organization Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Employee
                  Dashboard
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Grievance
                  Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Supervisor
                  Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Claim
                  Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Remainder
                  Management
                </li>
                <li className="flex gap-3">
                  <Check size={16} className="text-green-600" /> Contract
                  Management(comming soon)
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Prizing;
