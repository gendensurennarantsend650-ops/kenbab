"use client";

import React, { createContext, useContext, useReducer } from "react";
import { MENU, fmt } from "@/data/menu";

export interface CartItem {
  id: number;
  qty: number;
}

interface CartState {
  items: Record<number, number>; // id -> qty
}

type CartAction =
  | { type: "ADD"; id: number }
  | { type: "CHANGE"; id: number; delta: number };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      return { items: { ...state.items, [action.id]: (state.items[action.id] || 0) + 1 } };
    }
    case "CHANGE": {
      const newQty = (state.items[action.id] || 0) + action.delta;
      if (newQty <= 0) {
        const next = { ...state.items };
        delete next[action.id];
        return { items: next };
      }
      return { items: { ...state.items, [action.id]: newQty } };
    }
    default:
      return state;
  }
}

interface CartContextType {
  items: Record<number, number>;
  totalCount: number;
  totalAmount: number;
  addItem: (id: number) => void;
  changeQty: (id: number, delta: number) => void;
  getOrderSummary: () => string;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: {} });

  const totalCount = Object.values(state.items).reduce((s, v) => s + v, 0);
  const totalAmount = Object.entries(state.items).reduce((s, [id, q]) => {
    const item = MENU.find((m) => m.id === Number(id));
    return s + (item ? item.price * q : 0);
  }, 0);

  const addItem = (id: number) => dispatch({ type: "ADD", id });
  const changeQty = (id: number, delta: number) => dispatch({ type: "CHANGE", id, delta });

  const getOrderSummary = () => {
    const lines = Object.entries(state.items)
      .map(([id, q]) => {
        const item = MENU.find((m) => m.id === Number(id));
        return item ? `• ${item.name} x${q} — ${fmt(item.price * q)}` : "";
      })
      .filter(Boolean);
    return `🍽️ Дүүрэн ресторан захиалга\n\n${lines.join("\n")}\n\nНийт дүн: ${fmt(totalAmount)}\n📞 Утас: 99376238`;
  };

  return (
    <CartContext.Provider value={{ items: state.items, totalCount, totalAmount, addItem, changeQty, getOrderSummary }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
