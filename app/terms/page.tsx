// app/terms/page.tsx
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Terms of Service | Rosie's Janitorial Services",
  description: "Terms of service for Rosie's Janitorial Services - Review our service terms and conditions."
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-cyan-50 via-white to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-cyan-600">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-lg mb-8">
              <p className="text-cyan-900 font-medium mb-0">
                Welcome to Rosie's Janitorial Services. These Terms of Service govern your use of our website and janitorial services. By using our services, you agree to these terms.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing our website at rosiesjanitorialoc.com or engaging our janitorial services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">2. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rosie's Janitorial Services provides professional commercial cleaning services throughout Orange County, California, including but not limited to:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Office cleaning and maintenance</li>
              <li>Floor care services (carpet cleaning, stripping, waxing, buffing)</li>
              <li>Disinfection and sanitization services</li>
              <li>Day porter services</li>
              <li>Retail space cleaning</li>
              <li>Green cleaning solutions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Specific service details, schedules, and pricing will be outlined in individual service agreements with each client.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">3. Service Agreements and Quotes</h2>
            
            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Quote Requests</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Quotes provided through our website or phone are estimates based on the information provided by the client. Final pricing may be adjusted following an on-site evaluation of the facility.
            </p>

            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Service Contracts</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All commercial cleaning services require a written service agreement outlining:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Scope of services</li>
              <li>Service frequency and schedule</li>
              <li>Pricing and payment terms</li>
              <li>Contract duration and renewal terms</li>
              <li>Cancellation policies</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">4. Payment Terms</h2>

            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-r-lg mb-6">
              <p className="text-cyan-900 font-medium mb-0">
                <strong>Important:</strong> Our website does not process any payments. All payment arrangements are handled directly with our office.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Pricing and Invoicing</h3>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>All prices are quoted in U.S. dollars</li>
              <li>Invoices are issued according to the terms in your service agreement</li>
              <li>Payment terms and methods will be discussed and agreed upon directly with our office</li>
              <li>Payment arrangements are made offline - not through this website</li>
            </ul>

            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Late Payments</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Payment terms, including any late payment policies, will be outlined in your individual service agreement.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">5. Scheduling and Access</h2>
            
            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Service Schedule</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Services will be performed according to the agreed-upon schedule. We will make reasonable efforts to accommodate schedule changes with advance notice.
            </p>

            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Facility Access</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The client is responsible for providing:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Safe and unobstructed access to all areas to be cleaned</li>
              <li>Keys, access codes, or other means of entry</li>
              <li>Working utilities (water, electricity)</li>
              <li>Secure storage space for cleaning supplies and equipment</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">6. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients agree to:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Provide accurate information about the facility and cleaning requirements</li>
              <li>Notify us of any hazardous materials or conditions present</li>
              <li>Secure valuable items and confidential documents</li>
              <li>Remove excessive clutter or debris before scheduled cleaning</li>
              <li>Notify us immediately of any concerns or issues with service</li>
              <li>Maintain appropriate insurance coverage for the facility</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">7. Our Responsibilities and Guarantees</h2>
            
            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Service Quality</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We guarantee:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Professional, trained, and background-checked cleaning staff</li>
              <li>Use of appropriate cleaning products and equipment</li>
              <li>Compliance with industry standards and safety regulations</li>
              <li>100% satisfaction guarantee - we will re-clean any area that doesn't meet expectations</li>
            </ul>

            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Insurance and Bonding</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rosie's Janitorial Services maintains:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>General liability insurance</li>
              <li>Workers' compensation insurance</li>
              <li>Bonding for employee protection</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">8. Liability and Damages</h2>
            
            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Our Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we take great care in providing our services, we are not liable for:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Pre-existing damage to property or equipment</li>
              <li>Damage caused by improper use of the facility or equipment by the client</li>
              <li>Items left unsecured by the client</li>
              <li>Damage from conditions beyond our control (power outages, natural disasters, etc.)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Any claims for damage must be reported within 24 hours of service. Our liability is limited to the lesser of the cost to repair or replace the damaged item, or the amount paid for services during the month in which the damage occurred.
            </p>

            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Client Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Clients are responsible for injuries or damages resulting from:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Failure to disclose hazardous conditions</li>
              <li>Unsafe facility conditions</li>
              <li>Lack of required safety equipment</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">9. Cancellation and Termination</h2>
            
            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">By Client</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Clients may cancel or terminate services according to the terms outlined in their service agreement, typically requiring 30 days written notice. Early termination may result in cancellation fees as specified in the agreement.
            </p>

            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">By Rosie's Janitorial</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to terminate services immediately if:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Payment is significantly past due</li>
              <li>The client violates these terms</li>
              <li>Unsafe or hazardous conditions exist</li>
              <li>The client engages in abusive behavior toward our staff</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">10. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We respect your privacy and confidentiality. Our employees are trained to maintain discretion regarding:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Business operations and proprietary information</li>
              <li>Security codes and access procedures</li>
              <li>Any confidential documents or materials observed during cleaning</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Employees sign confidentiality agreements and are subject to background checks.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">11. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Neither party shall be liable for failure to perform due to causes beyond reasonable control, including but not limited to: acts of God, natural disasters, pandemics, war, terrorism, strikes, government actions, or utility failures.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">12. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content on our website, including text, graphics, logos, images, and software, is the property of Rosie's Janitorial Services and protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our written permission.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">13. Website Use</h2>
            
            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Acceptable Use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit viruses or malicious code</li>
              <li>Attempt unauthorized access to our systems</li>
              <li>Use automated systems to access the website</li>
              <li>Interfere with website operations</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">14. Dispute Resolution</h2>
            
            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms of Service are governed by the laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Dispute Resolution Process</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a dispute:
            </p>
            <ol className="text-gray-700 space-y-2 ml-6 list-decimal mb-6">
              <li>The parties will first attempt to resolve the issue through good-faith negotiations</li>
              <li>If unresolved, the parties agree to mediation in Orange County, California</li>
              <li>If mediation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association</li>
            </ol>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">15. Amendments to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms. We encourage you to review these terms periodically.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">16. Severability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">17. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms of Service, along with any signed service agreement and our Privacy Policy, constitute the entire agreement between you and Rosie's Janitorial Services regarding the use of our services and supersede all prior agreements and understandings.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">18. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For questions about these Terms of Service, please contact us:
            </p>
            
            <div className="bg-cyan-50 p-6 rounded-lg mb-6">
              <p className="text-cyan-900 font-semibold mb-2">Rosie's Janitorial Services</p>
              <p className="text-cyan-800 mb-1">
                <strong>Email:</strong> <a href="mailto:info@rosiesjanitorialoc.com" className="text-cyan-600 hover:text-cyan-700">info@rosiesjanitorialoc.com</a>
              </p>
              <p className="text-cyan-800 mb-1">
                <strong>Phone:</strong> <a href="tel:949-687-8297" className="text-cyan-600 hover:text-cyan-700">(949) 687-8297</a>
              </p>
              <p className="text-cyan-800">
                <strong>Location:</strong> Serving Orange County, California
              </p>
            </div>

            <div className="bg-cyan-100 border-l-4 border-cyan-600 p-6 rounded-r-lg">
              <p className="text-cyan-900 font-medium mb-0">
                By using our services or website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}