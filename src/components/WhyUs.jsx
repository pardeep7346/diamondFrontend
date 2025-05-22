import React from 'react'

const WhyUs = () => {
    const whyUsData = [
        {
            title: "Expert Faculty",
            img:"./Bank.gif",
            description: "Learn from industry experts with over 10 years of experience in IBPS, SBI, and RBI exam preparation.",
        },
        {
            title: "Comprehensive Study Material",
            img:"./Book.gif",
            description: "Access a wide range of study materials, including books, online resources, and practice papers.",
        },
        {
            title: "Mock Tests",
            img:"./test.gif",
            description: "Regular mock tests to assess your preparation level and improve your performance.",
        },
        {
            title: "Personalized Guidance",
            img:"guidence.gif",
            description: "Get personalized guidance and mentorship from experienced faculty members.",
        },
    ];
  return (
    <div className="py-10 px-4 md:px-10">
      <h1 className='text-3xl md:text-6xl font-mono font-black text-center border-t-2 pt-5 mb-8'>
        Why Us?
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto'>
        {whyUsData.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-3 border-rose-400 border-2 
              p-6 rounded-lg hover:scale-105 transition-transform duration-300
              bg-zinc-900/50 backdrop-blur-sm"
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-16 h-16 md:w-20 md:h-20 mb-4 mx-auto" 
            />
            <h2 className="text-xl md:text-2xl font-bold text-center">
              {item.title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyUs