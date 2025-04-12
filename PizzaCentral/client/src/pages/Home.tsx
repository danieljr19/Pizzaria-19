import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PromotionBanner from "@/components/PromotionBanner";
import MenuNav from "@/components/MenuNav";
import MenuSection from "@/components/MenuSection";
import CTASection from "@/components/CTASection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

type Category = 'pizzas' | 'drinks' | 'sandwiches' | 'combos' | 'desserts';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>('pizzas');

  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      <Header />
      <HeroSection />
      <PromotionBanner />
      <MenuNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      
      {/* Menu Sections - Only show the active category */}
      <div className={activeCategory === 'pizzas' ? 'block' : 'hidden'}>
        <MenuSection 
          category="pizza" 
          title="Nossas Pizzas" 
          icon="fas fa-pizza-slice" 
        />
      </div>
      
      <div className={activeCategory === 'drinks' ? 'block' : 'hidden'}>
        <MenuSection 
          category="drink" 
          title="Bebidas" 
          icon="fas fa-glass-cheers" 
        />
      </div>
      
      <div className={activeCategory === 'sandwiches' ? 'block' : 'hidden'}>
        <MenuSection 
          category="sandwich" 
          title="Sanduíches" 
          icon="fas fa-hamburger" 
        />
      </div>
      
      <div className={activeCategory === 'combos' ? 'block' : 'hidden'}>
        <div className="container mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Combos</h2>
          <p className="text-gray-600">Em breve novos combos promocionais!</p>
        </div>
      </div>
      
      <div className={activeCategory === 'desserts' ? 'block' : 'hidden'}>
        <div className="container mx-auto px-4 py-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Sobremesas</h2>
          <p className="text-gray-600">Em breve deliciosas sobremesas!</p>
        </div>
      </div>
      
      <CTASection />
      <InfoSection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
