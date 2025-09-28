import type { Product } from './types';

export const UPI_ID = 'heysharma@fam';

// TODO: Replace with your own WhatsApp number, including the country code (e.g., 91 for India).
export const STORE_OWNER_WHATSAPP = '917483420178'; 

export const WHATSAPP_PREDEFINED_MESSAGE = `
Hello Knox's Store, I have a question.

Please select one:
1. I want to know more about a product.
2. I have a question about my payment.
3. My order has not been delivered yet.
4. Other
`.trim();

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Canva Premium (1 year)',
    description: 'Unlock premium features on Canva for one full year. Create professional designs with ease.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg',
    price: 199,
  },
  {
    id: 2,
    name: 'Amazon Prime (6 months)',
    description: 'Enjoy 6 months of Amazon Prime benefits, including fast delivery, Prime Video, and more.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/1280px-Amazon_Prime_Logo.svg.png',
    price: 299,
  },
  {
    id: 3,
    name: 'Phone Number Information Service',
    description: 'Get detailed information associated with a phone number. For legitimate purposes only.',
    image: 'https://media.istockphoto.com/id/1494579261/vector/telephone-handset-simple-circle-icon.jpg?s=612x612&w=0&k=20&c=bpf-J3OuFFZDNS3gQQ25Xgp6PKJ_lhbmvuO-kYgNCSg=',
    price: 499,
    requiresInput: {
      label: 'Phone Number to Lookup',
      placeholder: 'Enter the 10-digit phone number',
    },
  },
  {
    id: 4,
    name: 'Crunchyroll Premium (1 month)',
    description: "One month of ad-free access to the world's largest anime library, with new episodes simulcast from Japan.",
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Crunchyroll_Logo.svg/1280px-Crunchyroll_Logo.svg.png',
    price: 99,
  },
  {
    id: 5,
    name: 'Zee5 Premium (1 year)',
    description: 'A full year of unlimited access to Zee5 originals, movies, TV shows, and live TV channels.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Zee5-official-logo.jpeg/640px-Zee5-official-logo.jpeg',
    price: 399,
  },
  {
    id: 6,
    name: 'YouTube Premium + 2TB Storage',
    description: 'Ad-free YouTube and YouTube Music, plus 2TB of Google One cloud storage for all your files.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/1280px-YouTube_Premium_logo.svg.png',
    price: 299,
  },
  {
    id: 7,
    name: 'Vehicle Information from Number Plate',
    description: 'Get vehicle registration details using the number plate. Fast and accurate.',
    image: 'https://cdn-icons-png.freepik.com/512/4304/4304886.png',
    price: 399,
    requiresInput: {
        label: 'Vehicle Number Plate',
        placeholder: 'e.g. KA01AB1234',
    },
  },
];