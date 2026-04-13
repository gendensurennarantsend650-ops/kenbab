import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">ДҮҮРЭН</div>
      <div className="footer-sub">ДАРХАН-УУЛ АЙМАГ · ХООЛНЫ ГАЗАР</div>
      <div className="footer-links">
        <Link href="tel:99376238">📞 99376238</Link>
        <Link href="https://t.me/Bannerbairluul" target="_blank">✈️ Telegram</Link>
      </div>
      <div className="footer-copy">© 2026 Дүүрэн ресторан. Бүх эрх хуулиар хамгаалагдсан.</div>
    </footer>
  );
}
