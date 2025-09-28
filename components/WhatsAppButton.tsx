// DEPRECATED: This component rendered a floating WhatsApp button.
// Its functionality has been moved into the main Header component as a "Support" link
// for a cleaner UI. This file is no longer in use.

import React from 'react';
import { WhatsappIcon } from './icons/WhatsappIcon';
import { STORE_OWNER_WHATSAPP, WHATSAPP_PREDEFINED_MESSAGE } from '../constants';

export const WhatsAppButton: React.FC = () => {
    const whatsappUrl = `https://wa.me/${STORE_OWNER_WHATSAPP}?text=${encodeURIComponent(WHATSAPP_PREDEFINED_MESSAGE)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-110 z-50 animate-fade-in"
            aria-label="Contact us on WhatsApp"
        >
            <WhatsappIcon className="h-8 w-8" />
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { 
                    animation: fade-in 0.5s 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </a>
    );
};
