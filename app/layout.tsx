import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Дүүрэн | Дархан-Уул аймаг",
  description: "Дархан-Уул аймгийн шилдэг хоолны газар. Бууз, цуйван, шөл — бүх зүйл шинэхэн.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mn">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
