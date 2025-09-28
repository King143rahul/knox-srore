
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onBuyNow: (product: Product, price: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onBuyNow }) => {
  return (
    <div className="bg-slate-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 ease-in-out group">
      <div className="relative h-56 flex items-center justify-center bg-slate-900/50 overflow-hidden">
        <img className="max-h-full max-w-full w-auto h-auto object-contain p-4" src={product.image} alt={product.name} />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-2 h-14 flex items-center">{product.name}</h3>
        <p className="text-slate-400 text-sm mb-4 h-16">{product.description}</p>
        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-sm text-slate-400">Price</p>
            <p className="text-3xl font-extrabold text-indigo-400">
              ₹{product.price}
            </p>
          </div>
          <button
            onClick={() => onBuyNow(product, product.price.toString())}
            className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};