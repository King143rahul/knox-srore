import React, { useState } from 'react';
import type { Product } from '../types';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { STORE_OWNER_WHATSAPP } from '../constants';

interface CheckoutModalProps {
  product: Product;
  price: string;
  upiId: string;
  onClose: () => void;
}

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const LoadingSpinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ product, price, upiId, onClose }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [utr, setUtr] = useState('');
  const [additionalInput, setAdditionalInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const upiUrl = encodeURIComponent(`upi://pay?pa=${upiId}&pn=KnoxsStore&am=${price}&cu=INR&tn=Order for ${product.name}`);
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${upiUrl}&qzone=1&color=6366f1&bgcolor=e2e8f0`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !whatsapp || !utr || isSubmitting || (product.requiresInput && !additionalInput)) {
        return;
    }
    
    setIsSubmitting(true);
    
    const additionalInfo = product.requiresInput
      ? `${product.requiresInput.label}: *${additionalInput}*`
      : '';

    const message = `
New Order Details:
-------------------
Product: *${product.name}*
Price: *₹${price}*
${additionalInfo ? additionalInfo + '\n' : ''}Customer Name: ${name}
Delivery WhatsApp: ${whatsapp}
UTR/Transaction ID: *${utr}*
-------------------
Please verify the payment and deliver the product.
    `.trim().replace(/^\s*\n/gm, "");

    const whatsappUrl = `https://wa.me/${STORE_OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
  };

  return (
    <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-modal-title"
    >
      <div 
        className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700 relative transform transition-all animate-scale-in" 
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10" aria-label="Close modal">
            <CloseIcon />
        </button>

        {submitted ? (
            <div className="text-center p-8 sm:p-12">
                <h2 id="checkout-modal-title" className="text-3xl font-bold text-indigo-400 mb-4">Action Required</h2>
                <p className="text-slate-300 mb-2">We've opened WhatsApp for you.</p>
                <p className="text-slate-400">Please send the pre-filled message to confirm your order. We will deliver to <span className="font-semibold text-slate-100">{whatsapp}</span> after we receive your message and verify the payment.</p>
                <button onClick={onClose} className="mt-6 w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50">
                    Close
                </button>
            </div>
        ) : (
            <div className="p-8">
                <div className="text-center mb-6">
                    <h2 id="checkout-modal-title" className="text-2xl font-bold text-slate-100">{product.name}</h2>
                    <p className="text-4xl font-extrabold text-indigo-400 mt-2">₹{price}</p>
                </div>

                <div className="space-y-6">
                    <div className="p-4 bg-slate-700/50 rounded-lg text-center">
                        <h3 className="text-lg font-semibold text-indigo-400 flex items-center justify-center">
                            <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full text-sm mr-3">1</span>
                            Scan to Pay
                        </h3>
                        <div className="mt-4 bg-slate-200 rounded-lg p-2 inline-block shadow-md">
                           <img src={qrCodeUrl} alt={`UPI QR Code for ${price} INR`} width="200" height="200" className="rounded-md" />
                        </div>
                        <p className="text-xs text-slate-400 mt-2">Pay ₹{price} using any UPI app</p>
                    </div>

                    <div className="p-4 bg-slate-700/50 rounded-lg">
                        <h3 className="text-lg font-semibold text-indigo-400 flex items-center justify-center mb-4">
                            <span className="flex items-center justify-center w-6 h-6 bg-indigo-600 text-white rounded-full text-sm mr-3">2</span>
                            Enter Delivery Details
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {product.requiresInput && (
                                <div>
                                    <label htmlFor="additional-input" className="block text-sm font-medium text-slate-300 mb-1">{product.requiresInput.label}</label>
                                    <input 
                                        type="text" 
                                        id="additional-input" 
                                        value={additionalInput} 
                                        onChange={(e) => setAdditionalInput(e.target.value)} 
                                        required 
                                        className="w-full bg-slate-900 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" 
                                        placeholder={product.requiresInput.placeholder} />
                                </div>
                            )}
                             <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-slate-900 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="e.g. Rohan Sharma" />
                            </div>
                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-300 mb-1">WhatsApp Number</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <WhatsappIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input type="tel" id="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required className="w-full bg-slate-900 border border-slate-600 rounded-md pl-10 pr-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="e.g. 9876543210" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="utr" className="block text-sm font-medium text-slate-300 mb-1">UPI Transaction ID (UTR)</label>
                                <input type="text" id="utr" value={utr} onChange={(e) => setUtr(e.target.value)} required className="w-full bg-slate-900 border border-slate-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="12-digit transaction ID" />
                            </div>
                            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center" disabled={!name || !whatsapp || !utr || (product.requiresInput && !additionalInput) || isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <LoadingSpinner />
                                        Processing...
                                    </>
                                ) : (
                                    'Send Details via WhatsApp'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )}
      </div>
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scale-in {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
    `}</style>
    </div>
  );
};