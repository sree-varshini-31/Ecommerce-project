
import React, { useState } from "react";
import { useCart } from "./CartContext";
import cart from "../assets/imagess/cart.png";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeItem } = useCart();
  const [fadeOutIds, setFadeOutIds] = useState([]);

  const handleDelete = (id) => {
    setFadeOutIds((prev) => (prev.includes(id) ? prev : [...prev, id]));

    setTimeout(() => {
      removeItem(id);
      setFadeOutIds((prev) => prev.filter((fid) => fid !== id));
    }, 300);
  };

  const subtotal = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="flex justify-center font-sans mt-0">
      <div className="flex flex-col gap-6 w-full max-w-4xl">

        {/* CART BOX */}
        <div className="w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-2xl">
          <label className="w-full h-14 flex items-center justify-center border-b font-bold text-[20px] text-gray-700">
            Your Cart
          </label>

          <div className="flex flex-col p-5">
            {/* EMPTY CART VIEW */}
           {cartItems.length === 0 && (
  <div className="flex flex-col items-center justify-center py-0">
    {/* Custom Shopping Bag Image */}
    <img
      src={cart} // replace with your image path
      alt="Empty Cart"
      className="h-70 w-140 mb-4 "
    />

    <h2 className="text-gray-800 font-bold text-xl mb-2">
      Your cart is empty :(
    </h2>
    <p className="text-gray-500 text-center">
      Looks like you have not added anything to you cart.<br /> Go ahead & explore top categories.
    </p>
  </div>
)}
            {/* CART ITEMS */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className={`grid grid-cols-[110px_1.4fr_100px_80px] gap-5 items-start mb-6 transition-opacity duration-300 ${
                  fadeOutIds.includes(item.id) ? "opacity-0" : "opacity-100"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[110px] h-[110px] bg-[#FFF6EE] rounded-lg object-cover shadow-sm"
                />

                <div className="flex flex-col justify-start">
                  <span className="text-[17px] font-semibold text-gray-800 leading-tight">
                    {item.name}
                  </span>
                  <p className="text-[13px] font-semibold text-gray-500 mt-1">
                    Qty: {item.quantity}
                  </p>
                </div>

                <div className="h-[38px] grid grid-cols-3 border border-gray-300 rounded-md shadow-sm mx-auto">
                  <button
                    className="flex items-center justify-center hover:bg-gray-100"
                    onClick={() =>
                      item.quantity === 1
                        ? handleDelete(item.id)
                        : decreaseQty(item.id)
                    }
                  >
                    {item.quantity === 1 ? (
                      <svg viewBox="0 0 24 24" width={18} height={18} fill="none">
                        <path
                          d="M3 6h18M9 6v12m6-12v12M4 6l1 14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l1-14"
                          stroke="#d11a2a"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg fill="none" viewBox="0 0 24 24" height={18} width={18}>
                        <path
                          strokeLinecap="round"
                          strokeWidth="2.5"
                          stroke="#47484b"
                          d="M20 12H4"
                        />
                      </svg>
                    )}
                  </button>

                  <label className="flex items-center justify-center font-bold text-[17px] text-gray-700">
                    {item.quantity}
                  </label>

                  <button
                    className="flex items-center justify-center hover:bg-gray-100"
                    onClick={() => increaseQty(item.id)}
                  >
                    <svg fill="none" viewBox="0 0 24 24" height={18} width={18}>
                      <path
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        stroke="#47484b"
                        d="M12 4v16M20 12H4"
                      />
                    </svg>
                  </button>
                </div>

                <label className="text-[18px] font-bold ml-auto text-gray-800">
                  ₹{item.price}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* CHECKOUT BOX */}
        {cartItems.length > 0 && (
          <div className="w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] rounded-2xl">
            <label className="w-full h-14 flex items-center justify-center border-b font-bold text-[20px] text-gray-700">
              Checkout
            </label>

            <div className="grid grid-cols-[3fr_1fr] gap-3 p-5">
              <span className="text-[13px] font-bold text-gray-500">Your cart subtotal:</span>
              <span className="text-[15px] font-semibold text-gray-700">₹{subtotal}</span>

              <span className="text-[13px] font-bold text-gray-500">Online payment discount:</span>
              <span className="text-green-600 font-semibold text-sm">-₹18.30</span>

              <span className="text-[13px] font-bold text-gray-500">Sub GST:</span>
              <span className="text-[15px] font-semibold text-gray-700">₹32.02</span>

              <span className="text-[13px] font-bold text-gray-500">Shipping Fee:</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 line-through text-sm">₹199</span>
                <span className="text-green-600 font-semibold text-sm">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-5 bg-gray-200 rounded-b-2xl">
              <label className="text-[26px] font-black text-gray-800">
                ₹{(parseFloat(subtotal) - 18.30 + 32.02).toFixed(2)}
              </label>

              <button className="w-[180px] h-11 bg-blue-600 rounded-md text-white font-semibold text-[15px] hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
