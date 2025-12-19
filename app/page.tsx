// app/page.tsx
import Navigation from '@/app/components/Navigation';

import HeroSection from '@/app/components/HeroSection';
import  ServicesSection  from '@/app/components/ServicesSection'
import  WhyChooseUsSection  from "@/app/components/WhyChooseUsSection";
import ServiceAreasSection from '@/app/components/ServiceAreasSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />


      {/* HERO SECTION — SEPARATE */}
      <HeroSection />

      <ServicesSection />
      <WhyChooseUsSection />
      <ServiceAreasSection />
      <ContactSection />
      <Footer />
    </main>
  );
}