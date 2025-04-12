import { useState, useEffect } from "react";
import { BusinessInfo } from "@/lib/types";
import { businessInfo as businessInfoData } from "@/data/businessInfo";

export default function FloatingWhatsAppButton() {
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
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${businessInfo.whatsapp}`}
        className="animate-pulse flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <i className="fab fa-whatsapp text-white text-3xl"></i>
      </a>
    </div>
  );
}
