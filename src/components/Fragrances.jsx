import React, { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";
import bg1 from '../assets/images/bg1-removebg-preview.png';
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// UPDATED FOOTER LINKS WITH PATHS
const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us" },
      { name: "Careers" },
      { name: "Contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs"},
      { name: "Shipping" },
      { name: "Returns"},
    ],
  },
  {
    title: "Shop",
    links: [
     { name: "Home", path: "/home" },
      { name: "Bestsellers", path: "/bestsellers" },
      { name: "Hair Care", path: "/haircare" },
      { name: "Skin Care", path: "/skincare" },
      { name: "Kits & Combos", path: "/kits-combos" },
      { name: "Makeup", path: "/makeup" },
      { name: "Fragrances", path: "/fragrances" },
    ],
  },
];



export default function Fragrances() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 const navigate = useNavigate(); // added navigation

  useEffect(() => {
    setLoading(true);
  fetch("http://localhost:8080/api/products/category/fragrances")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch fragrances");
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
  if (loading)
    return (
      <div className="flex-col gap-4 w-full flex items-center justify-center py-20">
        <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
        </div>
      </div>
    );

  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div>
      {/* Banner Image */}
      <div className="w-full mb-6">
        <img
          src="Frag_1.jpg"   // <-- your banner image path
          alt="Fragrancess Banner"
          className="w-full h-120 object-cover rounded-xl shadow"
        />
        </div>
      {/* <h2 className="text-2xl font-semibold p-6">Fragrances</h2> */}
      <ProductsGrid products={products} />

{/* Footer */}
      <footer className="bg-gradient-to-tr from-blue-50 to-pink-50 text-gray-600 border-t border-gray-500">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

            {/* Logo */}
            <div className="col-span-2">
              <img src={bg1} alt="Luvierra Logo" className="h-12 w-auto" />
            </div>

            {/* CLICKABLE FOOTER LINKS */}
            {footerLinks.map((section) => (
              <div key={section.title} className="col-span-1">
                <h3 className="text-sm font-bold tracking-wider mb-4 uppercase text-green-800">
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <span
                        onClick={() => navigate(link.path)}
                        className="text-sm hover:text-green-600 transition cursor-pointer"
                      >
                        {link.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social Icons */}
            <div className="col-span-2 md:col-span-1 flex justify-end space-x-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-200 text-green-800 hover:bg-green-300 cursor-pointer">
                <FaInstagram className="text-xl" />
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-200 text-green-800 hover:bg-green-300 cursor-pointer">
                <FaFacebookF className="text-xl" />
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-200 text-green-800 hover:bg-green-300 cursor-pointer">
                <FaPinterestP className="text-xl" />
              </span>
            </div>

          </div>

          <hr className="my-8 border-green-200" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
              <span className="hover:text-green-600 cursor-pointer">Legal</span>
              <span className="hover:text-green-600 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-green-600 cursor-pointer">Cookies</span>
              <span className="hover:text-green-600 cursor-pointer">Accessibility</span>
            </div>

            <div className="flex space-x-4 items-center">
              <span>© {new Date().getFullYear()} Luvierra. All rights reserved.</span>
              <span className="ml-4 flex items-center text-green-700 font-medium">
                🌎 <span className="ml-1">USA (English)</span>
              </span>
            </div>
          </div>

        </div>
      </footer>


    </div>
  );
}
