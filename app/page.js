import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavMenu from "@/components/NavMenu";
import NewProductBanner from "@/components/NewProductBanner";
import Offers from "@/components/Offers";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main className="flex min-h-screen flex-col justify-between px-4 md:px-8 pt-8 pb-16">
        <Hero />
        <ProductSection />
        <NewProductBanner />
        <Offers />
      </main>
      <Footer />
    </>
  );
}
