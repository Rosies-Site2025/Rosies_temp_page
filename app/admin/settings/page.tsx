'use client';

import { useState, useEffect } from 'react';
import { Save, Mail, Calendar, Bell } from 'lucide-react';
import { supabase, Client, Settings } from '@/lib/supabase';

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [settingsRes, clientsRes] = await Promise.all([
      supabase.from('settings').select('*').single(),
      supabase.from('clients').select('*').order('invoice_day')
    ]);
    
    if (settingsRes.data) setSettings(settingsRes.data);
    if (clientsRes.data) setClients(clientsRes.data);
    setLoading(false);
  };

  const handleSave = async () => {
    if (!settings) return;
    setSaving(true);

    const { error } = await supabase
      .from('settings')
      .update({
        auto_invoice_enabled: settings.auto_invoice_enabled,
        default_invoice_day: settings.default_invoice_day,
        email_reminders: settings.email_reminders,
        reminder_days_before: settings.reminder_days_before,
        company_name: settings.company_name,
        company_email: settings.company_email,
        company_phone: settings.company_phone,
        company_address: settings.company_address,
        invoice_notes: settings.invoice_notes,
        payment_terms: settings.payment_terms
      })
      .eq('id', settings.id);

    setSaving(false);
    if (error) {
      console.error('Error saving settings:', error);
      return;
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const today = new Date().getDate();
  const clientsDueToday = clients.filter(c => c.invoice_day === today);

  if (loading || !settings) {
    return <div className="text-neutral-500">Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Settings</h1>
          <p className="text-neutral-500">Configure invoicing and notifications</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
        >
          <Save size={18} /> {saved ? 'Saved!' : saving ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Auto Invoice Settings */}
          <div className="bg-white border border-neutral-200">
            <div className="p-4 border-b border-neutral-200 flex items-center gap-3">
              <Calendar size={20} className="text-neutral-500" />
              <h2 className="font-semibold text-neutral-900">Auto Invoice Scheduling</h2>
            </div>
            <div className="p-4 space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={settings.auto_invoice_enabled}
                  onChange={(e) => setSettings({ ...settings, auto_invoice_enabled: e.target.checked })}
                  className="w-5 h-5 accent-neutral-900"
                />
                <span className="text-neutral-700">Enable automatic invoice generation</span>
              </label>
              <p className="text-sm text-neutral-500">
                When enabled, invoices will be automatically created for each client on their specified invoice day.
              </p>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Default Invoice Day</label>
                <select
                  value={settings.default_invoice_day}
                  onChange={(e) => setSettings({ ...settings, default_invoice_day: parseInt(e.target.value) })}
                  className="w-full max-w-xs px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                >
                  {[...Array(28)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}{getOrdinalSuffix(i + 1)} of each month</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Email Settings */}
          <div className="bg-white border border-neutral-200">
            <div className="p-4 border-b border-neutral-200 flex items-center gap-3">
              <Mail size={20} className="text-neutral-500" />
              <h2 className="font-semibold text-neutral-900">Email Notifications</h2>
            </div>
            <div className="p-4 space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={settings.email_reminders}
                  onChange={(e) => setSettings({ ...settings, email_reminders: e.target.checked })}
                  className="w-5 h-5 accent-neutral-900"
                />
                <span className="text-neutral-700">Send payment reminders</span>
              </label>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Remind clients before due date</label>
                <select
                  value={settings.reminder_days_before}
                  onChange={(e) => setSettings({ ...settings, reminder_days_before: parseInt(e.target.value) })}
                  className="w-full max-w-xs px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                >
                  <option value={1}>1 day before</option>
                  <option value={3}>3 days before</option>
                  <option value={5}>5 days before</option>
                  <option value={7}>7 days before</option>
                </select>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-white border border-neutral-200">
            <div className="p-4 border-b border-neutral-200">
              <h2 className="font-semibold text-neutral-900">Company Information</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={settings.company_name}
                    onChange={(e) => setSettings({ ...settings, company_name: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={settings.company_email}
                    onChange={(e) => setSettings({ ...settings, company_email: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={settings.company_phone}
                    onChange={(e) => setSettings({ ...settings, company_phone: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Payment Terms</label>
                  <select
                    value={settings.payment_terms}
                    onChange={(e) => setSettings({ ...settings, payment_terms: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                  >
                    <option value="Due on receipt">Due on receipt</option>
                    <option value="Net 15">Net 15</option>
                    <option value="Net 30">Net 30</option>
                    <option value="Net 45">Net 45</option>
                    <option value="Net 60">Net 60</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Address</label>
                <input
                  type="text"
                  value={settings.company_address}
                  onChange={(e) => setSettings({ ...settings, company_address: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Invoice Notes</label>
                <textarea
                  value={settings.invoice_notes}
                  onChange={(e) => setSettings({ ...settings, invoice_notes: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none resize-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-neutral-200">
            <div className="p-4 border-b border-neutral-200 flex items-center gap-3">
              <Bell size={20} className="text-neutral-500" />
              <h2 className="font-semibold text-neutral-900">Due Today</h2>
            </div>
            <div className="p-4">
              {clientsDueToday.length === 0 ? (
                <p className="text-neutral-500 text-sm">No clients due for invoicing today.</p>
              ) : (
                <div className="space-y-3">
                  {clientsDueToday.map((client) => (
                    <div key={client.id} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                      <div>
                        <div className="font-medium text-neutral-900 text-sm">{client.name}</div>
                        <div className="text-xs text-neutral-500">${Number(client.monthly_rate).toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white border border-neutral-200">
            <div className="p-4 border-b border-neutral-200">
              <h2 className="font-semibold text-neutral-900">Upcoming Invoices</h2>
            </div>
            <div className="p-4">
              {clients.length === 0 ? (
                <p className="text-neutral-500 text-sm">Add clients to see upcoming invoices.</p>
              ) : (
                <div className="space-y-2">
                  {clients.slice(0, 5).map((client) => (
                    <div key={client.id} className="flex items-center justify-between text-sm">
                      <span className="text-neutral-700">{client.name}</span>
                      <span className="text-neutral-500">{client.invoice_day}{getOrdinalSuffix(client.invoice_day)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getOrdinalSuffix(n: number): string {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
}
