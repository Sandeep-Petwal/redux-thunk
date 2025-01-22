/* eslint-disable react/prop-types */
import React from 'react'

const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-green-600">${product.price}</span>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {product.category}
        </span>
      </div>
      <div className="mt-2 flex items-center">
        <span className="text-yellow-500">★</span>
        <span className="ml-1">{product.rating}</span>
        <span className="ml-2 text-gray-500">{product.stock} in stock</span>
      </div>
    </div>
  );
  

export default ProductCard
