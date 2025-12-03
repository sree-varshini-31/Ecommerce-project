import React from 'react'
import skin1 from "../assets/Imagess/skin1.png"
import skin2 from "../assets/Imagess/skin2.png"
import skin3 from "../assets/Imagess/skin3.png"
import skin4 from "../assets/Imagess/skin4.png"
import skin5 from "../assets/Imagess/skin5.png"
import skin6 from "../assets/Imagess/skin6.png"
import skin7 from "../assets/Imagess/skin7.png"
import skin8 from "../assets/Imagess/skin8.png"
import skin9 from "../assets/Imagess/skin9.png"
import skin10 from "../assets/Imagess/skin10.png"
import skin11 from "../assets/Imagess/skin11.png"
import skin12 from "../assets/Imagess/skin12.png"
import skin13 from "../assets/Imagess/skin13.png"
import skin14 from "../assets/Imagess/skin14.png"
import skin15 from "../assets/Imagess/skin15.png"
import skin from  "../assets/Imagess/skin.png"
import bg1 from "../assets/images/bg1-removebg-preview.png"
import foo1 from "../assets/images/foo1.png"
import { FaInstagram,  FaFacebookF, FaPinterestP } from "react-icons/fa";
import { useCart } from "./CartContext";


const Hair = () => {
  const { addToCart } = useCart();
  const footerLinks = [
  {
    title: "Products",
    links: [{ name: "Face Care" }, { name: "Body Care" }, { name: "Hair Care" }, { name: "Accessories" }]
  },
  {
    title: "About",
    links: [{ name: "Our Story" }, { name: "Sustainability" }, { name: "Ingredients" }]
  },
  {
    title: "Customer Care",
    links: [
      { name: "Shipping" },
      { name: "Returns" },
      { name: "FAQs" },
      { name: "Contact Us" }
    ]
  },
  {
    title: "Community",
    links: [{ name: "Blog" }, { name: "Events" }, { name: "Reviews" }]
  }
];

  return (
    <div>
         <img src={skin} alt="" /> 
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

      {/* image  1*/}
      <div className="relative bg-gray-50">
        <img
          src={skin1}
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
         Daily Moisturizer
        </h3>

        <p className="mt-1 text-sm text-gray-500">Hydrate skin</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹355</span>
      
          <span className="text-sm font-medium text-green-600">(30% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
        onClick={addToCart}
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

      {/* image 2*/}
      <div className="relative bg-gray-50">
        <img
          src={skin2}
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
        <p className="text-[11px] font-semibold text-emerald-600">Just In</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Papaya Sunscreen	
        </h3>

        <p className="mt-1 text-sm text-gray-500">Sun defense</p>
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
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
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

      {/* image 3*/}
      <div className="relative bg-gray-50">
        <img
          src={skin3}
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
        <p className="text-[11px] font-semibold text-emerald-600">New Trending</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Grape Face Toner	
        </h3>

        <p className="mt-1 text-sm text-gray-500">Minimize, refine pores</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹699</span>
          
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
        onClick={addToCart}
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

      {/* image 4*/}
      <div className="relative bg-gray-50">
        <img
          src={skin4}
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
        <p className="text-[11px] font-semibold text-emerald-600">New Stock</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Charcoal Detox Mask	
        </h3>

        <p className="mt-1 text-sm text-gray-500">Deep pore detox</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹429</span>
          <span className="text-sm text-gray-400 line-through">₹550</span>
          <span className="text-sm font-medium text-green-600">(10% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
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

      {/* image 5*/}
      <div className="relative bg-gray-50">
        <img
          src={skin5}
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
          Vitamin C Mask
        </h3>

        <p className="mt-1 text-sm text-gray-500">Brighten, even complexion</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹458</span>
          
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
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

      {/* image 6*/}
      <div className="relative bg-gray-50">
        <img
          src={skin6}
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
          Lavender Night Cream
        </h3>

        <p className="mt-1 text-sm text-gray-500">Soothes, calms skin</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹469</span>
          <span className="text-sm text-gray-400 line-through">₹550</span>
          
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
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

      {/* image 7*/}
      <div className="relative bg-gray-50">
        <img
          src={skin7}
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
       <p className="text-[11px] font-semibold text-emerald-600">Just In</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
         Vitamin C Serum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Radiance, glow boost</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹545</span>
       
         
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
        onClick={addToCart}
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

      {/* image 8*/}
      <div className="relative bg-gray-50">
        <img
          src={skin8}
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
        <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          24K Gold Serum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Brighten, firm skin</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹742</span>
          <span className="text-sm text-gray-400 line-through">₹850</span>
          <span className="text-sm font-medium text-green-600">(20% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
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

      {/* image 9*/}
      <div className="relative bg-gray-50">
        <img
          src={skin9}
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
        <p className="text-[11px] font-semibold text-emerald-600">Just In</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Strawberry Lip Balm
        </h3>

        <p className="mt-1 text-sm text-gray-500">Soft, supple lips</p>
        <p className="text-xs text-gray-400 mt-0.5">3 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹440</span>
          
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
        onClick={addToCart}
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

      {/* image 10 */}
      <div className="relative bg-gray-50">
        <img
          src={skin10}
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
        <p className="text-[11px] font-semibold text-emerald-600">Just In</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Daily Sunscreen Cream	
        </h3>

        <p className="mt-1 text-sm text-gray-500">Protects from sun</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹545</span>
          <span className="text-sm text-gray-400 line-through">₹650</span>
          <span className="text-sm font-medium text-green-600">(20% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
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

      {/* image 11*/}
      <div className="relative bg-gray-50">
        <img
          src={skin11}
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
        <p className="text-[11px] font-semibold text-emerald-600">New Trending</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Facial Essence Toner	
        </h3>

        <p className="mt-1 text-sm text-gray-500">Soothe, hydrate, replenish</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹745</span>
          <span className="text-sm text-gray-400 line-through">₹850</span>
          <span className="text-sm font-medium text-green-600">(30% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
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

      {/* image 12*/}
      <div className="relative bg-gray-50">
        <img
          src={skin12}
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
        <p className="text-[11px] font-semibold text-emerald-600">Just In</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Berry Night Cream
        </h3>

        <p className="mt-1 text-sm text-gray-500">Anti-aging, repairs skin</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹492</span>
          <span className="text-sm text-gray-400 line-through">₹650</span>
          <span className="text-sm font-medium text-green-600">(45% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
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

      {/* image 13*/}
      <div className="relative bg-gray-50">
        <img
          src={skin13}
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
        <p className="text-[11px] font-semibold text-emerald-600">Just In</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Anti-Acne Clay
        </h3>

        <p className="mt-1 text-sm text-gray-500">Prevents acne breakouts</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹662</span>
        
        </div>
      </div>

      {/* full-width CTA with square edges */}
      <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
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

      {/* image 14*/}
      <div className="relative bg-gray-50">
        <img
          src={skin14}
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
          Lotus Face Toner
        </h3>

        <p className="mt-1 text-sm text-gray-500">Refresh, balance skin</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹512</span>
          <span className="text-sm text-gray-400 line-through">₹650</span>
          <span className="text-sm font-medium text-green-600">(30% OFF)</span>
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
        className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
        onClick={addToCart}
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

      {/* image 15*/}
      <div className="relative bg-gray-50">
        <img
          src={skin15}
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
         Papaya Facial Scrub
        </h3>

        <p className="mt-1 text-sm text-gray-500">Exfoliate, renew skin</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹778</span>
          
        </div>
      </div>

      {/* full-width CTA with square edges */}
     <button
      className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500"
      onClick={addToCart}
    >
      Add to cart
    </button>
    </div>
     <div>
          <img src={foo1} alt="" />
        </div>
    </section>




  {/* footer */}

    <footer className="bg-gradient-to-tr from-pink-50 via-pink-100 to-rose-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <img 
              src={bg1} 
              alt="Skincare Brand Logo" 
              className="h-12 w-auto " 
            />
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-sm font-bold tracking-wider mb-4 uppercase text-black-400">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
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

          <div className="col-span-2 md:col-span-1 flex justify-end space-x-4">
            <span
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black-200 text-black-800 hover:bg-green-300 transition duration-150 ease-in-out cursor-pointer"
            >
              <FaInstagram className="text-xl" />
            </span>
            <span
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black-200 text-black-800 hover:bg-green-300 transition duration-150 ease-in-out cursor-pointer"
            >
              <FaFacebookF className="text-xl" />
            </span>
            <span
              aria-label="Pinterest"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-black-200 text-black-800 hover:bg-green-300 transition duration-150 ease-in-out cursor-pointer"
            >
              <FaPinterestP className="text-xl" />
            </span>
          </div>
        </div>

        <hr className="my-8 border-green-200" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
            <span className="hover:text-green-600 cursor-pointer">Legal</span>
            <span className="hover:text-green-600 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-green-600 cursor-pointer">Cookies</span>
            <span className="hover:text-green-600 cursor-pointer">Accessibility</span>
          </div>

          <div className="flex space-x-4 items-center">
            <span>© {new Date().getFullYear()} Skincare Brand. All rights reserved.</span>
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