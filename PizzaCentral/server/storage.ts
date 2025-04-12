import { 
  users, menuItems, promotions, businessInfo,
  type User, type InsertUser, 
  type MenuItem, type InsertMenuItem,
  type Promotion, type InsertPromotion,
  type BusinessInfo, type InsertBusinessInfo
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Menu items methods
  getMenuItems(): Promise<MenuItem[]>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  getMenuItem(id: number): Promise<MenuItem | undefined>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  updateMenuItem(id: number, item: Partial<InsertMenuItem>): Promise<MenuItem | undefined>;
  deleteMenuItem(id: number): Promise<boolean>;
  
  // Promotions methods
  getPromotions(): Promise<Promotion[]>;
  getActivePromotions(): Promise<Promotion[]>;
  getPromotion(id: number): Promise<Promotion | undefined>;
  createPromotion(promotion: InsertPromotion): Promise<Promotion>;
  updatePromotion(id: number, promotion: Partial<InsertPromotion>): Promise<Promotion | undefined>;
  deletePromotion(id: number): Promise<boolean>;
  
  // Business info methods
  getBusinessInfo(): Promise<BusinessInfo | undefined>;
  updateBusinessInfo(info: InsertBusinessInfo): Promise<BusinessInfo>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private menuItems: Map<number, MenuItem>;
  private promotions: Map<number, Promotion>;
  private businessInfo: BusinessInfo | undefined;
  
  private currentUserId: number;
  private currentMenuItemId: number;
  private currentPromotionId: number;
  private currentBusinessInfoId: number;

  constructor() {
    this.users = new Map();
    this.menuItems = new Map();
    this.promotions = new Map();
    
    this.currentUserId = 1;
    this.currentMenuItemId = 1;
    this.currentPromotionId = 1;
    this.currentBusinessInfoId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Create menu items
    const pizzas = [
      {
        name: "Calabresa",
        description: "Molho de tomate, mussarela, calabresa fatiada, cebola e orégano.",
        price: 3990, // R$ 39,90
        category: "pizza",
        subcategory: "traditional",
        imageUrl: "https://images.unsplash.com/photo-1594007654729-407eedc4fe24?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emEgY2FsYWJyZXNhfHx8fHx8MTY5NzUzNTg0OQ&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      },
      {
        name: "Frango",
        description: "Molho de tomate, mussarela, frango desfiado, milho, catupiry e orégano.",
        price: 4290, // R$ 42,90
        category: "pizza",
        subcategory: "traditional",
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1ODgw&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      },
      {
        name: "Portuguesa",
        description: "Molho de tomate, mussarela, presunto, ovo, cebola, pimentão, azeitona e orégano.",
        price: 4490, // R$ 44,90
        category: "pizza",
        subcategory: "traditional",
        imageUrl: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1OTI1&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      },
      {
        name: "Margherita",
        description: "Molho de tomate, mussarela de búfala, tomate, manjericão fresco e azeite.",
        price: 4690, // R$ 46,90
        category: "pizza",
        subcategory: "special",
        imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emEgbWFyZ2hlcml0YXx8fHx8fDE2OTc1MzU5NTY&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      },
      {
        name: "Central",
        description: "Nossa especialidade com molho de tomate, mussarela, calabresa, bacon, catupiry e cebola caramelizada.",
        price: 5490, // R$ 54,90
        category: "pizza",
        subcategory: "specialty",
        imageUrl: "https://images.unsplash.com/photo-1586156738951-d0a1273f880c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1OTg5&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      },
      {
        name: "Passiflora",
        description: "Molho de tomate, mussarela, lombo defumado, abacaxi caramelizado e gorgonzola.",
        price: 5490, // R$ 54,90
        category: "pizza",
        subcategory: "specialty",
        imageUrl: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM2MDE2&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      }
    ];

    // Create drinks
    const drinks = [
      {
        name: "Refrigerante 2L",
        description: "Coca-Cola, Guaraná Antarctica, Fanta ou Sprite",
        price: 1200, // R$ 12,00
        category: "drink",
        subcategory: "soft",
        imageUrl: "https://images.unsplash.com/photo-1520352474155-23ad68e963ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c29kYXx8fHx8fDE2OTc1MzYwMTY&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      },
      {
        name: "Suco Natural 500ml",
        description: "Laranja, Abacaxi, Maracujá ou Limão",
        price: 900, // R$ 9,00
        category: "drink",
        subcategory: "juice",
        imageUrl: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8anVpY2V8fHx8fHwxNjk3NTM2MDE2&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      },
      {
        name: "Água Mineral 500ml",
        description: "Com ou sem gás",
        price: 400, // R$ 4,00
        category: "drink",
        subcategory: "water",
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8d2F0ZXIgYm90dGxlfHx8fHx8MTY5NzUzNjAxNg&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      }
    ];

    // Create sandwiches
    const sandwiches = [
      {
        name: "Sanduíche de Calabresa",
        description: "Pão, calabresa, queijo, alface, tomate e molho especial",
        price: 1990, // R$ 19,90
        category: "sandwich",
        subcategory: "",
        imageUrl: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8c2FuZHdpY2h8fHx8fHwxNjk3NTM2MDE2&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      },
      {
        name: "Sanduíche de Frango",
        description: "Pão, frango desfiado, queijo, alface, tomate e molho especial",
        price: 1990, // R$ 19,90
        category: "sandwich",
        subcategory: "",
        imageUrl: "https://images.unsplash.com/photo-1524238306291-eb943b4f30db?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hpY2tlbiBzYW5kd2ljaHx8fHx8fDE2OTc1MzYwMTY&ixlib=rb-4.0.3&q=80",
        isAvailable: true
      }
    ];

    // Add all menu items
    [...pizzas, ...drinks, ...sandwiches].forEach(item => {
      this.createMenuItem(item as InsertMenuItem);
    });

    // Create promotions
    const promotions = [
      {
        title: "Quinta da Pizza",
        description: "Sabores exclusivos toda quinta",
        imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1Njkw&ixlib=rb-4.0.3&q=80",
        active: true
      },
      {
        title: "Sextou na Central",
        description: "Promoção especial às sextas",
        imageUrl: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8cGl6emF8fHx8fHwxNjk3NTM1Njkw&ixlib=rb-4.0.3&q=80",
        active: true
      }
    ];

    promotions.forEach(promo => {
      this.createPromotion(promo as InsertPromotion);
    });

    // Create business info
    const businessInfo: InsertBusinessInfo = {
      name: "Pizzaria Central",
      phone: "(84) 98717-0673",
      whatsapp: "5584987170673",
      instagram: "pizzaria367",
      address: "Rua da Pizzaria, 123, Centro - Natal/RN",
      hours: JSON.stringify({
        monday: { open: "18:00", close: "23:00", closed: false },
        tuesday: { open: "", close: "", closed: true },
        wednesday: { open: "18:00", close: "23:00", closed: false },
        thursday: { open: "18:00", close: "23:00", closed: false },
        friday: { open: "18:00", close: "00:00", closed: false },
        saturday: { open: "18:00", close: "00:00", closed: false },
        sunday: { open: "18:00", close: "23:00", closed: false }
      })
    };
    
    this.updateBusinessInfo(businessInfo);
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Menu items methods
  async getMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }

  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      (item) => item.category === category
    );
  }

  async getMenuItem(id: number): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    const id = this.currentMenuItemId++;
    const menuItem: MenuItem = { ...item, id };
    this.menuItems.set(id, menuItem);
    return menuItem;
  }

  async updateMenuItem(id: number, item: Partial<InsertMenuItem>): Promise<MenuItem | undefined> {
    const existingItem = this.menuItems.get(id);
    if (!existingItem) {
      return undefined;
    }

    const updatedItem: MenuItem = { ...existingItem, ...item };
    this.menuItems.set(id, updatedItem);
    return updatedItem;
  }

  async deleteMenuItem(id: number): Promise<boolean> {
    return this.menuItems.delete(id);
  }

  // Promotions methods
  async getPromotions(): Promise<Promotion[]> {
    return Array.from(this.promotions.values());
  }

  async getActivePromotions(): Promise<Promotion[]> {
    return Array.from(this.promotions.values()).filter(
      (promo) => promo.active
    );
  }

  async getPromotion(id: number): Promise<Promotion | undefined> {
    return this.promotions.get(id);
  }

  async createPromotion(promotion: InsertPromotion): Promise<Promotion> {
    const id = this.currentPromotionId++;
    const newPromotion: Promotion = { ...promotion, id };
    this.promotions.set(id, newPromotion);
    return newPromotion;
  }

  async updatePromotion(id: number, promotion: Partial<InsertPromotion>): Promise<Promotion | undefined> {
    const existingPromotion = this.promotions.get(id);
    if (!existingPromotion) {
      return undefined;
    }

    const updatedPromotion: Promotion = { ...existingPromotion, ...promotion };
    this.promotions.set(id, updatedPromotion);
    return updatedPromotion;
  }

  async deletePromotion(id: number): Promise<boolean> {
    return this.promotions.delete(id);
  }

  // Business info methods
  async getBusinessInfo(): Promise<BusinessInfo | undefined> {
    return this.businessInfo;
  }

  async updateBusinessInfo(info: InsertBusinessInfo): Promise<BusinessInfo> {
    if (this.businessInfo) {
      this.businessInfo = { ...this.businessInfo, ...info };
    } else {
      const id = this.currentBusinessInfoId++;
      this.businessInfo = { ...info, id };
    }
    return this.businessInfo;
  }
}

export const storage = new MemStorage();
