import { Promotion } from "../lib/types";

export const promotions: Promotion[] = [
  {
    id: 1,
    title: "Quinta da Pizza",
    description: "Sabores exclusivos toda quinta",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1Njkw&ixlib=rb-4.0.3&q=80",
    active: true
  },
  {
    id: 2,
    title: "Sextou na Central",
    description: "Promoção especial às sextas",
    imageUrl: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1Njkw&ixlib=rb-4.0.3&q=80",
    active: true
  }
];

export const getActivePromotions = (): Promotion[] => {
  return promotions.filter(promo => promo.active);
};