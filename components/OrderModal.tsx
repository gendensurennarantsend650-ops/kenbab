"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: Props) {
  const { getOrderSummary } = useCart();

  return (
    <div className={`modal-overlay${isOpen ? " show" : ""}`}>
      <div className="modal">
        <h3>🎉 Захиалга баталгаажуулах</h3>
        <p>Доорх захиалгаа Telegram-д хуулж Дүүрэн ресторанд илгээнэ үү.</p>
        <div className="order-summary">{getOrderSummary()}</div>
        <div className="modal-actions">
          <Link href="https://t.me/Bannerbairluul" target="_blank" className="modal-tg">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.12 14.9 3.16 13.99c-.652-.204-.665-.652.137-.964l10.91-4.207c.543-.194 1.018.131.844.964z" />
            </svg>
            Telegram нээх — @Bannerbairluul
          </Link>
          <Link href="tel:99376238" className="modal-call">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Утсаар залгах — 99376238
          </Link>
          <button className="modal-close" onClick={onClose}>Буцах</button>
        </div>
      </div>
    </div>
  );
}
