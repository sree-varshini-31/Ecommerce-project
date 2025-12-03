import React from 'react'
import frag from '../assets/Frag_1.jpg'
import perfume1 from '../assets/images/perfume1.jpg';
import perfume2 from '../assets/images/perfume2.jpg';
import perfume3 from '../assets/images/perfume3.jpg';
import perfume4 from '../assets/images/perfume4.jpg';
import perfume5 from '../assets/images/perfume5.jpg';
import perfume6 from '../assets/images/perfume6.jpg';
import perfume7 from '../assets/images/perfume7.jpg';
import perfume8 from '../assets/images/perfume8.jpg';
import perfume9 from '../assets/images/perfume9.jpg';
import perfume10 from '../assets/images/perfume10.jpg';
import perfume11 from '../assets/images/perfume11.jpg';
import perfume12 from '../assets/images/perfume12.jpg';
import perfume13 from '../assets/images/perfume13.jpg';
import perfume14 from '../assets/images/perfume14.jpg';
import perfume15 from '../assets/images/perfume15.jpg';

import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import bg1 from '../assets/images/bg1-removebg-preview.png'
import foo1 from '../assets/images/foo1.png'



const Fragrances = () => {
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
        <img src={frag} alt="" className="w-full h-auto"/>
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
          src={perfume1}
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
           Luvierra Pure Essence Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">An understated elegance perfect for a refined everyday</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1,299</span>
          <span className="text-sm text-gray-400 line-through">₹1732</span>
          <span className="text-sm font-medium text-green-600">(25% OFF)</span>
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
          src={perfume2}
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
            Luvierra Violet Haze Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">A mysterious sophisticated and alluring fragrance</p>
        <p className="text-xs text-gray-400 mt-0.5">1unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1,925</span>
          <span className="text-sm text-gray-400 line-through">₹2,750</span>
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
          src={perfume3}
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
           Luvierra Azure Dream infused with Blue Lotus Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">A serene fragrance that evokes peaceful dreams and boundless skies</p>
        <p className="text-xs text-gray-400 mt-0.5">1unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹399</span>
          <span className="text-sm text-gray-400 line-through">₹999</span>
          <span className="text-sm font-medium text-green-600">(60% OFF)</span>
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
        <p className="text-[11px] font-semibold text-emerald-600">PRICE DROP</p>

        <h3 className="mt-1 text-base font-semibold text-gray-900">
       Luvierra Rose Petal & Oud Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">A Romantic Long-Lasting Fragrance</p>
        <p className="text-xs text-gray-400 mt-0.5">1 unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹999</span>
          <span className="text-sm text-gray-400 line-through">₹1332</span>
          <span className="text-sm font-medium text-green-600">(25% OFF)</span>
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
          src={perfume5}
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
             Luvierra Golden Elixir Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">An opulent and long-lasting scent that leaves a sensual sweet trail</p>
        <p className="text-xs text-gray-400 mt-0.5">1unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1050</span>
          <span className="text-sm text-gray-400 line-through">₹1313</span>
          <span className="text-sm font-medium text-green-600">(20% OFF)</span>
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
          src={perfume6}
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
           Luvierra jasmine & Sandalwood EDP
        </h3>

        <p className="mt-1 text-sm text-gray-500">A Warm Elegant and Timeless Scent</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹499</span>
          {/* <span className="text-sm text-gray-400 line-through">₹650</span> */}
          
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
          src={perfume7}
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
            Luvierra Golden Charm Eau De perfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Captivating & Sophisticated</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹599</span>
          {/* <span className="text-sm text-gray-400 line-through">₹650</span> */}
         
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
          src={perfume8}
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
           Luvierra Sillage Bleu Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Fresh Aquatic & White Floral Blend</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹900</span>
          <span className="text-sm text-gray-400 line-through">₹1125</span>
          <span className="text-sm font-medium text-green-600">(20% OFF)</span>
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
          src={perfume9}
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
           Luvierra Ocean Breeze Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Refreshing Aquatic & Coastal Essence</p>
        <p className="text-xs text-gray-400 mt-0.5">1Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1,988</span>
          <span className="text-sm text-gray-400 line-through">₹2,650</span>
          <span className="text-sm font-medium text-green-600">(25% OFF)</span>
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
          src={perfume10}
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
           Luvierra Dreamy Blossom Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Soft Floral & Fruity Sweetness combo</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1,399</span>
          <span className="text-sm text-gray-400 line-through">₹1,999</span>
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
          src={perfume11}
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
           Luvierra Green Meadow Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Fresh Green & Wild Floral Essence combo</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1,715</span>
          <span className="text-sm text-gray-400 line-through">₹2,450</span>
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
          src={perfume12}
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
            Luvierra Sweet Rose Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Romantic Floral & Fruity Sweet combo</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1552</span>
          <span className="text-sm text-gray-400 line-through">₹1940</span>
          <span className="text-sm font-medium text-green-600">(20% OFF)</span>
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
          src={perfume13}
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
           Luvierra Fresh Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">Airy Citrus & Clean Linen Notes Combo</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1,285</span>
          <span className="text-sm text-gray-400 line-through">₹1,836</span>
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
          src={perfume14}
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
            Luvierra Botanical Dew Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">A Fresh subtle Scent reminiScent of morning gardens</p>
        <p className="text-xs text-gray-400 mt-0.5">1Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1,463</span>
          <span className="text-sm text-gray-400 line-through">₹1829</span>
          <span className="text-sm font-medium text-green-600">(20% OFF)</span>
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
          src={perfume15}
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
           Luvierra Bella Blossom Eau De parfum
        </h3>

        <p className="mt-1 text-sm text-gray-500">A charming fragrance that celebrates feminine grace</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹1,592</span>
          <span className="text-sm text-gray-400 line-through">₹2449</span>
          <span className="text-sm font-medium text-green-600">(35% OFF)</span>
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

export default Fragrances