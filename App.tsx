import React, { useState } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { CheckoutModal } from './components/CheckoutModal';
import { PRODUCTS, UPI_ID } from './constants';
import type { Product } from './types';

const App: React.FC = () => {
  const [checkoutInfo, setCheckoutInfo] = useState<{ product: Product; price: string } | null>(null);

  const handleBuyNow = (product: Product, price: string) => {
    setCheckoutInfo({ product, price });
  };

  const handleCloseModal = () => {
    setCheckoutInfo(null);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans antialiased">
      <Header />
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section id="products" className="py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-500">
              Our Digital Collection
            </h1>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Get instant access to premium digital goods at unbeatable prices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product: Product) => (
              <ProductCard key={product.id} product={product} onBuyNow={handleBuyNow} />
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-800/50 mt-16 py-6">
        <div className="container mx-auto px-4 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Knox's Store. All rights reserved.</p>
        </div>
      </footer>

      {checkoutInfo && (
        <CheckoutModal
          product={checkoutInfo.product}
          price={checkoutInfo.price}
          upiId={UPI_ID}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;