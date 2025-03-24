import React, {useState} from 'react'
import { Plus,Minus, MoveRight,} from 'lucide-react'






const QnS = ({ qn,description}) => {

    const [isOpen,setIsOpen] = useState(false)


    const toggleButton = () => {
      setIsOpen(!isOpen);
    }

    return(
        <>


        <div className='bg-white text-gray-700 justify-between'>
           
<div className='flex flex-row justify-between'onClick={toggleButton} >
<h3 className="text-sm text-justify p-2 font-semibold  xl:text-lg xl:p-5">{qn}</h3>     
            
            <button onClick={toggleButton} className='text-gray-600' >
                {isOpen ? <Minus />:<Plus/>}
            </button>
            
</div>
            
           

            {isOpen && 
            <div className='text-gray-600 p-2 border-t-2
            text-justify'>
                {description}
                </div>}
                </div>
        </>
    );
};

const Questionss = () => {
    const question = [
        {
            qn:"How does attendance management help streamline operations?",
            description: "With automated attendance tracking, you can reduce manual data entry errors, save time, and ensure accurate records, allowing you to focus on other business priorities.",
        },
        {
            qn:"Can payroll calculation be integrated with attendance management?",
            description: "Yes! Integrating payroll with attendance allows for automatic calculation of hours worked, overtime, and leave, making payroll processing faster and more accurate.",
        },
        {
            qn:"How does the system enhance employee satisfaction?",
            description: " Employees appreciate transparency. The system ensures that their attendance is accurately recorded, and they receive timely and correct payments, boosting morale and trust.",
        },
        {
            qn:"Is this solution affordable for small businesses?",
            description: "Absolutely! This solution is designed to be both cost-effective and scalable, ensuring that small businesses can enjoy the benefits without breaking the bank.",
        },
        {
            qn:"Can the system handle complex payroll structures?",
            description: "Yes, the system can manage various payroll components like bonuses, deductions, and taxes, ensuring that even complex payroll structures are handled with ease.",
        },
    ];





  return (
<>
<div className=' p-4 gap-2 lg:flex-col lg:p-10 items-center '>
<div className='lg:w-full xl:text-3xl'>
    <h1 className='text-xl font-semibold text-center lg:text-2xl xl:text-4xl'>Frequently Asked Questions?</h1>
    <p className='text-center text-md m-[12px] text-gray-600  xl:text-xl'>Answered all frequently asked questions, Still confused? feel free to contact us.</p>
</div>
    <div className="flex flex-col p-6 gap-1  lg:flex-col lg:w-full lg:mx-10 lg:mr-10  ">
      {question.map((question, index) => (
        <QnS key={index} {...question} />
      ))}
    </div>
</div>
</>
    
  );
};
  export default  Questionss
