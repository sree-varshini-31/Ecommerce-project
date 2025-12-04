import React from 'react'
import care from '../assets/images/Untitled Project (2).jpg'
import shampoo1 from '../assets/images/shampoo1.png'
import shampoo2 from '../assets/images/shampoo2.png'
import shampoo3 from '../assets/images/shampoo3.png'
import shampoo4 from '../assets/images/shampoo4.png'
import shampoo5 from '../assets/images/shampoo5.png'
import oil1 from '../assets/images/oil1.png'
import oil2 from '../assets/images/oil2.png'
import oil3 from '../assets/images/oil3.png'
import oil4 from '../assets/images/oil4.png'
import oil5 from '../assets/images/oil5.png'
import serum from '../assets/images/serum.png'
import serum1 from '../assets/images/serum1.png'
import serum2 from '../assets/images/serum1.png'
import mask1 from '../assets/images/mask1.png'
import mask2 from '../assets/images/mask2.png'
import mask3 from '../assets/images/mask3.png'
import mask4 from '../assets/images/mask4.png'
import mask5 from '../assets/images/mask5.png'
import conditioner from '../assets/images/conditioner.jpg'
import logo from '../assets/images/logo.png'
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import bg1 from '../assets/images/bg1-removebg-preview.png'
import foo1 from '../assets/images/foo1.png'
import { useCart } from "./CartContext";
import toast from "react-hot-toast";



const Hair = () => {
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
        <img src={care} alt="" />
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
  className="w-full rounded-none bg-yellow-400 py-3 text-sm font-semibold text-gray-900 hover:bg-yellow-500 cursor-pointer"
  onClick={() => {
    addToCart({
      id: 1,
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
          src={oil1}
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
          Coconut Oil
        </h3>

        <p className="mt-1 text-sm text-gray-500">100% Pure Coconut Oil</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹345</span>
          <span className="text-sm text-gray-400 line-through">₹750</span>
          <span className="text-sm font-medium text-green-600">(54% OFF)</span>
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={serum}
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
        25% AHA 2% BHA Serum
        </h3>

        <p className="mt-1 text-sm text-gray-500">For Silky, Smooth Hair</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹300</span>
          <span className="text-sm text-gray-400 line-through">₹699</span>
          <span className="text-sm font-medium text-green-600">(57% OFF)</span>
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
          4.9★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        

        <h3 className="mt-1 text-base font-semibold text-gray-900">
         Fenugreek Hair Growth-Mask
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces dandruff</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹429</span>
          <span className="text-sm text-gray-400 line-through">₹875</span>
          <span className="text-sm font-medium text-green-600">(51% OFF)</span>
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={shampoo2}
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
        Bhringraj Anti-Hairfall Shampoo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Strengthens hair roots</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹358</span>
          <span className="text-sm text-gray-400 line-through">₹675</span>
          <span className="text-sm font-medium text-green-600">(47% OFF)</span>
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
          4.8★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Argan Oil
        </h3>

        <p className="mt-1 text-sm text-gray-500">Reduces dandruff.</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹399</span>
          <span className="text-sm text-gray-400 line-through">₹720</span>
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={oil5}
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
        Bringraj Oil
        </h3>

        <p className="mt-1 text-sm text-gray-500">Prevents premature greying</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹344</span>
          <span className="text-sm text-gray-400 line-through">₹599</span>
          <span className="text-sm font-medium text-green-600">(43% OFF)</span>
         
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={mask2}
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
         Nature’s Strength Hair- Mask
        </h3>

        <p className="mt-1 text-sm text-gray-500">Strengthens hair roots</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹450</span>
          <span className="text-sm text-gray-400 line-through">₹1100</span>
          <span className="text-sm font-medium text-green-600">(59% OFF)</span>
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={shampoo3}
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
         Climbazole Anti-Dandruff Shampoo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Natural antifungal agents to control dandruf</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹340</span>
          <span className="text-sm text-gray-400 line-through">₹595</span>
          <span className="text-sm font-medium text-green-600">(72% OFF)</span>
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={oil3}
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
      

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Tea Tree Oil
        </h3>

        <p className="mt-1 text-sm text-gray-500">Antifungal and antibacterial</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹530</span>
          <span className="text-sm text-gray-400 line-through">₹725</span>
          <span className="text-sm font-medium text-green-600">(73% OFF)</span>
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={mask4}
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
        

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          Aloe Vera Hair-Mask
        </h3>

        <p className="mt-1 text-sm text-gray-500">Promotes healthy hair growth</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹544</span>
          <span className="text-sm text-gray-400 line-through">₹995</span>
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
          4.4★
        </div>
      </div>

      {/* body */}
      <div className="p-4">
        

        <h3 className="mt-1 text-base font-semibold text-gray-900">
         CalmCrown Anti-Dandruff Hair Mask
        </h3>

        <p className="mt-1 text-sm text-gray-500">Soothing care for your scalp and hair,</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹499</span>
          <span className="text-sm text-gray-400 line-through">₹840</span>
          <span className="text-sm font-medium text-green-600">(41% OFF)</span>
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={shampoo4}
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
          Nature’s Pulse Onion Based Shampoo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Root nourishment and hair growth</p>
        <p className="text-xs text-gray-400 mt-0.5">1 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹302</span>
          <span className="text-sm text-gray-400 line-through">₹755</span>
          <span className="text-sm font-medium text-green-600">(60% OFF)</span>
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={oil4}
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
      

        <h3 className="mt-1 text-base font-semibold text-gray-900">
          HerbalPulse Rosemary Hair Oil Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Boost hair growth</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹396</span>
          <span className="text-sm text-gray-400 line-through">₹995</span>
          <span className="text-sm font-medium text-green-600">(40% OFF)</span>
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

      {/* image */}
      <div className="relative bg-gray-50">
        <img
          src={conditioner}
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
       

        <h3 className="mt-1 text-base font-semibold text-gray-900">
         PureBloom Volume & Shine Conditioner Combo
        </h3>

        <p className="mt-1 text-sm text-gray-500">Repair dryness and frizz</p>
        <p className="text-xs text-gray-400 mt-0.5">2 Unit</p>

        {/* price row */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-semibold text-gray-900">₹235</span>
          <span className="text-sm text-gray-400 line-through">₹690</span>
          <span className="text-sm font-medium text-green-600">(34% OFF)</span>
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