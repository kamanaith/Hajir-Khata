import React from 'react'
import Mockup from '../assets/images/Features/mockup.png'
import { BookUser, NotebookPen , Receipt , ReceiptText, UserCheck, ClipboardMinus , CreditCard , Fingerprint , TabletSmartphone } from 'lucide';

const features = [
    { title: "Employee Record Management",
     description: "Store and manage employee records easily.",
     icon: <BookUser /> },
    { title: "Attendance Tracking", 
    description: "Track attendance in real-time with ease.",
    icon: <NotebookPen /> },
    { title: "Payroll Management",
         description: "Simplify payroll for timely salary disbursement.",
          icon:<NotebookPen /> },
    { title: "Payslip Generation",
         description: "Generate payslips with a single click.",
          icon: <Receipt /> },
    { title: "Bank-Ready Salary Sheet",
         description: "Create bank-ready salary sheets effortlessly.",
          icon: <ReceiptText /> },
    { title: "Leave Management",
         description: "Manage employee leave requests seamlessly.",
          icon: <UserCheck /> },
    { title: "Tax Reporting",
         description: "Generate accurate tax reports for your business.",
          icon: <ClipboardMinus /> },
    { title: "Payment Addition/Deduction",
         description: "Track and manage payments and deductions.",
          icon: <CreditCard /> },
    { title: "Biometrics Integration",
         description: "Integrate biometric systems for enhanced security.",
          icon: <Fingerprint /> },
    { title: "Mobile App Support",
         description: "Manage everything on the go with our mobile app.",
          icon: <TabletSmartphone /> }
  ];
  

function Features() {
  return (
    <>
    <div className="min-h-screen bg-white px-6 py-12 flex flex-col items-center">
      <h2 className="text-green-600 text-xl font-semibold">Features</h2>
      <h1 className="text-3xl font-bold text-center text-gray-900 mt-2">
        Efficient Solutions for Streamlined Business Management
      </h1>
      <p className="text-gray-600 max-w-2xl text-center mt-4">
        Our platform offers a range of features to simplify attendance tracking, payroll management, and more...
      </p>

      <div className="flex flex-col lg:flex-row gap-10 mt-10 items-center">
        <div className="w-full lg:w-1/2">
          <img src={Mockup} alt="Dashboard" className="rounded-lg shadow-lg" />
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow flex items-center gap-4">
              <div className="text-3xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Features