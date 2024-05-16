import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewItemsSection from "@/components/NewItemsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <ContactSection />
      <NewItemsSection />
      <Footer />
    </main>
  );
}
