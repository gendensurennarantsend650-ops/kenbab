"use client";

import { useState } from "react";
import { MENU, CATEGORIES, cardBg, fmt } from "@/data/menu";
import { useCart } from "@/context/CartContext";

export default function MenuSection() {
  const [activeCat, setActiveCat] = useState("all");
  const { items, addItem, changeQty } = useCart();

  const filtered = activeCat === "all" ? MENU : MENU.filter((m) => m.cat === activeCat);

  return (
    <>
      {/* Categories */}
      <div className="cats" id="menu">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`cat-btn${activeCat === cat.id ? " active" : ""}`}
            onClick={() => setActiveCat(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="menu-section">
        <h2 className="section-title">🍽️ Цэс</h2>
        <div className="menu-grid">
          {filtered.map((item) => {
            const qty = items[item.id] || 0;
            return (
              <div className="menu-card" key={item.id}>
                <div className="card-img" style={{ background: cardBg(item.cat) }}>
                  {item.popular && <span className="popular-badge">Тренд</span>}
                  {item.isNew && <span className="new-badge">Шинэ</span>}
                  <span style={{ fontSize: 52 }}>{item.emoji}</span>
                </div>
                <div className="card-body">
                  <div className="card-name">{item.name}</div>
                  <div className="card-desc">{item.desc}</div>
                  <div className="card-footer">
                    <div className="card-price">{fmt(item.price)}</div>
                    {qty === 0 ? (
                      <button className="add-btn" onClick={() => addItem(item.id)}>
                        + Нэмэх
                      </button>
                    ) : (
                      <div className="qty-ctrl">
                        <button className="qty-btn" onClick={() => changeQty(item.id, -1)}>−</button>
                        <span className="qty-num">{qty}</span>
                        <button className="qty-btn" onClick={() => changeQty(item.id, 1)}>+</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
