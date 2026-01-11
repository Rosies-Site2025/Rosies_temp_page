import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: "Privacy Policy | Rosie's Janitorial Services",
  description: "Privacy policy for Rosie's Janitorial Services - Learn how we collect, use, and protect your information."
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="bg-neutral-950 text-white pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Legal</p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-4">Privacy Policy</h1>
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
                  At Rosie's Janitorial Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                </p>
              </div>

              <article className="prose prose-neutral max-w-none">
                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-medium text-neutral-800 mt-8 mb-3">Personal Information</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  When you contact us or request our services, we may collect:
                </p>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name and address</li>
                  <li>Service location details</li>
                </ul>

                <h3 className="text-xl font-medium text-neutral-800 mt-8 mb-3">Automatically Collected Information</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>IP address and browser type</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">How We Use Your Information</h2>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>Provide and improve our janitorial services</li>
                  <li>Respond to your inquiries and service requests</li>
                  <li>Send service updates and appointment reminders</li>
                  <li>Improve our website and customer experience</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Information Sharing</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only:
                </p>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li><strong>Service Providers:</strong> Trusted third-party services that assist our operations</li>
                  <li><strong>Legal Requirements:</strong> When required by law or court order</li>
                  <li><strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets</li>
                  <li><strong>Protection:</strong> To protect our rights, property, or safety</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Data Security</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li>Secure data encryption during transmission</li>
                  <li>Regular security assessments</li>
                  <li>Limited access to personal information by authorized personnel only</li>
                  <li>Employee training on data protection practices</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Your Rights</h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="text-neutral-600 space-y-2 ml-6 mb-6 list-disc">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                </ul>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">California Privacy Rights</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to non-discrimination for exercising your privacy rights.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Changes to This Policy</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website with a new "Last Updated" date.
                </p>

                <h2 className="text-2xl font-semibold text-neutral-900 mt-12 mb-4">Contact Us</h2>
                <div className="bg-neutral-100 p-6 mb-6">
                  <p className="text-neutral-900 font-semibold mb-2">Rosie's Janitorial Services</p>
                  <p className="text-neutral-600 mb-1">Email: <a href="mailto:rosiesjanitorial@yahoo.com" className="text-neutral-900 hover:underline">rosiesjanitorial@yahoo.com</a></p>
                  <p className="text-neutral-600 mb-1">Phone: <a href="tel:949-687-8297" className="text-neutral-900 hover:underline">(949) 687-8297</a></p>
                  <p className="text-neutral-600">Location: Serving Orange County, California</p>
                </div>

                <div className="bg-neutral-100 border-l-2 border-neutral-900 p-6">
                  <p className="text-neutral-700">
                    By using our website or services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                  </p>
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
