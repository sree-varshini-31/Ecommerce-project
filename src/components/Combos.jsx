import React from 'react'
import care from '../assets/images/Untitled Project (2).jpg'
import combopage from '../assets/images/combopage.jpg'
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import bg1 from '../assets/images/bg1-removebg-preview.png'
import foo1 from '../assets/images/foo1.png'
import combos from '../assets/images/combos.jpg'
import combos1 from '../assets/images/combos1.jpg'
import combos2 from '../assets/images/combos2.png'
import combos3 from '../assets/images/combos3.png'
import combos4 from '../assets/images/combos4.png'
import combos5 from '../assets/images/combos5.png'
import combos6 from '../assets/images/combos6.png'
import combos7 from '../assets/images/combos7.png'



const Hair = () => {
  const footerLinks = [
    {
      title: 'COMPANY',
      links: [
        { name: 'Our Story' },
        { name: 'Sustainability' },
        { name: 'Find a Store' },
      ],
    },
    {
      title: 'PRODUCTS',
      links: [
        { name: 'Shampoos & Cleansers' },
        { name: 'Conditioners & Masks' },
        { name: 'Treatments & Oils' },
        { name: 'New Arrivals' },
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        { name: 'Help Center & FAQ' },
        { name: 'Shipping & Returns' },
        { name: 'Account Login' },
        { name: 'Contact Us' },
      ],
    },
  ];

  return (
    <div>
        <img src={combopage} alt="" className="w-full h-auto"/>
        <br />
        {/* 1st parent product card */}
    <section className="flex flex-row flex-wrap items-start justify-evenly gap-x-4 gap-y-6">
    <div className="max-w-sm w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ribbon */}
      <div className="absolute m-3">
        <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
          FLAT30%OFF
        </span>
      </div>

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={combos}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.9★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
       

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          GlowEssence Lip Velvet Lipstick Vitamin Serum Brightening Moisturizer Beauty Products (Combos)
        </h3>

        <p className="mt-1 text-sm text-gray-500">give soft, smooth lips and naturally glowing skin</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1100</span>
          <span className="text-sm text-gray-400 line-through">₹1599</span>
          <span className="text-sm font-medium text-green-600">(31% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => console.log("add-to-cart", "luvierra-combo")}
      >
        Add to cart
      </button>
    </div>
    <div className="max-w-sm w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ribbon */}
      <div className="absolute m-3">
        <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
          FLAT30%OFF
        </span>
      </div>

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={combos1}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.9★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Ayura Radiant Hair Shine Serum Vitamin C Face Serum Skin Glow Cream Beauty Products (Combos)
        </h3>

        <p className="mt-1 text-sm text-gray-500">Shiny hair and bright, hydrated skin</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1120</span>
          <span className="text-sm text-gray-400 line-through">₹1800</span>
          <span className="text-sm font-medium text-green-600">(38% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => console.log("add-to-cart", "luvierra-combo")}
      >
        Add to cart
      </button>
    </div>
    <div className="max-w-sm w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ribbon */}
      <div className="absolute m-3">
        <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
          FLAT30%OFF
        </span>
      </div>

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={combos2}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.9★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        

        <h3 className="mt-1 text-base font-semibold text-gray-900">
        Rosemary Anti-Hairfall Shampoo, Anti-Hairfall Conditioner, and Anti-Hairfall Hair Mask (Combos)
        </h3>

        <p className="mt-1 text-sm text-gray-500">Stimulates hair growth ,Reduces hair fall</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹800</span>
          <span className="text-sm text-gray-400 line-through">₹1200</span>
          <span className="text-sm font-medium text-green-600">(33% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => console.log("add-to-cart", "luvierra-combo")}
      >
        Add to cart
      </button>
    </div>

    <div className="max-w-sm w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ribbon */}
      <div className="absolute m-3">
        <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
          FLAT30%OFF
        </span>
      </div>

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={combos7}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.9★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        

        <h3 className="mt-1 text-base font-semibold text-gray-900">
        BotaniGlow Green Tea Antioxidant Serum Mask Moisturizer Beauty Product (Combos)
        </h3>

        <p className="mt-1 text-sm text-gray-500">Anti-ageing / Wrinkle defence</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹900</span>
          <span className="text-sm text-gray-400 line-through">₹1899</span>
          <span className="text-sm font-medium text-green-600">(47% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => console.log("add-to-cart", "luvierra-combo")}
      >
        Add to cart
      </button>
    </div>

    <div className="max-w-sm w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ribbon */}
      <div className="absolute m-3">
        <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
          FLAT30%OFF
        </span>
      </div>

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={combos3}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.9★
        </div>
      </div>

      {/* body */}
      <div className="p-4">


        <h3 className="mt-1 text-base font-semibold text-gray-900">
        Tea Tree & Mint Shampoo Conditioner & Hair Mask (Combos)
        </h3>

        <p className="mt-1 text-sm text-gray-500">Strengthens hair roots</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹875</span>
          <span className="text-sm text-gray-400 line-through">₹1370</span>
          <span className="text-sm font-medium text-green-600">(36% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => console.log("add-to-cart", "luvierra-combo")}
      >
        Add to cart
      </button>
    </div>

    <div className="max-w-sm w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ribbon */}
      <div className="absolute m-3">
        <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
          FLAT30%OFF
        </span>
      </div>

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={combos5}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.8★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          VitaGlow Vitamin C Serum Brightening gel & Moisturizer(Combos)
        </h3>

        <p className="mt-1 text-sm text-gray-500">Antioxidant Protection</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹650</span>
          <span className="text-sm text-gray-400 line-through">1399</span>
           <span className="text-sm font-medium text-green-600">(53% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => console.log("add-to-cart", "luvierra-combo")}
      >
        Add to cart
      </button>
    </div>

    <div className="max-w-sm w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ribbon */}
      <div className="absolute m-3">
        <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
          FLAT30%OFF
        </span>
      </div>

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={combos4}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.4★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
       

        <h3 className="mt-1 text-base font-semibold text-gray-900">
        SilkKeratin Smooth Shampoo Conditioner & Hair Mask (Combos)
        </h3>

        <p className="mt-1 text-sm text-gray-500">Strengthens & Repairs Hair</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹800</span>
          <span className="text-sm text-gray-400 line-through">₹1049</span>
          <span className="text-sm font-medium text-green-600">(23% OFF)</span>
         
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => console.log("add-to-cart", "luvierra-combo")}
      >
        Add to cart
      </button>
    </div>

    <div className="max-w-sm w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* ribbon */}
      <div className="absolute m-3">
        <span className="rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white">
          FLAT30%OFF
        </span>
      </div>

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={combos6}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          5.0★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        

        <h3 className="mt-1 text-base font-semibold text-gray-900">
         Rose & Hydratien Creamy Fash wash Hydratien Serum & Nature Glow Vitamin E Moisturizer
        </h3>

        <p className="mt-1 text-sm text-gray-500">Deep Hydration & Softness</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1099</span>
          <span className="text-sm text-gray-400 line-through">₹1599</span>
          <span className="text-sm font-medium text-green-600">(31% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        onClick={() => console.log("add-to-cart", "luvierra-combo")}
      >
        Add to cart
      </button>
    </div>

   


    

    
    
   
    <div>
      <img src={foo1} alt="" />
    </div>
    
    </section>

    


  {/* footer */}
   
        <footer className= "bg-gradient-to-tr from-blue-50 to-pink-50 text-gray-600 border-t border-gray-500">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            
            {/* Main Content: Logo, Links, Social Icons */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
              
              {/* Logo Section */}
              <div className="col-span-2">
                <img 
                  src={bg1} // *IMPORTANT: Update this path*
                  alt="Luvierra Hair Care Logo"
                  className="h-12 w-auto"
                />
              </div>
    
              {/* Link Columns */}
              {footerLinks.map((section) => (
                <div key={section.title} className="col-span-1">
                  <h3 className="text-sm font-bold tracking-wider mb-4 uppercase text-green-800">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        {/* Link Structure maintained for easy addition of 'href' later */}
                        <span 
                          className="text-sm hover:text-green-600 transition duration-150 ease-in-out cursor-pointer"
                        >
                          {link.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
    
              {/* Social Icons Section (Spotify-like circles) */}
              <div className="col-span-2 md:col-span-1 flex justify-end space-x-4">
                {/* Social Icons also have placeholder spans instead of <a> tags */}
                <span
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition duration-150 ease-in-out cursor-pointer"
                >
                  <FaInstagram className="text-xl" />
                </span>
                <span
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition duration-150 ease-in-out cursor-pointer"
                >
                  <FaFacebookF className="text-xl" />
                </span>
                <span
                  aria-label="Pinterest"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-200 text-green-800 hover:bg-green-300 transition duration-150 ease-in-out cursor-pointer"
                >
                  <FaPinterestP className="text-xl" />
                </span>
              </div>
            </div>
    
            <hr className="my-8 border-green-200" />
    
            {/* Bottom Bar: Legal Links and Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
              
              {/* Legal Links */}
              <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
                <span className="hover:text-green-600 cursor-pointer">Legal</span>
                <span className="hover:text-green-600 cursor-pointer">Privacy Policy</span>
                <span className="hover:text-green-600 cursor-pointer">Cookies</span>
                <span className="hover:text-green-600 cursor-pointer">Accessibility</span>
              </div>
    
              {/* Copyright */}
              <div className="flex space-x-4 items-center">
                <span>© {new Date().getFullYear()} Luvierra. All rights reserved.</span>
                <span className="ml-4 flex items-center text-green-700 font-medium">
                    <span role="img" aria-label="globe">🌎</span>
                    <span className="ml-1">USA (English)</span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      
  

    
  


    </div>
  )
}

export default Hair