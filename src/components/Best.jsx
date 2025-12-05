import React from 'react'
import care from '../assets/images/Untitled Project (2).jpg'

import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import bg1 from '../assets/images/bg1-removebg-preview.png'
import foo1 from '../assets/images/foo1.png'
import best from '../assets/images/best.png'
// import combos from '../assets/images/combos.jpg'
// import combos1 from '../assets/images/combos1.jpg'
// import combos2 from '../assets/images/combos2.png'
// import combos3 from '../assets/images/combos3.png'
// import combos4 from '../assets/images/combos4.png'
// import combos5 from '../assets/images/combos5.png'
import combos6 from '../assets/images/combos6.png'
// import combos7 from '../assets/images/combos7.png'
import { useCart } from "./CartContext";
import sunscreen from '../assets/images/sunscreen.jpg'
import oil2 from '../assets/images/oil2.png'
import perfume4 from '../assets/images/perfume4.jpg'
import shampoo1 from '../assets/images/shampoo1.png'
import mask3 from '../assets/images/mask3.png'
import serum7 from '../assets/images/serum7.jpg'
import lipstic40 from '../assets/images/lipstic40.jpg'
import foundation15 from '../assets/images/foundation15.jpg'
import toast from "react-hot-toast";




const Best = () => {
   const { addToCart } = useCart();
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
    <div >
        <img src={best} alt="" className="w-full h-auto" />
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
          src={sunscreen}
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
            Daily Sunscreen Cream	
        </h3>

        <p className="mt-1 text-sm text-gray-500">protects from sun</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹545</span>
          <span className="text-sm text-gray-400 line-through">₹650</span>
          <span className="text-sm font-medium text-green-600">(20% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
    <button
  className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
  onClick={() => {
    addToCart({
      id: 36,
      name: "Daily Sunscreen Cream",
      price: 545,
      image: sunscreen,
      quantity: 1
    });

    toast.success("Item added to cart!", {
  style: {
    background: "linear-gradient(135deg, #d9e9f3ff, #f8e1f3ff) " ,
    color: "#000",
    fontWeight: "400",
    minWidth: "300px",   
    padding: "12px 16px",
    borderRadius: "8px",
  },
});

  }}
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
          src={oil2}
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
        Argan oil
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces dandruff</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹399</span>
          {/* <span className="text-sm text-gray-400 line-through">₹2200</span> */}
          {/* <span className="text-sm font-medium text-green-600">(50% OFF)</span> */}
        </div>
      </div>

      {/* full-width CTA with square edges */}
   <button
  className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
  onClick={() => {
    addToCart({
      id: 37,
      name: "Argan Oil",
      price: 372,
      image: oil2,
      quantity: 1
    });

    toast.success("Item added to cart!", {
  style: {
    background: "linear-gradient(135deg, #d9e9f3ff, #f8e1f3ff) " ,
    color: "#000",
    fontWeight: "400",
    minWidth: "300px",   
    padding: "12px 16px",
    borderRadius: "8px",
  },
});

  }}
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
          src={perfume4}
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
        Luvierra Rose petal perfume
        </h3>

        <p className="mt-1 text-sm text-gray-500">A romantic Long-Lasting Fragrance</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹999</span>
          {/* <span className="text-sm text-gray-400 line-through">₹1599</span> */}
          {/* <span className="text-sm font-medium text-green-600">(38% OFF)</span> */}
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
  className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
  onClick={() => {
    addToCart({
      id: 37,
      name: "Luvierra Rose petal Perfume",
      price: 455,
      image: perfume4,
      quantity: 1
    });

    toast.success("Item added to cart!", {
  style: {
    background: "linear-gradient(135deg, #d9e9f3ff, #f8e1f3ff) " ,
    color: "#000",
    fontWeight: "400",
    minWidth: "300px",   
    padding: "12px 16px",
    borderRadius: "8px",
  },
});

  }}
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
          src={shampoo1}
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
           Sulphate Free shampoo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹445</span>
          {/* <span className="text-sm text-gray-400 line-through">₹1950</span> */}
          {/* <span className="text-sm font-medium text-green-600">(18% OFF)</span> */}
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
  className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
  onClick={() => {
    addToCart({
      id: 38,
      name: "Sulphate Free Shampoo",
      price: 455,
      image: shampoo1,
      quantity: 1
    });

    toast.success("Item added to cart!", {
  style: {
    background: "linear-gradient(135deg, #d9e9f3ff, #f8e1f3ff) " ,
    color: "#000",
    fontWeight: "400",
    minWidth: "300px",   
    padding: "12px 16px",
    borderRadius: "8px",
  },
});

  }}
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
          src={mask3}
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
         CalmCrown Anti-Dandruff Hair Mask
        </h3>

        <p className="mt-1 text-sm text-gray-500">Soothing care for your scalp and hair</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹499</span>
          <span className="text-sm text-gray-400 line-through">₹849</span>
          <span className="text-sm font-medium text-green-600">(41% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
  className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
  onClick={() => {
    addToCart({
      id: 39,
      name: "CalmCrown Anti-Dandruff Hair Mask",
      price: 499,
      image: mask3,
      quantity: 1
    });

    toast.success("Item added to cart!", {
  style: {
    background: "linear-gradient(135deg, #d9e9f3ff, #f8e1f3ff) " ,
    color: "#000",
    fontWeight: "400",
    minWidth: "300px",   
    padding: "12px 16px",
    borderRadius: "8px",
  },
});

  }}
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
          src={serum7}
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
            Vitamin C serum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Radiance glow boost</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹545</span>
          {/* <span className="text-sm text-gray-400 line-through">₹1499</span> */}
           {/* <span className="text-sm font-medium text-green-600">(43% OFF)</span> */}
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
  className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
  onClick={() => {
    addToCart({
      id: 40,
      name: "Vitamin C Serum",
      price: 545,
      image: serum7,
      quantity: 1
    });

    toast.success("Item added to cart!", {
  style: {
    background: "linear-gradient(135deg, #d9e9f3ff, #f8e1f3ff) " ,
    color: "#000",
    fontWeight: "400",
    minWidth: "300px",   
    padding: "12px 16px",
    borderRadius: "8px",
  },
});

  }}
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
          src={lipstic40}
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
         Luvierra volvet matte lipstick
        </h3>

        <p className="mt-1 text-sm text-gray-500">A smooth lipstick that gives a soft matte look</p>
        <p className="text-xs text-gray-400 mt-0.5">3.5g</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹299</span>
          <span className="text-sm text-gray-400 line-through">₹399</span>
          <span className="text-sm font-medium text-green-600">(100% OFF)</span>
         
        </div>
      </div>

      {/* full-width CTA with square edges */}
   <button
  className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
  onClick={() => {
    addToCart({
      id: 41,
      name: "Luvierra Volvet Matte Lipstick",
      price: 299,
      image: lipstic40,
      quantity: 1
    });

    toast.success("Item added to cart!", {
  style: {
    background: "linear-gradient(135deg, #d9e9f3ff, #f8e1f3ff) " ,
    color: "#000",
    fontWeight: "400",
    minWidth: "300px",   
    padding: "12px 16px",
    borderRadius: "8px",
  },
});

  }}
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
          src={foundation15}
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
         Luvierra natural glow foundation
        </h3>

        <p className="mt-1 text-sm text-gray-500">A foundation that gives a smooth glowing finish</p>
        <p className="text-xs text-gray-400 mt-0.5">30ml</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹429</span>
          <span className="text-sm text-gray-400 line-through">₹549</span>
          <span className="text-sm font-medium text-green-600">(120% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
    <button
  className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
  onClick={() => {
    addToCart({
      id: 42,
      name: "Luvierra natural glow foundation",
      price: 429,
      image: foundation15,
      quantity: 1
    });

    toast.success("Item added to cart!", {
  style: {
    background: "linear-gradient(135deg, #d9e9f3ff, #f8e1f3ff) " ,
    color: "#000",
    fontWeight: "400",
    minWidth: "300px",   
    padding: "12px 16px",
    borderRadius: "8px",
  },
});

  }}
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

export default Best