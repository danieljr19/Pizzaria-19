import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { BusinessInfo } from "@/lib/types";
import { businessInfo as businessInfoData } from "@/data/businessInfo";

export default function Header() {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setBusinessInfo(businessInfoData);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#333333] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#F05A28] overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#F05A28] to-[#D62828]">
            <span className="font-bold text-white text-xl">PC</span>
          </div>
          <h1 className="ml-2 text-xl font-bold font-sans">
            Pizzaria Central
          </h1>
        </div>
        <div className="flex items-center">
          {businessInfo && (
            <a
              href={`tel:${businessInfo.phone.replace(/\D/g, "")}`}
              className="text-white mr-4"
            >
              <Phone className="h-5 w-5" />
            </a>
          )}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-[#333333] text-white border-l border-[#F05A28]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  <a 
                    href="#pizzas" 
                    className="py-2 px-4 hover:bg-[#F05A28] rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pizzas
                  </a>
                  <a 
                    href="#drinks" 
                    className="py-2 px-4 hover:bg-[#F05A28] rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Bebidas
                  </a>
                  <a 
                    href="#sandwiches" 
                    className="py-2 px-4 hover:bg-[#F05A28] rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sanduíches
                  </a>
                  <a 
                    href="#info" 
                    className="py-2 px-4 hover:bg-[#F05A28] rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Informações
                  </a>
                </nav>
                {businessInfo && (
                  <div className="mt-auto pt-6 border-t border-gray-700">
                    <p className="text-sm text-gray-300 mb-2">Contato:</p>
                    <a 
                      href={`tel:${businessInfo.phone.replace(/\D/g, "")}`}
                      className="flex items-center text-white mb-2 hover:text-[#F05A28]"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      {businessInfo.phone}
                    </a>
                    <a 
                      href={`https://wa.me/${businessInfo.whatsapp}`}
                      className="py-2 px-4 bg-[#25D366] text-white rounded-md flex justify-center items-center mt-4"
                    >
                      <i className="fab fa-whatsapp mr-2"></i>
                      Fazer pedido
                    </a>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
