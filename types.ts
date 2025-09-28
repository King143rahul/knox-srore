export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  requiresInput?: {
    label: string;
    placeholder: string;
  };
}