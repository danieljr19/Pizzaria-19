import { useState, useEffect } from "react";
import { BusinessInfo } from "@/lib/types";
import { businessInfo as businessInfoData } from "@/data/businessInfo";

export default function Footer() {
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
    <footer className="bg-[#333333] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="w-12 h-12 rounded-full inline-block overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#F05A28] to-[#D62828]">
              <span className="font-bold text-white text-xl">PC</span>
            </div>
            <span className="ml-2 text-xl font-bold font-sans">Pizzaria Central</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Pizzaria Central. Todos os direitos reservados.
            </p>
            <div className="mt-2 flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href={`https://www.instagram.com/${businessInfo.instagram}`}
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
