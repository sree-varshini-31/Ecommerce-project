import React from 'react'
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import shampoo1 from "../assets/images/shampoo1.png";
import serum1 from "../assets/images/serum1.png";
import sunscreen from "../assets/images/sunscreen.jpg";
import mask1 from "../assets/images/mask1.png";
import perfume1 from "../assets/images/perfume1.jpg";
import combos1 from "../assets/images/combos1.jpg";
import bestsellers from "../assets/images/bestsellers.jpg";
import skinCare from "../assets/images/skinCare.jpg";
import hairCare from "../assets/images/hairCare.jpg";
import makeup from "../assets/images/makeup.jpg";
import combos from "../assets/images/combos.jpg";
import fragrances from "../assets/images/fragrances.jpg";
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import bg1 from '../assets/images/bg1-removebg-preview.png'
import foo1 from '../assets/images/foo1.png'
import { Link } from "react-router-dom";



const Home = () => {


  const items = [
    { title: "Bestsellers", img: bestsellers, path: "/bestsellers" },
    { title: "Hair Care", img: hairCare, path: "/haircare"},
    { title: "Skin Care", img: skinCare, path: "/skincare" },
    { title: "Makeup", img: makeup, path: "/makeup" },
    { title: "Combos", img: combos,path: "/kits-combos" },
    { title: "Fragrances", img: fragrances, path: "/fragrances" },
  
    
  ];

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

         <img src={home1} alt="" className="w-full h-auto" />
         <br /><br /><br />
          <section className="flex flex-row flex-wrap items-start justify-evenly gap-x-4 gap-y-6">
       
       {/* image1 */}
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
                 <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>
         
                 <h3 className="mt-1 text-base font-semibold text-gray-900">
                   Sulphate Free Shampoo
                 </h3>
         
                 <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
                 <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>
         
                 {/* price row */}
                 <div className="mt-2 flex items-baseline gap-2">
                   <span className="text-xl font-semibold text-gray-900">₹455</span>
                   <span className="text-sm text-gray-400 line-through">₹650</span>
                   <span className="text-sm font-medium text-green-600">(30% OFF)</span>
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
             
{/* image2 */}
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
                   src={serum1}
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
                 <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>
         
                 <h3 className="mt-1 text-base font-semibold text-gray-900">
                   Vitamin C Serum
                 </h3>
         
                 <p className="mt-1 text-sm text-gray-500">Brightens Skin</p>
                 <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>
         
                 {/* price row */}
                 <div className="mt-2 flex items-baseline gap-2">
                   <span className="text-xl font-semibold text-gray-900">₹355</span>
                   <span className="text-sm text-gray-400 line-through">₹550</span>
                   <span className="text-sm font-medium text-green-600">(30% OFF)</span>
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

             {/* image3 */}
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
                   4.3★
                 </div>
               </div>
         
               {/* body */}
               <div className="p-4">
                 <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>
         
                 <h3 className="mt-1 text-base font-semibold text-gray-900">
                   Protective Daily SunScreen
                 </h3>
         
                 <p className="mt-1 text-sm text-gray-500">Protection from sun</p>
                 <p className="text-xs text-gray-400 mt-0.5">2 Units</p>
         
                 {/* price row */}
                 <div className="mt-2 flex items-baseline gap-2">
                   <span className="text-xl font-semibold text-gray-900">₹399</span>
                   <span className="text-sm text-gray-400 line-through">₹700</span>
                   <span className="text-sm font-medium text-green-600">(30% OFF)</span>
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
                     </section>


                     <br /><br />
{/* shop by categories */}


    {/* <div className="text-center py-10 bg-white">
      <h2 className="text-3xl font-bold mb-8">Shop By Categories</h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="w-40 md:w-48 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer"
          >
            <img src={item.img} alt={item.title} className="w-full h-44 object-cover" />
            <p className="py-2 font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div> */}

    <div className="text-center py-10 bg-white">
  <h2 className="text-3xl font-bold mb-8">Shop By Categories</h2>

  <div className="flex flex-wrap justify-center gap-6 px-4">
    {items.map((item, i) => (
      <Link key={i} to={item.path}>
        <div className="w-40 md:w-48 bg-white rounded-xl shadow hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer">
          <img src={item.img} alt={item.title} className="w-full h-44 object-cover" />
          <p className="py-2 font-semibold">{item.title}</p>
        </div>
      </Link>
    ))}
  </div>
</div>

                     
         <br /><br /><br />
          <img src={home2} alt="" className="w-full h-auto"/>
          <br /><br /><br />


          {/* section2 */}



          <section2 className="flex flex-row flex-wrap items-start justify-evenly gap-x-4 gap-y-6">
       
       {/* image1 */}
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
                   src={mask1}
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
                 <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>
         
                 <h3 className="mt-1 text-base font-semibold text-gray-900">
                   Hair Growth Mask
                 </h3>
         
                 <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
                 <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>
         
                 {/* price row */}
                 <div className="mt-2 flex items-baseline gap-2">
                   <span className="text-xl font-semibold text-gray-900">₹255</span>
                   <span className="text-sm text-gray-400 line-through">₹450</span>
                   <span className="text-sm font-medium text-green-600">(30% OFF)</span>
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
             
{/* image2 */}
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
                   src={perfume1}
                   alt="Luvierra Sulfate‑Free Shampoo"
                   className="h-64 w-full object-cover rounded-none"
                   loading="lazy"
                 />
                 {/* rating */}
                 <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
                   4.7★
                 </div>
               </div>
         
               {/* body */}
               <div className="p-4">
                 <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>
         
                 <h3 className="mt-1 text-base font-semibold text-gray-900">
                   Botanical Radiance
                 </h3>
         
                 <p className="mt-1 text-sm text-gray-500">Signature scent</p>
                 <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>
         
                 {/* price row */}
                 <div className="mt-2 flex items-baseline gap-2">
                   <span className="text-xl font-semibold text-gray-900">₹655</span>
                   <span className="text-sm text-gray-400 line-through">₹850</span>
                   <span className="text-sm font-medium text-green-600">(30% OFF)</span>
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

             {/* image3 */}
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
                   4.5★
                 </div>
               </div>
         
               {/* body */}
               <div className="p-4">
                 <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>
         
                 <h3 className="mt-1 text-base font-semibold text-gray-900">
                   Elegant & Evocative Combo
                 </h3>
         
                 <p className="mt-1 text-sm text-gray-500">protects skin & hair</p>
                 <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>
         
                 {/* price row */}
                 <div className="mt-2 flex items-baseline gap-2">
                   <span className="text-xl font-semibold text-gray-900">₹1099</span>
                   <span className="text-sm text-gray-400 line-through">₹1350</span>
                   <span className="text-sm font-medium text-green-600">(30% OFF)</span>
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
                     </section2>


                     <br /><br />
                        <img src={home3} alt="" className="w-[800px] h-[500px] ml-100"/>

                        <br /><br />
<img src={foo1} alt="" />


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

export default Home

