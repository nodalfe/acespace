import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import BrandStory from "@/components/sections/BrandStory";
import FiveMinutes from "@/components/sections/FiveMinutes";
import Material from "@/components/sections/Material";
import Products from "@/components/sections/Products";
import SpaceBegins from "@/components/sections/SpaceBegins";
import Why from "@/components/sections/Why";
import CTA from "@/components/sections/CTA";
import Cursor from "@/components/ui/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <BrandStory />
        <FiveMinutes />
        <Material />
        <Products />
        <SpaceBegins />
        <Why />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
