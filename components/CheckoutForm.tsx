
import React, { useState } from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';

interface CheckoutFormProps {
  upiId: string;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ upiId }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && whatsapp) {
      console.log({ name, whatsapp });
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
        <div className="text-center bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto border border-emerald-500 shadow-lg">
          <h2 className="text-3xl font-bold text-emerald-400 mb-4">Thank You!</h2>
          <p className="text-gray-300 mb-2">Your details have been submitted successfully.</p>
          <p className="text-gray-400">We will deliver your product to <span className="font-semibold text-white">{whatsapp}</span> shortly after verifying your payment. Please allow up to 24 hours.</p>
        </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 shadow-2xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-white">Complete Your Purchase</h2>
        <p className="text-gray-400 mt-2">Follow these steps to get your digital goods.</p>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-gray-700/50 rounded-lg">
          <h3 className="text-lg font-semibold text-emerald-400 flex items-center">
            <span className="flex items-center justify-center w-6 h-6 bg-emerald-500 text-white rounded-full text-sm mr-3">1</span>
            Make Payment
          </h3>
          <p className="text-gray-300 mt-2">Pay the item price using any UPI app to the following ID:</p>
          <div className="mt-3 bg-gray-900 p-3 rounded-md text-center">
            <code className="text-lg font-mono text-emerald-300 tracking-widest">{upiId}</code>
          </div>
        </div>

        <div className="p-6 bg-gray-700/50 rounded-lg">
            <h3 className="text-lg font-semibold text-emerald-400 flex items-center">
                <span className="flex items-center justify-center w-6 h-6 bg-emerald-500 text-white rounded-full text-sm mr-3">2</span>
                Enter Delivery Details
            </h3>
            <p className="text-gray-300 mt-2">Fill the form below. We'll deliver the product to your WhatsApp number after payment verification.</p>
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                    <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-gray-900 border border-gray-600 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                    placeholder="e.g. Rohan Sharma"
                    />
                </div>
                <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp Number</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <WhatsappIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                        type="tel"
                        id="whatsapp"
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        required
                        className="w-full bg-gray-900 border border-gray-600 rounded-md pl-10 pr-3 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
                        placeholder="e.g. 9876543210"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-600 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-500/50 disabled:bg-gray-600 disabled:cursor-not-allowed"
                    disabled={!name || !whatsapp}
                >
                    Submit Details
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};
