
import React from "react";
import { useCart } from "./CartContext";

import { toast } from "react-toastify";

const IMAGE_BASE_URL = "http://localhost:5173";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  if (!product) return null;

  const getImageUrl = (url) => {
    if (!url) return IMAGE_BASE_URL + "/placeholder.png";
    if (url.startsWith("http")) return url;
    return IMAGE_BASE_URL + url;
  };

  const imgUrl = getImageUrl(product.imageUrl);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col hover:scale-105 transition-transform">
      
      {/* Product Image */}
      <div className="relative w-full h-72">
        <img
          src={imgUrl}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <span className="absolute bottom-3 right-3 bg-white text-sm px-3 py-1 rounded-full shadow font-semibold">
          {product.rating ? product.rating.toFixed(1) : "4.9"}★
        </span>
      </div>

      {/* Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-green-600 font-bold text-xs tracking-wider">PRICE DROP</p>
          <h3 className="text-xl font-semibold mt-1">{product.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{product.description}</p>
          {product.units && (
            <p className="text-gray-500 text-sm mt-1">{product.units}</p>
          )}

          <div className="mt-3 flex items-center gap-2">
            <span className="text-2xl font-bold text-black">
              ₹{Number(product.price).toFixed(2)}
            </span>

            {product.originalPrice && (
              <span className="line-through text-gray-400 text-sm">
                ₹{Number(product.originalPrice).toFixed(2)}
              </span>
            )}

            {product.discountPercent && (
              <span className="text-green-600 text-sm font-semibold">
                ({product.discountPercent}% OFF)
              </span>
            )}
          </div>
        </div>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={() => {
            addToCart({ ...product, imgUrl });

            toast.success("Item added to cart!", {
              style: {
                background: "linear-gradient(135deg, #d9e9f3ff, #f8e1f3ff)",
                color: "#000",
                fontWeight: "400",
                minWidth: "300px",
                padding: "12px 16px",
                borderRadius: "8px",
              },
            });
          }}
          className="w-full bg-yellow-400 hover:bg-yellow-500 py-3 font-semibold text-black mt-4 transition-colors cursor-pointer rounded-b-xl"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
