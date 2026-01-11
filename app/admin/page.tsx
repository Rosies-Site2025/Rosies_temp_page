'use client';

import { useState, useEffect } from 'react';
import { Users, FileText, DollarSign, Calendar } from 'lucide-react';
import { supabase, Client, Invoice } from '@/lib/supabase';

export default function AdminDashboard() {
  const [clients, setClients] = useState<Client[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [clientsRes, invoicesRes] = await Promise.all([
      supabase.from('clients').select('*').order('created_at', { ascending: false }),
      supabase.from('invoices').select('*').order('created_at', { ascending: false })
    ]);
    
    if (clientsRes.data) setClients(clientsRes.data);
    if (invoicesRes.data) setInvoices(invoicesRes.data);
    setLoading(false);
  };

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const stats = [
    { label: 'Total Clients', value: clients.length, icon: Users, color: 'bg-blue-500' },
    { 
      label: 'Invoices This Month', 
      value: invoices.filter(i => {
        const d = new Date(i.created_at);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      }).length, 
      icon: FileText, 
      color: 'bg-green-500' 
    },
    { 
      label: 'Revenue This Month', 
      value: `$${invoices
        .filter(i => {
          const d = new Date(i.created_at);
          return i.status === 'paid' && d.getMonth() === currentMonth && d.getFullYear() === currentYear;
        })
        .reduce((sum, i) => sum + Number(i.amount), 0)
        .toLocaleString()}`, 
      icon: DollarSign, 
      color: 'bg-purple-500' 
    },
    { label: 'Pending Invoices', value: invoices.filter(i => i.status === 'sent').length, icon: Calendar, color: 'bg-orange-500' },
  ];

  const recentInvoices = invoices.slice(0, 5);

  if (loading) {
    return <div className="text-neutral-500">Loading...</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Dashboard</h1>
        <p className="text-neutral-500">Welcome back to Rosie's Janitorial admin panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 border border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.color} rounded flex items-center justify-center`}>
                <stat.icon size={20} className="text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
            <div className="text-sm text-neutral-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-neutral-200">
          <div className="p-4 border-b border-neutral-200">
            <h2 className="font-semibold text-neutral-900">Recent Invoices</h2>
          </div>
          <div className="p-4">
            {recentInvoices.length === 0 ? (
              <p className="text-neutral-500 text-sm">No invoices yet. Create your first invoice from the Invoices page.</p>
            ) : (
              <div className="space-y-3">
                {recentInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                    <div>
                      <div className="font-medium text-neutral-900">{invoice.client_name}</div>
                      <div className="text-sm text-neutral-500">${Number(invoice.amount).toLocaleString()}</div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      invoice.status === 'paid' ? 'bg-green-100 text-green-700' :
                      invoice.status === 'sent' ? 'bg-blue-100 text-blue-700' :
                      invoice.status === 'overdue' ? 'bg-red-100 text-red-700' :
                      'bg-neutral-100 text-neutral-700'
                    }`}>
                      {invoice.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-neutral-200">
          <div className="p-4 border-b border-neutral-200">
            <h2 className="font-semibold text-neutral-900">Quick Actions</h2>
          </div>
          <div className="p-4 space-y-3">
            <a href="/admin/clients" className="block p-4 border border-neutral-200 hover:border-neutral-400 transition-colors">
              <div className="font-medium text-neutral-900">Add New Client</div>
              <div className="text-sm text-neutral-500">Register a new client for invoicing</div>
            </a>
            <a href="/admin/invoices" className="block p-4 border border-neutral-200 hover:border-neutral-400 transition-colors">
              <div className="font-medium text-neutral-900">Create Invoice</div>
              <div className="text-sm text-neutral-500">Generate a new invoice for a client</div>
            </a>
            <a href="/admin/leads" className="block p-4 border border-neutral-200 hover:border-neutral-400 transition-colors">
              <div className="font-medium text-neutral-900">Find Leads</div>
              <div className="text-sm text-neutral-500">Search for potential clients</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
