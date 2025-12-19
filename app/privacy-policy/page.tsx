// app/privacy-policy/page.tsx
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Privacy Policy | Rosie's Janitorial Services",
  description: "Privacy policy for Rosie's Janitorial Services - Learn how we collect, use, and protect your information."
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-cyan-50 via-white to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-cyan-900 mb-6">
              Privacy Policy
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
                At Rosie's Janitorial Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you contact us or request our services, we may collect the following personal information:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name and address</li>
              <li>Service location details</li>
            </ul>

            <h3 className="text-2xl font-semibold text-cyan-800 mt-8 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we may automatically collect:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Provide and improve our janitorial services</li>
              <li>Respond to your inquiries and service requests</li>
              <li>Send service updates and appointment reminders</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (e.g., email services, scheduling software).</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law, court order, or government request.</li>
              <li><strong>Business Transfers:</strong> If our company is involved in a merger, acquisition, or sale of assets, your information may be transferred.</li>
              <li><strong>Protection:</strong> We may disclose information to protect our rights, property, or safety, or that of our customers or others.</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>Secure data encryption during transmission</li>
              <li>Regular security assessments</li>
              <li>Limited access to personal information by authorized personnel only</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a structured format</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              To exercise any of these rights, please contact us at <a href="mailto:info@rosiesjanitorialoc.com" className="text-cyan-600 hover:text-cyan-700 font-medium">info@rosiesjanitorialoc.com</a> or call <a href="tel:949-687-8297" className="text-cyan-600 hover:text-cyan-700 font-medium">(949) 687-8297</a>.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">California Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul className="text-gray-700 space-y-2 ml-6 mb-6">
              <li>The right to know what personal information is collected, used, shared, or sold</li>
              <li>The right to delete personal information</li>
              <li>The right to opt-out of the sale of personal information (we do not sell your information)</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-3xl font-bold text-cyan-900 mt-12 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
                By using our website or services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}