import React from 'react'
import makeupbanner from '../assets/images/makeup-banner.jpg';
import makeup1 from '../assets/images/makeup1.png';
import makeup2 from '../assets/images/makeup2.png';
import makeup3 from '../assets/images/makeup3.png';
import makeup4 from '../assets/images/makeup4.png';
import makeup5 from '../assets/images/makeup5.png';
import makeup6 from '../assets/images/makeup6.png';
import makeup7 from '../assets/images/makeup7.png';
import makeup8 from '../assets/images/makeup8.png';
import makeup9 from '../assets/images/makeup9.png';
import makeup10 from '../assets/images/makeup10.png';
import makeup11 from '../assets/images/makeup11.png';
import makeup12 from '../assets/images/makeup12.png';
import makeup13 from '../assets/images/makeup13.png';
import makeup14 from '../assets/images/makeup14.png';
import makeup15 from '../assets/images/makeup15.png';
import { useCart } from "./CartContext";

import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import bg1 from '../assets/images/bg1-removebg-preview.png'
import foo1 from '../assets/images/foo1.png'
import toast from "react-hot-toast";



const Makeup = () => {
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
    <div>
        <img src={makeupbanner} alt="" className="w-full h-auto"/>
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
          src={makeup1}
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
          Luvierra Radiant Glow Highlighter
        </h3>

        <p className="mt-1 text-sm text-gray-500">Gives a smooth and bright finish</p>
        <p className="text-xs text-gray-400 mt-0.5">8g</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹399</span>
          <span className="text-sm text-gray-400 line-through">₹499</span>
          <span className="text-sm font-medium text-green-600">(20% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
    <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 57,
          name: " Luvierra Radiant Glow Highlighter",
          price: 399,
          image: makeup1,
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
          src={makeup2}
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
         Luvierra Flawless Matte Compact Powder
        </h3>

        <p className="mt-1 text-sm text-gray-500">Gives a smooth flawless matte finish that controlls shine</p>
        <p className="text-xs text-gray-400 mt-0.5">9g</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹840</span>
          <span className="text-sm text-gray-400 line-through">₹1200</span>
          <span className="text-sm font-medium text-green-600">(30% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 58,
          name: " Luvierra Flawless Matte Compact Powder",
          price: 840,
          image: makeup2,
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
          src={makeup3}
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
            Luvierra Radiance  illuminating Moisturizer
        </h3>

        <p className="mt-1 text-sm text-gray-500">gives instant radiance witha soft illuminating glow</p>
        <p className="text-xs text-gray-400 mt-0.5">30ml</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹629</span>
          <span className="text-sm text-gray-400 line-through">₹899</span>
          <span className="text-sm font-medium text-green-600">(30% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
       <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 59,
          name: "Luvierra Radiance  illuminating Moisturizer",
          price: 629,
          image: makeup3,
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
          src={makeup4}
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
           Radient Dewy Finish setting spray
        </h3>

        <p className="mt-1 text-sm text-gray-500">A spray that makes keeps meckeup stay longer </p>
        <p className="text-xs text-gray-400 mt-0.5">100ml</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹429</span>
          <span className="text-sm text-gray-400 line-through">₹699</span>
          <span className="text-sm font-medium text-green-600">(38% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 60,
          name: "Radient Dewy Finish setting spray",
          price: 429,
          image: makeup4,
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
          src={makeup5}
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
         Luvierra matte liquid lipstick
        </h3>

        <p className="mt-1 text-sm text-gray-500">A liquid lipstic that gives a soft matte look</p>
        <p className="text-xs text-gray-400 mt-0.5">5ml</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹429</span>
          <span className="text-sm text-gray-400 line-through">₹699</span>
          <span className="text-sm font-medium text-green-600">(38% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
       <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 61,
          name: "Luvierra matte liquid lipstick",
          price: 429,
          image: makeup5,
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
          src={makeup6}
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
         Luvierra precision liquid Eyeliner
        </h3>

        <p className="mt-1 text-sm text-gray-500">A sharp-tip eyeliner that gives smooth lines</p>
        <p className="text-xs text-gray-400 mt-0.5">3ml</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹299</span>
          {/* <span className="text-sm text-gray-400 line-through">₹650</span> */}
          
        </div>
      </div>

      {/* full-width CTA with square edges */}
    <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 62,
          name: "Luvierra precision liquid Eyeliner",
          price: 299,
          image: makeup6,
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
          src={makeup7}
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
         Luvierra Volumizing Mascara
        </h3>

        <p className="mt-1 text-sm text-gray-500">A mascara that makes your ilashes look fuller</p>
        <p className="text-xs text-gray-400 mt-0.5">8ml</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹279</span>
          {/* <span className="text-sm text-gray-400 line-through">₹650</span> */}
         
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 63,
          name: "Luvierra Volumizing Mascara",
          price: 279,
          image: makeup7,
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
          src={makeup8}
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
         Luvierra volvet matte lipstick
        </h3>

        <p className="mt-1 text-sm text-gray-500"> A smooth lipstick that gives a soft matte look</p>
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
          id: 64,
          name: "Luvierra volvet matte lipstick",
          price: 299,
          image: makeup8,
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
          src={makeup9}
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
          Luvierra soft matte compact powder
        </h3>

        <p className="mt-1 text-sm text-gray-500">A compact powder that gives a smooth finish</p>
        <p className="text-xs text-gray-400 mt-0.5">12g</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹349</span>
          <span className="text-sm text-gray-400 line-through">₹449</span>
          <span className="text-sm font-medium text-green-600">(100% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 65,
          name: "Luvierra soft matte compact powder",
          price: 349,
          image: makeup9,
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
          src={makeup10}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.1★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Luvierra soft blur loose powder
        </h3>

        <p className="mt-1 text-sm text-gray-500">A loose powder that gives a smooth  finish</p>
        <p className="text-xs text-gray-400 mt-0.5">20g</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹379</span>
          <span className="text-sm text-gray-400 line-through">₹449</span>
          <span className="text-sm font-medium text-green-600">(120% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 66,
          name: "Luvierra soft blur loosepowder",
          price: 379,
          image: makeup10,
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
          src={makeup11}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.0★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
         Luvierra  Natural glow foundation
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
          id: 67,
          name: "Luvierra Natural glow foundation",
          price: 429,
          image: makeup11,
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
          src={makeup12}
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
         Luvierra liquid concealer
        </h3>

        <p className="mt-1 text-sm text-gray-500">A lightweight concealer for smooth natural coverage</p>
        <p className="text-xs text-gray-400 mt-0.5">15g</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹249</span>
          <span className="text-sm text-gray-400 line-through">₹349</span>
          <span className="text-sm font-medium text-green-600">(20% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 67,
          name: "Luvierra liquid concealer",
          price: 249,
          image: makeup12,
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
          src={makeup13}
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
          Luvierra Radiance glow serum
        </h3>

        <p className="mt-1 text-sm text-gray-500">A lightweight serum that gives a soft radiant glow</p>
        <p className="text-xs text-gray-400 mt-0.5">30ml</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹449</span>
          <span className="text-sm text-gray-400 line-through">₹699</span>
          <span className="text-sm font-medium text-green-600">(28% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 68,
          name: "Luvierra Radiance glow serum",
          price: 499,
          image: makeup13,
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
          src={makeup14}
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
         Luvierra smooth Glide lip crayon
        </h3>

        <p className="mt-1 text-sm text-gray-500">A soft lip crayon that gives smooth rich color</p>
        <p className="text-xs text-gray-400 mt-0.5">2.5g</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹199</span>
          <span className="text-sm text-gray-400 line-through">₹299</span>
          <span className="text-sm font-medium text-green-600">(33% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
      onClick={() => {
        addToCart({
          id: 69,
          name: "Luvierra smooth Glide lip crayon",
          price: 199,
          image: makeup14,
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
          src={makeup15}
          alt="Luvierra Sulfate‑Free Shampoo"
          className="h-64 w-full object-cover rounded-none"
          loading="lazy"
        />
        {/* rating */}
        <div className="absolute bottom-2 right-2 rounded-full bg-white/95 px-2 py-1 text-xs font-semibold shadow">
          4.6★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
         Luvierra velvet shine lip gloss
        </h3>

        <p className="mt-1 text-sm text-gray-500">A glossy tint that gives smooth shine and soft color</p>
        <p className="text-xs text-gray-400 mt-0.5">6g</p>

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
          id: 70,
          name: "Luvierra velvet shine lip gloss",
          price: 299,
          image: makeup15,
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

export default Makeup