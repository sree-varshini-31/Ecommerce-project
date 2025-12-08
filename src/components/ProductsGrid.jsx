import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsGrid({ products }) {
  if (!products) return null;
  if (products.length === 0) {
    return <div className="p-6 text-center text-gray-500">No products found.</div>;
  }

  return (
<div className="max-w-[1350px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-10 p-6">

      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
