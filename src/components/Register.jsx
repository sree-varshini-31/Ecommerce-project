import React from 'react';
import luv2 from '../assets/luv2.jpg'

export default function LuvierraLogin() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-teal-100 overflow-hidden">
      {/* Decorative skincare/makeup images in the corners (use URLs or local assets as appropriate) */}
      
      {/* Modal */}
      <div className="relative z-10 rounded-2xl bg-white bg-opacity-95 p-10 shadow-2xl w-[370px] flex flex-col items-center">
        {/* Visibly larger, more detailed SVG logo */}
      <img src={luv2} alt="" style={{height:"200px"}} />
        
        <h2 className="text-lg  font-bold text-gray-800 mb-1 text-center font-sans" >Welcome to Luvierra🌸</h2>
        <p className="text-sm text-gray-500 mb-5 text-center">Get exciting deals :)</p>
        <form className="flex flex-col gap-4 w-full">
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <span className="text-lg font-semibold text-gray-700 pr-2">+91</span>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Phone number"
              className="outline-none bg-transparent flex-1 text-base"
              required
            />
          </div>
          <label className="flex items-center text-xs text-gray-500">
            <input type="checkbox" className="mr-2 accent-pink-500" />
            Notify me for any updates & offers
          </label>
          <button
            type="submit"
            className="w-full mt-3 py-2 rounded-lg text-white text-base font-semibold bg-gradient-to-r from-pink-500 to-teal-400 hover:from-pink-600 hover:to-teal-500 transition"
          >
            Get OTP
          </button>
        </form>
      </div>
    </div>
  );
}


