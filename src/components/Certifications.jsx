import React from 'react'

const Certifications = () => {
  return (
    <div className='bg-white/10 py-4 rounded-4xl mx-4 md:mx-8 my-4'>
      <h1 className='text-3xl md:text-5xl font-black text-center bg-gradient-to-tr from-pink-500 via-red-500 to-blue-500 bg-clip-text text-transparent px-2'>
        "Accreditations & Achievements"
      </h1>
      
      <div className='flex flex-wrap md:flex-row justify-evenly items-center gap-6 md:gap-4 py-6 md:py-10 px-4'>
        <img 
          src="./forums/C1.png" 
          alt="Certification 1" 
          className='w-[40%] md:w-auto drop-shadow-xl drop-shadow-white'
        />
        <img 
          src="./forums/C2.png" 
          alt="Certification 2" 
          className='w-[40%] md:w-auto drop-shadow-xl drop-shadow-white'
        />
        <img 
          src="./forums/C3.png" 
          alt="Certification 3" 
          className='w-[40%] md:w-auto drop-shadow-xl drop-shadow-white'
        />
        <img 
          src="./forums/C4.png" 
          alt="Certification 4" 
          className='w-[40%] md:w-auto drop-shadow-xl drop-shadow-white'
        />
      </div>
    </div>
  )
}

export default Certifications