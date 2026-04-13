"use client";

import { createContext, useContext, useState } from "react";
import { useCart } from "@/context/CartContext";
import { MENU, fmt } from "@/data/menu";
import OrderModal from "@/components/OrderModal";

/* ---- Shared open/close context so Navbar can open the drawer ---- */
interface DrawerCtx {
  openCart: () => void;
  closeCart: () => void;
  openOrder: () => void;
}

const DrawerContext = createContext<DrawerCtx>({
  openCart: () => {},
  closeCart: () => {},
  openOrder: () => {},
});

export function useCartDrawer() {
  return useContext(DrawerContext);
}

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const { items, totalCount, totalAmount, changeQty } = useCart();

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const openOrder = () => { setOrderOpen(true); setIsOpen(false); };

  return (
    <DrawerContext.Provider value={{ openCart, closeCart, openOrder }}>
      {/* overlay */}
      <div
        className={`cart-overlay${isOpen ? " visible" : ""}`}
        onClick={closeCart}
      />

      {/* drawer */}
      <div className={`cart-drawer${isOpen ? " open" : ""}`}>
        <div className="cart-head">
          <div>
            <h3>Захиалгын сагс</h3>
            <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{totalCount} бараа</div>
          </div>
          <button className="close-btn" onClick={closeCart}>✕</button>
        </div>

        <div className="cart-body">
          {totalCount === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">🛍️</div>
              <div>Сагс хоосон байна</div>
              <div style={{ fontSize: 11, marginTop: 6 }}>Хоол нэмж захиалаарай</div>
            </div>
          ) : (
            Object.entries(items).map(([id, q]) => {
              const item = MENU.find((m) => m.id === Number(id));
              if (!item) return null;
              return (
                <div className="cart-item" key={id}>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.emoji} {item.name}</div>
                    <div className="cart-item-price">{fmt(item.price * q)} ({q}ш)</div>
                  </div>
                  <div className="qty-ctrl" style={{ flexShrink: 0 }}>
                    <button className="qty-btn" onClick={() => changeQty(Number(id), -1)}>−</button>
                    <span className="qty-num">{q}</span>
                    <button className="qty-btn" onClick={() => changeQty(Number(id), 1)}>+</button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {totalCount > 0 && (
          <div className="cart-foot">
            <div className="cart-total">
              <span className="cart-total-label">Нийт дүн:</span>
              <span className="cart-total-amt">{fmt(totalAmount)}</span>
            </div>
            <button className="order-btn" onClick={openOrder}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.12 14.9 3.16 13.99c-.652-.204-.665-.652.137-.964l10.91-4.207c.543-.194 1.018.131.844.964z" />
              </svg>
              Telegram-ээр захиалах
            </button>
          </div>
        )}
      </div>

      <OrderModal isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
    </DrawerContext.Provider>
  );
}
