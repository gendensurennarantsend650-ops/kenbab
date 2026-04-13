"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCartDrawer } from "@/components/CartDrawer";

export default function Navbar() {
  const { totalCount } = useCart();
  const { openCart } = useCartDrawer();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="nav">
      <div className="logo" onClick={scrollToTop}>
        <svg className="logo-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#F5C842" }} />
              <stop offset="100%" style={{ stopColor: "#C8780A" }} />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="195" fill="#1C1308" stroke="url(#g1)" strokeWidth="3" />
          <circle cx="200" cy="200" r="178" fill="none" stroke="#D4891A" strokeWidth="0.8" strokeDasharray="4 3" />
          <path d="M130 215 Q130 268 200 276 Q270 268 270 215 Z" fill="none" stroke="url(#g1)" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="118" y1="215" x2="282" y2="215" stroke="url(#g1)" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M162 272 Q200 282 238 272" fill="none" stroke="#D4891A" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M168 202 Q163 187 168 174 Q173 161 168 148" fill="none" stroke="#F5C842" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <path d="M200 198 Q195 181 200 166 Q205 151 200 138" fill="none" stroke="#F5C842" strokeWidth="3" strokeLinecap="round" />
          <path d="M232 202 Q237 187 232 174 Q227 161 232 148" fill="none" stroke="#F5C842" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <text x="200" y="336" fontFamily="Georgia,serif" fontSize="42" fontWeight="700" fill="url(#g1)" textAnchor="middle" letterSpacing="6">ДҮҮРЭН</text>
        </svg>
        <div className="logo-text">
          <div className="logo-name">ДҮҮРЭН</div>
          <div className="logo-sub">Дархан-Уул аймаг</div>
        </div>
      </div>

      <div className="nav-right">
        <div className="hours-badge">● Нээлттэй 09:00–22:00</div>
        <Link href="tel:99376238" className="btn-call">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          <span>99376238</span>
        </Link>
        <Link href="https://t.me/Bannerbairluul" target="_blank" className="btn-tg">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.12 14.9 3.16 13.99c-.652-.204-.665-.652.137-.964l10.91-4.207c.543-.194 1.018.131.844.964z" />
          </svg>
          Telegram
        </Link>
        <button className="cart-btn" onClick={openCart}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          Сагс
          <span className="cart-count">{totalCount}</span>
        </button>
      </div>
    </nav>
  );
}
