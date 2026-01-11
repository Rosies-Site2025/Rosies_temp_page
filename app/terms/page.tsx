import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Terms of Service | Rosie's Janitorial Services",
  description: "Terms of service for Rosie's Janitorial Services - Review our service terms and conditions."
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-neutral-950 text-white pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Legal</p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-4">Terms of Service</h1>
              <p className="text-neutral-400">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              
              <div className="bg-neutral-100 border-l-2 border-neutral-900 p-6 mb-12">
                <p className="text-neutral-700">
                  Welcome to Rosie's Janitorial Services. These Terms of Service govern your use of our website and janitorial services. By using our services, you agree to these terms.
                </p>
              </div>

              <article className="prose prose-neutral max-w-none">
                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  By accessing our website at rosiesjanitorialoc.com or engaging our janitorial services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">2. Services Description</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Rosie's Janitorial Services provides professional commercial cleaning services throughout Orange County, California, including but not limited to:
                </p>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>Office cleaning and maintenance</li>
                  <li>Floor care services (carpet cleaning, stripping, waxing, buffing)</li>
                  <li>Disinfection and sanitization services</li>
                  <li>Day porter services</li>
                  <li>Retail space cleaning</li>
                  <li>Green cleaning solutions</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">3. Service Agreements and Quotes</h2>
                <h3 className="text-xl font-medium text-neutral-800 mt-8 mb-3">Quote Requests</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Quotes provided through our website or phone are estimates based on the information provided by the client. Final pricing may be adjusted following an on-site evaluation of the facility.
                </p>

                <h3 className="text-xl font-medium text-neutral-800 mt-8 mb-3">Service Contracts</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  All commercial cleaning services require a written service agreement outlining:
                </p>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>Scope of services</li>
                  <li>Service frequency and schedule</li>
                  <li>Pricing and payment terms</li>
                  <li>Contract duration and renewal terms</li>
                  <li>Cancellation policies</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">4. Payment Terms</h2>
                <div className="bg-neutral-100 border-l-2 border-neutral-900 p-6 mb-6">
                  <p className="text-neutral-700">
                    <strong>Important:</strong> Our website does not process any payments. All payment arrangements are handled directly with our office.
                  </p>
                </div>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>All prices are quoted in U.S. dollars</li>
                  <li>Invoices are issued according to the terms in your service agreement</li>
                  <li>Payment terms and methods will be discussed and agreed upon directly with our office</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">5. Scheduling and Access</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  The client is responsible for providing:
                </p>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>Safe and unobstructed access to all areas to be cleaned</li>
                  <li>Keys, access codes, or other means of entry</li>
                  <li>Working utilities (water, electricity)</li>
                  <li>Secure storage space for cleaning supplies and equipment</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">6. Client Responsibilities</h2>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>Provide accurate information about the facility and cleaning requirements</li>
                  <li>Notify us of any hazardous materials or conditions present</li>
                  <li>Secure valuable items and confidential documents</li>
                  <li>Remove excessive clutter or debris before scheduled cleaning</li>
                  <li>Notify us immediately of any concerns or issues with service</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">7. Our Guarantees</h2>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>Professional, trained, and background-checked cleaning staff</li>
                  <li>Use of appropriate cleaning products and equipment</li>
                  <li>Compliance with industry standards and safety regulations</li>
                  <li>100% satisfaction guarantee - we will re-clean any area that doesn't meet expectations</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">8. Insurance and Bonding</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Rosie's Janitorial Services maintains general liability insurance, workers' compensation insurance, and bonding for employee protection.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">9. Liability</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We are not liable for pre-existing damage, items left unsecured, or damage from conditions beyond our control. Claims must be reported within 24 hours of service.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">10. Cancellation</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Clients may cancel services according to their service agreement, typically requiring 30 days written notice. We reserve the right to terminate services for non-payment, unsafe conditions, or violations of these terms.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">11. Governing Law</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  These Terms of Service are governed by the laws of the State of California.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">12. Contact</h2>
                <div className="bg-neutral-100 p-6 mb-6">
                  <p className="text-neutral-900 font-semibold mb-2">Rosie's Janitorial Services</p>
                  <p className="text-neutral-600 mb-1">Email: <a href="mailto:rosiesjanitorial@yahoo.com" className="text-neutral-900 hover:underline">rosiesjanitorial@yahoo.com</a></p>
                  <p className="text-neutral-600 mb-1">Phone: <a href="tel:949-687-8297" className="text-neutral-900 hover:underline">(949) 687-8297</a></p>
                  <p className="text-neutral-600">Location: Serving Orange County, California</p>
                </div>
              </article>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
