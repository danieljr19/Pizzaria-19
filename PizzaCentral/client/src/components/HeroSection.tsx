import { useState, useEffect } from "react";
import { BusinessInfo } from "@/lib/types";
import { businessInfo as businessInfoData } from "@/data/businessInfo";

export default function HeroSection() {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setBusinessInfo(businessInfoData);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#F05A28] to-[#D62828] text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto w-24 h-24 rounded-full border-4 border-white mb-4 overflow-hidden flex items-center justify-center bg-white">
          <div className="w-full h-full bg-gradient-to-r from-[#F05A28] to-[#D62828] flex items-center justify-center">
            <span className="font-bold text-white text-3xl">PC</span>
          </div>
        </div>
        <h1 className="text-3xl font-bold font-sans mb-2">Pizzaria Central</h1>
        <p className="text-lg mb-4">A sua melhor opção!</p>
        <div className="flex justify-center space-x-2 mb-6 flex-wrap">
          <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm m-1">
            <i className="far fa-clock mr-1"></i> Fechado às terças
          </span>
          <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm m-1">
            <i className="fas fa-motorcycle mr-1"></i> Delivery
          </span>
        </div>
        {businessInfo && (
          <a
            href={`https://wa.me/${businessInfo.whatsapp}`}
            className="animate-pulse inline-block bg-[#25D366] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
          >
            <i className="fab fa-whatsapp mr-2"></i> Pedir agora via WhatsApp
          </a>
        )}
      </div>
    </section>
  );
}
