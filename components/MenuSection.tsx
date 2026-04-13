"use client";

import { useState, useEffect, useRef } from "react";
import { MENU, CATEGORIES, cardBg, fmt } from "@/data/menu";
import { useCart } from "@/context/CartContext";

export default function MenuSection() {
  const [activeCat, setActiveCat] = useState("all");
  const { items, addItem, changeQty } = useCart();
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeCat === "all" ? MENU : MENU.filter((m) => m.cat === activeCat);

  // 2026 Scroll-triggered reveal with IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const cards = gridRef.current?.querySelectorAll(".menu-card");
    cards?.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filtered]);

  const handleCatChange = (id: string) => {
    setActiveCat(id);
    // Reset visible state so new cards animate in
    setTimeout(() => {
      const cards = gridRef.current?.querySelectorAll(".menu-card");
      cards?.forEach((card) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
          },
          { threshold: 0.05 }
        );
        observer.observe(card);
      });
    }, 50);
  };

  return (
    <>
      {/* 2026 Category pills */}
      <div className="cats" id="menu">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`cat-btn${activeCat === cat.id ? " active" : ""}`}
            onClick={() => handleCatChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Bento Menu Grid */}
      <div className="menu-section">
        <h2 className="section-title">🍽️ Цэс</h2>
        <div className="menu-grid" ref={gridRef}>
          {filtered.map((item) => {
            const qty = items[item.id] || 0;
            return (
              <div className="menu-card" key={item.id}>
                <div className="card-img" style={{ background: cardBg(item.cat) }}>
                  {item.popular && <span className="popular-badge">Тренд</span>}
                  {item.isNew && <span className="new-badge">Шинэ</span>}
                  <span style={{ fontSize: 56 }}>{item.emoji}</span>
                </div>
                <div className="card-body">
                  <div className="card-name">{item.name}</div>
                  <div className="card-desc">{item.desc}</div>
                  <div className="card-footer">
                    <div className="card-price">{fmt(item.price)}</div>
                    {qty === 0 ? (
                      <button
                        className="add-btn"
                        onClick={() => addItem(item.id)}
                      >
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
