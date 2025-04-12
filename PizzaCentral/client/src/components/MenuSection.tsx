import { MenuItem } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/utils";
import { getMenuItemsByCategory } from "@/data/menuItems";
import { useState, useEffect } from "react";

interface MenuSectionProps {
  category: string;
  title: string;
  icon: string;
}

export default function MenuSection({ category, title, icon }: MenuSectionProps) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setItems(getMenuItemsByCategory(category));
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [category]);

  // Group items by subcategory
  const groupedItems = items?.reduce((acc, item) => {
    const subcategory = item.subcategory || "other";
    if (!acc[subcategory]) {
      acc[subcategory] = [];
    }
    acc[subcategory].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  // Map subcategory names to display names
  const subcategoryNames: Record<string, string> = {
    traditional: "Pizzas Tradicionais",
    special: "Pizzas Especiais",
    specialty: "Especialidades da Casa",
    soft: "Refrigerantes",
    juice: "Sucos",
    water: "Água",
    other: "Outros",
  };

  if (isLoading) {
    return (
      <section id={category} className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center bg-[#D62828] text-white rounded-full mr-2">
              <i className={icon}></i>
            </div>
            <h2 className="text-2xl font-bold font-sans">{title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-16" />
                  </div>
                  <Skeleton className="h-4 w-full mt-2" />
                  <Skeleton className="h-4 w-2/3 mt-1" />
                  <div className="mt-4 flex justify-between items-center">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-8 w-16 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!items || items.length === 0) {
    return (
      <section id={category} className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 flex items-center justify-center bg-[#D62828] text-white rounded-full mr-2">
              <i className={icon}></i>
            </div>
            <h2 className="text-2xl font-bold font-sans">{title}</h2>
          </div>
          <div className="text-center py-8">
            <p className="text-gray-500">Nenhum item disponível nesta categoria.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={category} className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 flex items-center justify-center bg-[#D62828] text-white rounded-full mr-2">
            <i className={icon}></i>
          </div>
          <h2 className="text-2xl font-bold font-sans">{title}</h2>
        </div>

        {groupedItems && 
          Object.entries(groupedItems).map(([subcategory, subcategoryItems]) => (
            <div key={subcategory} className="mb-6">
              <h3 className="text-lg font-medium font-sans mb-3">
                {subcategoryNames[subcategory] || subcategory}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {subcategoryItems.map((item) => (
                  <Card 
                    key={item.id}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-bold">{item.name}</h4>
                        <div>
                          {subcategory === "traditional" && (
                            <Badge className="bg-[#F05A28] text-white">Tradicional</Badge>
                          )}
                          {subcategory === "special" && (
                            <Badge className="bg-[#FFC857] text-[#333333]">Especial</Badge>
                          )}
                          {subcategory === "specialty" && (
                            <Badge className="bg-[#D62828] text-white">Especialidade</Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <div>
                          <span className="text-[#333333] font-bold text-lg">
                            {formatPrice(item.price)}
                          </span>
                          {category === "pizza" && (
                            <span className="text-gray-500 text-sm">(Média)</span>
                          )}
                        </div>
                        <a
                          href={`https://wa.me/5584987170673?text=Olá, gostaria de pedir ${
                            item.name
                          }${category === "pizza" ? " média" : ""}`}
                          className="bg-[#25D366] text-white px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          <i className="fab fa-whatsapp mr-1"></i> Pedir
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
