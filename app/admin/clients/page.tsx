'use client';

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import { supabase, Client } from '@/lib/supabase';

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', service_type: '', monthly_rate: '', invoice_day: '1'
  });

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const { data, error } = await supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setClients(data);
    if (error) console.error('Error fetching clients:', error);
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const clientData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      service_type: formData.service_type,
      monthly_rate: parseFloat(formData.monthly_rate) || 0,
      invoice_day: parseInt(formData.invoice_day) || 1
    };

    if (editingClient) {
      const { error } = await supabase
        .from('clients')
        .update(clientData)
        .eq('id', editingClient.id);
      
      if (error) {
        console.error('Error updating client:', error);
        return;
      }
    } else {
      const { error } = await supabase
        .from('clients')
        .insert([clientData]);
      
      if (error) {
        console.error('Error creating client:', error);
        return;
      }
    }

    fetchClients();
    closeModal();
  };

  const handleEdit = (client: Client) => {
    setEditingClient(client);
    setFormData({
      name: client.name,
      email: client.email,
      phone: client.phone || '',
      address: client.address || '',
      service_type: client.service_type || '',
      monthly_rate: client.monthly_rate.toString(),
      invoice_day: client.invoice_day.toString()
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this client?')) return;
    
    const { error } = await supabase
      .from('clients')
      .delete()
      .eq('id', id);
    
    if (error) {
      console.error('Error deleting client:', error);
      return;
    }
    
    fetchClients();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingClient(null);
    setFormData({ name: '', email: '', phone: '', address: '', service_type: '', monthly_rate: '', invoice_day: '1' });
  };

  if (loading) {
    return <div className="text-neutral-500">Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Clients</h1>
          <p className="text-neutral-500">Manage your client database</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
        >
          <Plus size={18} /> Add Client
        </button>
      </div>

      {/* Clients Table */}
      <div className="bg-white border border-neutral-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Name</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Contact</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Service</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Monthly Rate</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Invoice Day</th>
                <th className="text-right px-4 py-3 text-sm font-medium text-neutral-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-neutral-500">
                    No clients yet. Add your first client to get started.
                  </td>
                </tr>
              ) : (
                clients.map((client) => (
                  <tr key={client.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-neutral-900">{client.name}</div>
                      <div className="text-sm text-neutral-500">{client.address}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-sm text-neutral-900">{client.email}</div>
                      <div className="text-sm text-neutral-500">{client.phone}</div>
                    </td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{client.service_type}</td>
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900">${Number(client.monthly_rate).toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">{client.invoice_day}th</td>
                    <td className="px-4 py-3 text-right">
                      <button onClick={() => handleEdit(client)} className="p-2 text-neutral-500 hover:text-neutral-900">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(client.id)} className="p-2 text-neutral-500 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-lg">
            <div className="flex items-center justify-between p-4 border-b border-neutral-200">
              <h2 className="text-lg font-semibold text-neutral-900">
                {editingClient ? 'Edit Client' : 'Add New Client'}
              </h2>
              <button onClick={closeModal} className="text-neutral-500 hover:text-neutral-900">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Address</label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1">Service Type</label>
                <select
                  value={formData.service_type}
                  onChange={(e) => setFormData({ ...formData, service_type: e.target.value })}
                  className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                >
                  <option value="">Select service...</option>
                  <option value="Office Cleaning">Office Cleaning</option>
                  <option value="Floor Care">Floor Care</option>
                  <option value="Medical Facility">Medical Facility</option>
                  <option value="Retail Cleaning">Retail Cleaning</option>
                  <option value="Day Porter">Day Porter</option>
                  <option value="Green Cleaning">Green Cleaning</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Monthly Rate ($)</label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={formData.monthly_rate}
                    onChange={(e) => setFormData({ ...formData, monthly_rate: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Invoice Day of Month</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="28"
                    value={formData.invoice_day}
                    onChange={(e) => setFormData({ ...formData, invoice_day: e.target.value })}
                    className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
                >
                  {editingClient ? 'Update' : 'Add Client'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
