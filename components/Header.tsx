import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { STORE_OWNER_WHATSAPP, WHATSAPP_PREDEFINED_MESSAGE } from '../constants';

const LogoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21.5v-2.5M12 18.5l-2 1m2-1l2 1M12 14.5v-2.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l2-1m-2 1l-2-1m2 1V9.5m0-2.5L10 6M12 7l2 1" />
    </svg>
)

export const Header: React.FC = () => {
  const whatsappUrl = `https://wa.me/${STORE_OWNER_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_PREDEFINED_MESSAGE)}`;

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <LogoIcon />
            <span className="text-2xl font-bold text-slate-100">Knox's Store</span>
          </div>
          <nav className="flex items-center space-x-4">
            <a href="#products" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium">Products</a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-300 hover:text-indigo-400 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              <WhatsappIcon className="h-5 w-5" />
              <span>Support</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};