import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
