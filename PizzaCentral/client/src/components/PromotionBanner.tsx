import { useState, useEffect } from "react";
import { Promotion } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import { getActivePromotions } from "@/data/promotions";

export default function PromotionBanner() {
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setPromotions(getActivePromotions());
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-4 overflow-x-auto scrollbar-hide">
        <div className="container mx-auto px-4">
          <div className="flex space-x-4 pb-2">
            <Skeleton className="flex-shrink-0 w-72 h-36 rounded-lg" />
            <Skeleton className="flex-shrink-0 w-72 h-36 rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  if (!promotions || promotions.length === 0) {
    return null;
  }

  return (
    <section className="py-4 overflow-x-auto scrollbar-hide">
      <div className="container mx-auto px-4">
        <div className="flex space-x-4 pb-2">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="flex-shrink-0 w-72 h-36 rounded-lg overflow-hidden relative"
            >
              <img
                src={promo.imageUrl}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-3 text-white">
                <h3 className="font-sans font-bold text-lg">{promo.title}</h3>
                <p className="text-sm">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
