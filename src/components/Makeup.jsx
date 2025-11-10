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


import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import bg1 from '../assets/images/bg1-removebg-preview.png'
import foo1 from '../assets/images/foo1.png'



const Makeup = () => {
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹345</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹399</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹429</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹358</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹546</span>
          <span className="text-sm text-gray-400 line-through">₹650</span>
          
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹344</span>
          <span className="text-sm text-gray-400 line-through">₹650</span>
         
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹702</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹640</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹345</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹544</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹592</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹612</span>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
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
          Rosemary Anti‑Hairfall Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces Hairfall</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Units</p>

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