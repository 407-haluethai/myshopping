import React from 'react';
import products from '../data';

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
