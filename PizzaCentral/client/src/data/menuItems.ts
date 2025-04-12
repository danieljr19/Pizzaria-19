import { MenuItem } from "../lib/types";

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Calabresa",
    description: "Molho de tomate, mussarela, calabresa fatiada, cebola e orégano.",
    price: 3990, // R$ 39,90
    category: "pizza",
    subcategory: "traditional",
    imageUrl: "https://images.unsplash.com/photo-1594007654729-407eedc4fe24?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emEgY2FsYWJyZXNhfHx8fHx8MTY5NzUzNTg0OQ&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 2,
    name: "Frango",
    description: "Molho de tomate, mussarela, frango desfiado, milho, catupiry e orégano.",
    price: 4290, // R$ 42,90
    category: "pizza",
    subcategory: "traditional",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1ODgw&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 3,
    name: "Portuguesa",
    description: "Molho de tomate, mussarela, presunto, ovo, cebola, pimentão, azeitona e orégano.",
    price: 4490, // R$ 44,90
    category: "pizza",
    subcategory: "traditional",
    imageUrl: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1OTI1&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 4,
    name: "Margherita",
    description: "Molho de tomate, mussarela de búfala, tomate, manjericão fresco e azeite.",
    price: 4690, // R$ 46,90
    category: "pizza",
    subcategory: "special",
    imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emEgbWFyZ2hlcml0YXx8fHx8fDE2OTc1MzU5NTY&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 5,
    name: "Central",
    description: "Nossa especialidade com molho de tomate, mussarela, calabresa, bacon, catupiry e cebola caramelizada.",
    price: 5490, // R$ 54,90
    category: "pizza",
    subcategory: "specialty",
    imageUrl: "https://images.unsplash.com/photo-1586156738951-d0a1273f880c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1OTg5&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 6,
    name: "Passiflora",
    description: "Molho de tomate, mussarela, lombo defumado, abacaxi caramelizado e gorgonzola.",
    price: 5490, // R$ 54,90
    category: "pizza",
    subcategory: "specialty",
    imageUrl: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM2MDE2&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 7,
    name: "Refrigerante 2L",
    description: "Coca-Cola, Guaraná Antarctica, Fanta ou Sprite",
    price: 1200, // R$ 12,00
    category: "drink",
    subcategory: "soft",
    imageUrl: "https://images.unsplash.com/photo-1520352474155-23ad68e963ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c29kYXx8fHx8fDE2OTc1MzYwMTY&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 8,
    name: "Suco Natural 500ml",
    description: "Laranja, Abacaxi, Maracujá ou Limão",
    price: 900, // R$ 9,00
    category: "drink",
    subcategory: "juice",
    imageUrl: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8anVpY2V8fHx8fHwxNjk3NTM2MDE2&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 9,
    name: "Água Mineral 500ml",
    description: "Com ou sem gás",
    price: 400, // R$ 4,00
    category: "drink",
    subcategory: "water",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8d2F0ZXIgYm90dGxlfHx8fHx8MTY5NzUzNjAxNg&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 10,
    name: "Sanduíche de Calabresa",
    description: "Pão, calabresa, queijo, alface, tomate e molho especial",
    price: 1990, // R$ 19,90
    category: "sandwich",
    subcategory: "",
    imageUrl: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2FuZHdpY2h8fHx8fHwxNjk3NTM2MDE2&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  },
  {
    id: 11,
    name: "Sanduíche de Frango",
    description: "Pão, frango desfiado, queijo, alface, tomate e molho especial",
    price: 1990, // R$ 19,90
    category: "sandwich",
    subcategory: "",
    imageUrl: "https://images.unsplash.com/photo-1524238306291-eb943b4f30db?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpY2tlbiBzYW5kd2ljaHx8fHx8fDE2OTc1MzYwMTY&ixlib=rb-4.0.3&q=80",
    isAvailable: true
  }
];

export const getMenuItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};