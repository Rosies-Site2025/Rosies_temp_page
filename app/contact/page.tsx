// app/contact/page.tsx
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import ContactSection from '@/app/components/ContactSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-cyan-50 via-white to-white-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-8xl font-bold text-cyan-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-violet-400">
              Get in touch to discuss your commercial cleaning needs and receive a free, no-obligation quote
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}