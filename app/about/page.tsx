// app/about/page.tsx
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import AboutSection from '@/app/components/AboutSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white-50 via-white to-cyan-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center gap-4 mb-6">
<img
  src="/icons_dana/woman.png"
  alt="About Icon"
  className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
/>              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-cyan-900 leading-tight">
                About Rosie's Janitorial Services
              </h1>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-cyan-600 px-4">
              A women-owned business committed to excellence in commercial cleaning since 2009
            </p>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <Footer />
    </main>
  );
}