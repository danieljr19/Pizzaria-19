import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // Stored in cents
  category: text("category").notNull(), // pizza, drink, sandwich, etc
  subcategory: text("subcategory"), // traditional, special, etc
  imageUrl: text("image_url").notNull(),
  isAvailable: boolean("is_available").notNull().default(true),
});

export const promotions = pgTable("promotions", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  active: boolean("active").notNull().default(true),
});

export const businessInfo = pgTable("business_info", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  whatsapp: text("whatsapp").notNull(),
  instagram: text("instagram"),
  address: text("address"),
  hours: text("hours").notNull(), // JSON stringified object
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({ id: true });
export const insertPromotionSchema = createInsertSchema(promotions).omit({ id: true });
export const insertBusinessInfoSchema = createInsertSchema(businessInfo).omit({ id: true });

export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
export type MenuItem = typeof menuItems.$inferSelect;

export type InsertPromotion = z.infer<typeof insertPromotionSchema>;
export type Promotion = typeof promotions.$inferSelect;

export type InsertBusinessInfo = z.infer<typeof insertBusinessInfoSchema>;
export type BusinessInfo = typeof businessInfo.$inferSelect;

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
