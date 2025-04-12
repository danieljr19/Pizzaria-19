export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string | null;
  imageUrl: string;
  isAvailable: boolean;
}

export interface Promotion {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  active: boolean;
}

export interface BusinessInfo {
  id: number;
  name: string;
  phone: string;
  whatsapp: string;
  instagram: string | null;
  address: string | null;
  hours: string; // JSON stringified object
}
