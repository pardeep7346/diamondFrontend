import React from 'react'

const Footer = () => {
  return (
    <div className=" py-4 border-t border-zinc-800">
    <p className="text-center text-gray-400 text-sm">
      © {new Date().getFullYear()} Diamond Coaching Center. Developed by{' '}
      <span className="text-orange-500 font-semibold">&lt;Pardeep Sharma/&gt;</span>
    </p>
  </div>
  )
}

export default Footer
