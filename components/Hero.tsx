"use client";

import Link from "next/link";

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#D4891A">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Дархан-Уул аймгийн шилдэг хоолны газар
        </div>
        <h1>
          Амт, дулаан,<br />
          <span>Дүүрэн цадсан</span>
        </h1>
        <p>
          Гэрийн дулаан орчинд, чанартай орц бүхий монгол хоолыг Дархан хотоор хүргэж өгнө.
          Бууз, цуйван, шөл — бүх зүйл шинэхэн.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={scrollToMenu}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <path d="M9 12h6M9 16h4" />
            </svg>
            Цэс харах
          </button>
          <Link href="https://t.me/Bannerbairluul" target="_blank" className="btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.12 14.9 3.16 13.99c-.652-.204-.665-.652.137-.964l10.91-4.207c.543-.194 1.018.131.844.964z" />
            </svg>
            Telegram захиалах
          </Link>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat-card">
          <div className="stat-num">4.9</div>
          <div className="stat-label">★ Үнэлгээ</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">30м</div>
          <div className="stat-label">Хүргэлт</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">50+</div>
          <div className="stat-label">Хоолны зүйл</div>
        </div>
      </div>
    </div>
  );
}
