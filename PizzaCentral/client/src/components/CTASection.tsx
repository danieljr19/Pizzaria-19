import { useState, useEffect } from "react";
import { BusinessInfo } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { businessInfo as businessInfoData } from "@/data/businessInfo";

export default function CTASection() {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setBusinessInfo(businessInfoData);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!businessInfo) return null;

  return (
    <section className="py-8 bg-gradient-to-r from-[#F05A28] to-[#D62828] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold font-sans mb-3">
          Faça seu pedido agora mesmo!
        </h2>
        <p className="mb-6">
          Entregamos na sua casa ou você pode retirar na nossa loja
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`https://wa.me/${businessInfo.whatsapp}`}
            className="bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <i className="fab fa-whatsapp text-xl mr-2"></i> Pedir via WhatsApp
          </a>
          <a
            href={`tel:${businessInfo.phone.replace(/\D/g, "")}`}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <i className="fas fa-phone-alt mr-2"></i> {businessInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
