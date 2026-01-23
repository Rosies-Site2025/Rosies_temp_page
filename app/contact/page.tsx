'use client';

import { useState, FormEvent } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        const data = await response.json();
        setErrorMessage(data.error || 'Something went wrong');
        setStatus('error');
      }
    } catch {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-neutral-950 text-white pt-32 pb-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">Contact</p>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6">Let's talk</h1>
              <p className="text-xl text-neutral-400 max-w-2xl">
                Get a free, no-obligation quote for your facility. We respond to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl text-neutral-900 mb-8">Get in touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center">
                      <Phone size={20} className="text-neutral-700" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Phone</div>
                      <a href="tel:+19496878297" className="text-xl text-neutral-900 font-semibold hover:underline">
                        (949) 687-8297
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center">
                      <Mail size={20} className="text-neutral-700" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Email</div>
                      <a href="mailto:info@rosiesjanitorialoc.com" className="text-xl text-neutral-900 font-semibold hover:underline">
                        info@rosiesjanitorialoc.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-neutral-100 flex items-center justify-center">
                      <MapPin size={20} className="text-neutral-700" />
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Service Area</div>
                      <div className="text-xl text-neutral-900 font-semibold">Orange County, CA</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-neutral-200">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4">Hours</h3>
                  <div className="space-y-2 text-neutral-600">
                    <p>Monday - Friday: 7am - 6pm</p>
                    <p>Saturday: 8am - 2pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-neutral-50 p-8 md:p-10">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="text-2xl font-semibold text-neutral-900 mb-2">Message sent</div>
                    <p className="text-neutral-600">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Name *"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-neutral-300 focus:border-neutral-900 focus:outline-none text-neutral-900 placeholder:text-neutral-400"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <input
                        type="email"
                        placeholder="Email *"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-neutral-300 focus:border-neutral-900 focus:outline-none text-neutral-900 placeholder:text-neutral-400"
                      />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-neutral-300 focus:border-neutral-900 focus:outline-none text-neutral-900 placeholder:text-neutral-400"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-neutral-300 focus:border-neutral-900 focus:outline-none text-neutral-900 placeholder:text-neutral-400"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Tell us about your facility and cleaning needs"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-0 py-4 bg-transparent border-0 border-b border-neutral-300 focus:border-neutral-900 focus:outline-none text-neutral-900 placeholder:text-neutral-400 resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-600 text-sm">{errorMessage}</p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-neutral-900 text-white font-semibold hover:bg-neutral-800 transition-colors disabled:opacity-50"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>

                    <p className="text-xs text-neutral-500 text-center">
                      By submitting, you agree to our{' '}
                      <a href="/privacy-policy" className="underline">Privacy Policy</a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
