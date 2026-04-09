import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BrandStory from "@/components/sections/BrandStory";
import FiveMinutes from "@/components/sections/FiveMinutes";
import Material from "@/components/sections/Material";
import Products from "@/components/sections/Products";
import SpaceBegins from "@/components/sections/SpaceBegins";
import Why from "@/components/sections/Why";
import CTA from "@/components/sections/CTA";
import Cursor from "@/components/ui/Cursor";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <BrandStory />
        <FiveMinutes />
        <Material />
        <Products />
        <SpaceBegins />
        <Why />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
