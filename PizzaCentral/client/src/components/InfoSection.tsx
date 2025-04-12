import { useState, useEffect } from "react";
import { BusinessInfo } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { businessInfo as businessInfoData } from "@/data/businessInfo";

export default function InfoSection() {
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo | null>(null);
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setBusinessInfo(businessInfoData);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!businessInfo) return null;

  // Parse hours JSON
  const hours = JSON.parse(businessInfo.hours);

  return (
    <section id="info" className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hours */}
          <Card className="bg-[#F9F6F0]">
            <CardContent className="p-5">
              <h3 className="font-sans font-bold text-lg mb-3 flex items-center">
                <i className="far fa-clock text-[#F05A28] mr-2"></i> Horário de
                Funcionamento
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Segunda-feira:</span>
                  <span className="font-medium">
                    {hours.monday.closed
                      ? "FECHADO"
                      : `${hours.monday.open} - ${hours.monday.close}`}
                  </span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Terça-feira:</span>
                  <span className="font-medium">
                    {hours.tuesday.closed
                      ? "FECHADO"
                      : `${hours.tuesday.open} - ${hours.tuesday.close}`}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Quarta-feira:</span>
                  <span className="font-medium">
                    {hours.wednesday.closed
                      ? "FECHADO"
                      : `${hours.wednesday.open} - ${hours.wednesday.close}`}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Quinta-feira:</span>
                  <span className="font-medium">
                    {hours.thursday.closed
                      ? "FECHADO"
                      : `${hours.thursday.open} - ${hours.thursday.close}`}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Sexta-feira:</span>
                  <span className="font-medium">
                    {hours.friday.closed
                      ? "FECHADO"
                      : `${hours.friday.open} - ${hours.friday.close}`}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">
                    {hours.saturday.closed
                      ? "FECHADO"
                      : `${hours.saturday.open} - ${hours.saturday.close}`}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium">
                    {hours.sunday.closed
                      ? "FECHADO"
                      : `${hours.sunday.open} - ${hours.sunday.close}`}
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card className="bg-[#F9F6F0]">
            <CardContent className="p-5">
              <h3 className="font-sans font-bold text-lg mb-3 flex items-center">
                <i className="fas fa-motorcycle text-[#F05A28] mr-2"></i> Delivery
              </h3>
              <p className="mb-3">
                Entregamos em toda a cidade. Taxa de entrega varia conforme a
                região.
              </p>
              <p className="mb-3">Tempo médio de entrega: 30-45 minutos</p>
              <p>Pedido mínimo: R$ 30,00</p>
              <div className="mt-4">
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  className="text-[#F05A28] hover:text-[#D62828] flex items-center"
                >
                  <i className="fab fa-whatsapp mr-1"></i> Consulte sua região
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="bg-[#F9F6F0]">
            <CardContent className="p-5">
              <h3 className="font-sans font-bold text-lg mb-3 flex items-center">
                <i className="fas fa-map-marker-alt text-[#F05A28] mr-2"></i>{" "}
                Localização & Contato
              </h3>
              <address className="not-italic mb-3">{businessInfo.address}</address>
              <div className="space-y-2">
                <a
                  href={`tel:${businessInfo.phone.replace(/\D/g, "")}`}
                  className="flex items-center hover:text-[#F05A28]"
                >
                  <i className="fas fa-phone-alt mr-2 text-[#F05A28]"></i>{" "}
                  {businessInfo.phone}
                </a>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  className="flex items-center hover:text-[#F05A28]"
                >
                  <i className="fab fa-whatsapp mr-2 text-[#F05A28]"></i> WhatsApp
                </a>
                <a
                  href={`https://www.instagram.com/${businessInfo.instagram}`}
                  className="flex items-center hover:text-[#F05A28]"
                >
                  <i className="fab fa-instagram mr-2 text-[#F05A28]"></i>{" "}
                  @{businessInfo.instagram}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
