import { BusinessInfo } from "../lib/types";

export const businessInfo: BusinessInfo = {
  id: 1,
  name: "Pizzaria Central",
  phone: "(84) 98717-0673",
  whatsapp: "5584987170673",
  instagram: "pizzaria367",
  address: "R. Ver. Genival Barbosa, 91-A - Passa E Fica, Passa e Fica - RN, 59218-000, Brasil",
  hours: JSON.stringify({
    monday: { open: "18:00", close: "23:00", closed: false },
    tuesday: { open: "", close: "", closed: true },
    wednesday: { open: "18:00", close: "23:00", closed: false },
    thursday: { open: "18:00", close: "23:00", closed: false },
    friday: { open: "18:00", close: "00:00", closed: false },
    saturday: { open: "18:00", close: "00:00", closed: false },
    sunday: { open: "18:00", close: "23:00", closed: false }
  })
};