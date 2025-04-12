import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes - prefix all routes with /api
  
  // Get all menu items
  app.get("/api/menu", async (req, res) => {
    try {
      const menuItems = await storage.getMenuItems();
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });

  // Get menu items by category
  app.get("/api/menu/:category", async (req, res) => {
    try {
      const category = req.params.category;
      const menuItems = await storage.getMenuItemsByCategory(category);
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu items by category" });
    }
  });

  // Get a specific menu item
  app.get("/api/menu/item/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID" });
      }
      
      const menuItem = await storage.getMenuItem(id);
      if (!menuItem) {
        return res.status(404).json({ message: "Menu item not found" });
      }
      
      res.json(menuItem);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch menu item" });
    }
  });

  // Get all promotions
  app.get("/api/promotions", async (req, res) => {
    try {
      const promotions = await storage.getPromotions();
      res.json(promotions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch promotions" });
    }
  });

  // Get active promotions
  app.get("/api/promotions/active", async (req, res) => {
    try {
      const promotions = await storage.getActivePromotions();
      res.json(promotions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch active promotions" });
    }
  });

  // Get business info
  app.get("/api/business", async (req, res) => {
    try {
      const businessInfo = await storage.getBusinessInfo();
      if (!businessInfo) {
        return res.status(404).json({ message: "Business info not found" });
      }
      
      res.json(businessInfo);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch business info" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
