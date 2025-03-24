import React from 'react'
import { Fingerprint , ScanEyeIcon , ScrollText , DollarSign } from 'lucide-react';

const features = [
    {
      title: "Biometric Integration",
      description: "Seamlessly integrate biometric systems to ensure accurate and tamper-proof attendance tracking.",
      icon: <Fingerprint />,
    },
    {
      title: "Remote Attendance",
      description: "Allow employees to clock in from anywhere, ensuring flexibility without compromising on accuracy.",
      icon: <ScanEyeIcon />,
    },
    {
      title: "Payroll Generation",
      description: "Automatically calculate and generate payroll, taking into account attendance, overtime, and other variables.",
      icon: <ScrollText />,
    },
    {
      title: "Tax and Payment Reporting",
      description: "Generate detailed monthly and annual reports on employee taxes and payments, ensuring compliance and providing insights into compensation and deductions.",
      icon: <DollarSign />,
    },
  ];
function Salary() {
  return (
    <>
     <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-gray-900">
        A software solution that simplifies the complexity of salary calculations.
      </h1>
      <h2 className="text-2xl font-semibold text-green-600 mt-2">Hajir Khata</h2>
      <p className="text-gray-600 max-w-7xl mt-4">
      Hajir Khata is a comprehensive software solution designed to simplify payroll management for businesses of all sizes. Its primary goal is to help organizations effortlessly track daily employee attendance and manage payroll with ease. By automating payroll processes, Hajir Khata reduces the complexity and potential errors associated with manual calculations, allowing HR teams to focus on what truly matters—supporting their employees and growing the business. With a user-friendly interface, this innovative software streamlines operations and enhances productivity, making payroll management hassle-free and ensuring compliance with labor regulations. Experience the convenience of Hajir Khata and take the stress out of salary calculations today!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-green-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Salary