import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Category = 'pizzas' | 'drinks' | 'sandwiches' | 'combos' | 'desserts';

interface MenuNavProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

export default function MenuNav({ activeCategory, setActiveCategory }: MenuNavProps) {
  const categories: { id: Category; label: string }[] = [
    { id: 'pizzas', label: 'Pizzas' },
    { id: 'drinks', label: 'Bebidas' },
    { id: 'sandwiches', label: 'Sanduíches' },
    { id: 'combos', label: 'Combos' },
    { id: 'desserts', label: 'Sobremesas' },
  ];

  return (
    <section className="sticky top-16 z-40 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex py-2 px-4 space-x-1 md:space-x-3 md:justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant="ghost"
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-lg font-medium",
                  activeCategory === category.id
                    ? "bg-[#F05A28] text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
