'use client';

import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left - Info */}
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Contact</p>
            <h2 className="text-4xl md:text-5xl text-neutral-900 leading-tight mb-6">
              Let's discuss your cleaning needs
            </h2>
            <p className="text-lg text-neutral-600 mb-12">
              Get a free, no-obligation quote for your facility. We respond to all inquiries within 24 hours.
            </p>

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
                  <a href="mailto:rosiesjanitorial@yahoo.com" className="text-xl text-neutral-900 font-semibold hover:underline">
                    rosiesjanitorial@yahoo.com
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
          </div>

          {/* Right - Form */}
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
  );
}
