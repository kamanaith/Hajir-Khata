import React from 'react'
import retail from '../assets/images/Payroll/retail.png'
import manufacture from '../assets/images/Payroll/manufacture.png'
import hospitality from '../assets/images/Payroll/hospitality.png'
import hospital from '../assets/images/Payroll/hospital.png'
import government from '../assets/images/Payroll/government.png'
import estate from '../assets/images/Payroll/estate.png'
import education from '../assets/images/Payroll/education.png'
import corporate from '../assets/images/Payroll/corporate.png'
import consultancy from '../assets/images/Payroll/consultancy.png'
import automotive from '../assets/images/Payroll/automotive.png'

const Pays = ({img , name }) => {
    return (

        <>
                  <div className='w-full border-2 rounded-2xl border-gray-200 py-6'>
         <div className='mx-auto flex justify-center'> <img className=" h-20  w-20 " src={img} alt="Blog Cover" /></div>
          <h3 className="text-md text-center py-2 text-gray-700 mb-3">{name}</h3>
          </div>
        </>
    )
}

function Payroll() {
    const roll =[
        {
            img: retail ,
            name: 'Retail Industry',
        },
        {
            img: manufacture ,
            name: 'Manufacturing Industry',
        },
        {
            img: hospitality ,
            name: 'Hospitality Industry',
        },
        {
            img: hospital ,
            name: 'Health Industry',
        },
        {
            img: government ,
            name: 'Government',
        },
        {
            img: estate ,
            name: 'Real Estate',
        },
        {
            img: education ,
            name: 'Educational Industry',
        },
        {
            img: corporate ,
            name: 'Corporate Business',
        },
        {
            img: consultancy ,
            name: 'Business Consultancy',
        },
        {
            img: automotive ,
            name: 'Automotive Industry',
        },
    ]
  return (
    <>
    <div className='text-center'><h1 className='text-2xl px-10 font-bold md:text-3xl lg:text-5xl'> <span className='text-green-700 '>Hajir Khata</span> , The Trusted payroll and attendence solution for your business.</h1>
    <p className='px-10 py-5'>Steamless both payroll and attendance management with solutions tailored to your industry. </p></div>
    <div className="grid grid-cols-1 px-5 md:px-10 lg:px-20 md:grid-cols-3 lg:grid-cols-5 gap-3  justify-center   mb-5 lg:flex-row ">
      {roll.map((roll, index) => (
<Pays key={index} {...roll}/>
          
      ))}
    </div>
    
    </>
  )
}

export default Payroll