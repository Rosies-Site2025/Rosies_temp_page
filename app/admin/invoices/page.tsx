'use client';

import { useState, useEffect } from 'react';
import { Plus, Send, Eye, X, Check, Trash2, Edit2, Copy, RefreshCw } from 'lucide-react';
import { supabase, Client, Invoice, InvoiceItem } from '@/lib/supabase';

export default function InvoicesPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invoiceType, setInvoiceType] = useState<'client' | 'franchisee'>('client');
  const [previewInvoice, setPreviewInvoice] = useState<{ invoice: Invoice; items?: InvoiceItem[] } | null>(null);
  const [sendingId, setSendingId] = useState<string | null>(null);
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);
  const [saveAsRecurring, setSaveAsRecurring] = useState(false);
  
  // Client invoice form
  const [clientForm, setClientForm] = useState({
    client_id: '', amount: '', service_description: '', due_date: ''
  });

  // Franchisee invoice form
  const [franchiseeForm, setFranchiseeForm] = useState({
    franchisee_email: '', franchisee_name: '', franchisee_address: ''
  });
  const [lineItems, setLineItems] = useState<Array<{ account_name: string; description: string; amount: string; notes: string }>>([
    { account_name: '', description: '', amount: '', notes: '' }
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const [clientsRes, invoicesRes] = await Promise.all([
      supabase.from('clients').select('*').order('name'),
      supabase.from('invoices').select('*').order('created_at', { ascending: false })
    ]);
    
    if (clientsRes.data) setClients(clientsRes.data);
    if (invoicesRes.data) setInvoices(invoicesRes.data);
    setLoading(false);
  };

  const generateInvoiceNumber = () => {
    const year = new Date().getFullYear();
    const count = invoices.filter(i => i.invoice_number.startsWith(`INV-${year}`)).length + 1;
    return `INV-${year}-${String(count).padStart(6, '0')}`;
  };

  const handleClientSelect = (clientId: string) => {
    const client = clients.find(c => c.id === clientId);
    if (client) {
      setClientForm({
        ...clientForm,
        client_id: clientId,
        amount: client.monthly_rate.toString(),
        service_description: `${client.service_type} - Monthly Service`
      });
    }
  };

  const addLineItem = () => {
    setLineItems([...lineItems, { account_name: '', description: '', amount: '', notes: '' }]);
  };

  const removeLineItem = (index: number) => {
    setLineItems(lineItems.filter((_, i) => i !== index));
  };

  const updateLineItem = (index: number, field: string, value: string) => {
    const updated = [...lineItems];
    updated[index] = { ...updated[index], [field]: value };
    setLineItems(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingInvoice && editingInvoice.invoice_type === 'franchisee') {
      // Update existing franchisee invoice
      const totalAmount = lineItems.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
      
      const { error: invoiceError } = await supabase
        .from('invoices')
        .update({
          client_name: franchiseeForm.franchisee_name,
          client_email: franchiseeForm.franchisee_email,
          client_address: franchiseeForm.franchisee_address,
          amount: totalAmount,
          is_recurring: saveAsRecurring
        })
        .eq('id', editingInvoice.id);

      if (invoiceError) {
        console.error('Error updating invoice:', invoiceError);
        return;
      }

      // Delete old items and insert new ones
      await supabase.from('invoice_items').delete().eq('invoice_id', editingInvoice.id);
      
      const items = lineItems.map((item, index) => ({
        invoice_id: editingInvoice.id,
        account_name: item.account_name,
        description: item.description,
        amount: parseFloat(item.amount) || 0,
        notes: item.notes,
        sort_order: index
      }));

      const { error: itemsError } = await supabase.from('invoice_items').insert(items);

      if (itemsError) {
        console.error('Error updating line items:', itemsError);
        return;
      }

      fetchData();
      closeModal();
      return;
    }

    if (invoiceType === 'client') {
      const client = clients.find(c => c.id === clientForm.client_id);
      if (!client) return;

      const { error } = await supabase.from('invoices').insert([{
        invoice_number: generateInvoiceNumber(),
        invoice_type: 'client',
        client_id: client.id,
        client_name: client.name,
        client_email: client.email,
        client_address: client.address,
        amount: parseFloat(clientForm.amount),
        service_description: clientForm.service_description,
        status: 'draft',
        due_date: clientForm.due_date
      }]);

      if (error) {
        console.error('Error creating client invoice:', error);
        return;
      }
    } else {
      // Franchisee invoice
      const totalAmount = lineItems.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
      
      const { data: invoiceData, error: invoiceError } = await supabase
        .from('invoices')
        .insert([{
          invoice_number: generateInvoiceNumber(),
          invoice_type: 'franchisee',
          is_recurring: saveAsRecurring,
          client_id: null,
          client_name: franchiseeForm.franchisee_name,
          client_email: franchiseeForm.franchisee_email,
          client_address: franchiseeForm.franchisee_address,
          amount: totalAmount,
          service_description: 'Monthly Franchisee Invoice',
          status: 'draft',
          due_date: null
        }])
        .select()
        .single();

      if (invoiceError || !invoiceData) {
        console.error('Error creating franchisee invoice:', invoiceError);
        return;
      }

      // Insert line items
      const items = lineItems.map((item, index) => ({
        invoice_id: invoiceData.id,
        account_name: item.account_name,
        description: item.description,
        amount: parseFloat(item.amount) || 0,
        notes: item.notes,
        sort_order: index
      }));

      const { error: itemsError } = await supabase.from('invoice_items').insert(items);

      if (itemsError) {
        console.error('Error creating line items:', itemsError);
        return;
      }
    }

    fetchData();
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingInvoice(null);
    setSaveAsRecurring(false);
    setClientForm({ client_id: '', amount: '', service_description: '', due_date: '' });
    setFranchiseeForm({ franchisee_email: '', franchisee_name: '', franchisee_address: '' });
    setLineItems([{ account_name: '', description: '', amount: '', notes: '' }]);
  };

  const handleEdit = async (invoice: Invoice) => {
    if (invoice.invoice_type !== 'franchisee') return;

    setEditingInvoice(invoice);
    setInvoiceType('franchisee');
    setSaveAsRecurring(invoice.is_recurring);
    
    setFranchiseeForm({
      franchisee_name: invoice.client_name,
      franchisee_email: invoice.client_email,
      franchisee_address: invoice.client_address || ''
    });

    const { data: items } = await supabase
      .from('invoice_items')
      .select('*')
      .eq('invoice_id', invoice.id)
      .order('sort_order');

    if (items && items.length > 0) {
      setLineItems(items.map(item => ({
        account_name: item.account_name,
        description: item.description || '',
        amount: item.amount.toString(),
        notes: item.notes || ''
      })));
    }

    setIsModalOpen(true);
  };

  const handleDuplicate = async (invoice: Invoice) => {
    if (invoice.invoice_type !== 'franchisee') return;

    const { data: items } = await supabase
      .from('invoice_items')
      .select('*')
      .eq('invoice_id', invoice.id)
      .order('sort_order');

    const totalAmount = items?.reduce((sum, item) => sum + Number(item.amount), 0) || 0;

    const { data: newInvoice, error: invoiceError } = await supabase
      .from('invoices')
      .insert([{
        invoice_number: generateInvoiceNumber(),
        invoice_type: 'franchisee',
        is_recurring: invoice.is_recurring,
        recurring_template_id: invoice.is_recurring ? invoice.id : invoice.recurring_template_id,
        client_id: null,
        client_name: invoice.client_name,
        client_email: invoice.client_email,
        client_address: invoice.client_address,
        amount: totalAmount,
        service_description: 'Monthly Franchisee Invoice',
        status: 'draft',
        due_date: null
      }])
      .select()
      .single();

    if (invoiceError || !newInvoice) {
      console.error('Error duplicating invoice:', invoiceError);
      return;
    }

    if (items) {
      const newItems = items.map((item, index) => ({
        invoice_id: newInvoice.id,
        account_name: item.account_name,
        description: item.description,
        amount: item.amount,
        notes: item.notes,
        sort_order: index
      }));

      await supabase.from('invoice_items').insert(newItems);
    }

    fetchData();
  };

  const handlePreview = async (invoice: Invoice) => {
    if (invoice.invoice_type === 'franchisee') {
      const { data } = await supabase
        .from('invoice_items')
        .select('*')
        .eq('invoice_id', invoice.id)
        .order('sort_order');
      
      setPreviewInvoice({ invoice, items: data || [] });
    } else {
      setPreviewInvoice({ invoice });
    }
  };

  const handleSendInvoice = async (invoice: Invoice) => {
    if (!confirm(`Send invoice ${invoice.invoice_number} to ${invoice.client_email}?`)) return;
    
    setSendingId(invoice.id);

    try {
      let invoiceData = { ...invoice };
      
      if (invoice.invoice_type === 'franchisee') {
        const { data: items } = await supabase
          .from('invoice_items')
          .select('*')
          .eq('invoice_id', invoice.id)
          .order('sort_order');
        
        invoiceData = { ...invoice, items } as any;
      }

      const response = await fetch('/api/invoice/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(invoiceData)
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`Failed to send: ${data.error}`);
        return;
      }

      await supabase.from('invoices').update({ status: 'sent' }).eq('id', invoice.id);
      fetchData();
      alert(`Invoice sent successfully to ${invoice.client_email}`);
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setSendingId(null);
    }
  };

  const handleMarkPaid = async (invoiceId: string) => {
    const { error } = await supabase
      .from('invoices')
      .update({ status: 'paid', paid_at: new Date().toISOString() })
      .eq('id', invoiceId);

    if (error) {
      console.error('Error marking invoice paid:', error);
      return;
    }

    fetchData();
  };

  const handleDelete = async (invoiceId: string) => {
    if (!confirm('Delete this invoice?')) return;

    const { error } = await supabase.from('invoices').delete().eq('id', invoiceId);

    if (error) {
      console.error('Error deleting invoice:', error);
      return;
    }

    fetchData();
  };

  const handleToggleRecurring = async (invoice: Invoice) => {
    const { error } = await supabase
      .from('invoices')
      .update({ is_recurring: !invoice.is_recurring })
      .eq('id', invoice.id);

    if (error) {
      console.error('Error toggling recurring:', error);
      return;
    }

    fetchData();
  };

  if (loading) {
    return <div className="text-neutral-500">Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900">Invoices</h1>
          <p className="text-neutral-500">Create and manage invoices</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors"
        >
          <Plus size={18} /> Create Invoice
        </button>
      </div>

      {/* Invoices Table */}
      <div className="bg-white border border-neutral-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Invoice #</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Type</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Recurring</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Client</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Amount</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Due Date</th>
                <th className="text-left px-4 py-3 text-sm font-medium text-neutral-600">Status</th>
                <th className="text-right px-4 py-3 text-sm font-medium text-neutral-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-neutral-500">
                    No invoices yet. Create your first invoice.
                  </td>
                </tr>
              ) : (
                invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-neutral-100 hover:bg-neutral-50">
                    <td className="px-4 py-3 font-mono text-sm text-neutral-900">{invoice.invoice_number}</td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs bg-neutral-100 text-neutral-700 rounded">
                        {invoice.invoice_type === 'franchisee' ? 'Franchisee' : 'Client'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {invoice.invoice_type === 'franchisee' && (
                        <button
                          onClick={() => handleToggleRecurring(invoice)}
                          className={`px-2 py-1 text-xs font-medium rounded flex items-center gap-1 ${
                            invoice.is_recurring
                              ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                              : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
                          }`}
                          title={invoice.is_recurring ? 'Click to remove recurring' : 'Click to make recurring'}
                        >
                          <RefreshCw size={12} />
                          {invoice.is_recurring ? 'Yes' : 'No'}
                        </button>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-neutral-900">{invoice.client_name}</div>
                      <div className="text-sm text-neutral-500">{invoice.client_email}</div>
                    </td>
                    <td className="px-4 py-3 font-medium text-neutral-900">${Number(invoice.amount).toLocaleString()}</td>
                    <td className="px-4 py-3 text-sm text-neutral-600">
                      {invoice.due_date ? new Date(invoice.due_date).toLocaleDateString() : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        invoice.status === 'paid' ? 'bg-green-100 text-green-700' :
                        invoice.status === 'sent' ? 'bg-blue-100 text-blue-700' :
                        invoice.status === 'overdue' ? 'bg-red-100 text-red-700' :
                        'bg-neutral-100 text-neutral-700'
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                   <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => handlePreview(invoice)} className="p-1.5 text-neutral-400 hover:text-neutral-900" title="Preview">
                          <Eye size={15} />
                        </button>
                        {invoice.invoice_type === 'franchisee' && (
                          <>
                            <button onClick={() => handleEdit(invoice)} className="p-1.5 text-neutral-400 hover:text-neutral-900" title="Edit">
                              <Edit2 size={15} />
                            </button>
                            <button onClick={() => handleDuplicate(invoice)} className="p-1.5 text-neutral-400 hover:text-neutral-900" title="Duplicate">
                              <Copy size={15} />
                            </button>
                          </>
                        )}
                        {invoice.status === 'draft' && (
                          <>
                            <button 
                              onClick={() => handleSendInvoice(invoice)} 
                              disabled={sendingId === invoice.id}
                              className="p-1.5 text-neutral-400 hover:text-blue-600 disabled:opacity-50" 
                              title="Send"
                            >
                              <Send size={15} />
                            </button>
                            <button onClick={() => handleDelete(invoice.id)} className="p-1.5 text-neutral-400 hover:text-red-600" title="Delete">
                              <Trash2 size={15} />
                            </button>
                          </>
                        )}
                        {invoice.status === 'sent' && (
                          <button onClick={() => handleMarkPaid(invoice.id)} className="p-1.5 text-neutral-400 hover:text-green-600" title="Mark Paid">
                            <Check size={15} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-4 border-b border-neutral-200 sticky top-0 bg-white">
              <h2 className="text-lg font-semibold text-neutral-900">{editingInvoice ? 'Edit Invoice' : 'Create Invoice'}</h2>
              <button onClick={closeModal} className="text-neutral-500 hover:text-neutral-900">
                <X size={20} />
              </button>
            </div>

            {/* Invoice Type Selector */}
            {!editingInvoice && (
              <div className="p-4 border-b border-neutral-200 bg-neutral-50">
                <div className="flex gap-4">
                  <button
                    onClick={() => setInvoiceType('client')}
                    className={`px-4 py-2 font-medium transition-colors ${
                      invoiceType === 'client'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-white text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    Client Invoice
                  </button>
                  <button
                    onClick={() => setInvoiceType('franchisee')}
                    className={`px-4 py-2 font-medium transition-colors ${
                      invoiceType === 'franchisee'
                        ? 'bg-neutral-900 text-white'
                        : 'bg-white text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    Franchisee Invoice
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              {invoiceType === 'client' ? (
                // Client Invoice Form
                <>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Client</label>
                    <select
                      required
                      value={clientForm.client_id}
                      onChange={(e) => handleClientSelect(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                    >
                      <option value="">Select client...</option>
                      {clients.map((client) => (
                        <option key={client.id} value={client.id}>{client.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Service Description</label>
                    <input
                      type="text"
                      required
                      value={clientForm.service_description}
                      onChange={(e) => setClientForm({ ...clientForm, service_description: e.target.value })}
                      className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Amount ($)</label>
                      <input
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        value={clientForm.amount}
                        onChange={(e) => setClientForm({ ...clientForm, amount: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Due Date</label>
                      <input
                        type="date"
                        required
                        value={clientForm.due_date}
                        onChange={(e) => setClientForm({ ...clientForm, due_date: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                  </div>
                </>
              ) : (
                // Franchisee Invoice Form
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Franchisee Name</label>
                      <input
                        type="text"
                        required
                        value={franchiseeForm.franchisee_name}
                        onChange={(e) => setFranchiseeForm({ ...franchiseeForm, franchisee_name: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={franchiseeForm.franchisee_email}
                        onChange={(e) => setFranchiseeForm({ ...franchiseeForm, franchisee_email: e.target.value })}
                        className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Address</label>
                    <input
                      type="text"
                      value={franchiseeForm.franchisee_address}
                      onChange={(e) => setFranchiseeForm({ ...franchiseeForm, franchisee_address: e.target.value })}
                      className="w-full px-3 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                    />
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <label className="text-sm font-medium text-neutral-700">Line Items</label>
                      <button
                        type="button"
                        onClick={addLineItem}
                        className="text-sm text-neutral-600 hover:text-neutral-900"
                      >
                        + Add Item
                      </button>
                    </div>
                    {lineItems.map((item, index) => (
                      <div key={index} className="mb-3 p-3 border border-neutral-200 bg-neutral-50">
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-xs text-neutral-500">Item {index + 1}</span>
                          {lineItems.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeLineItem(index)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 size={14} />
                            </button>
                          )}
                        </div>
                        <div className="space-y-2">
                          <input
                            type="text"
                            required
                            placeholder="Account Name"
                            value={item.account_name}
                            onChange={(e) => updateLineItem(index, 'account_name', e.target.value)}
                            className="w-full px-2 py-1.5 text-sm border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                          />
                          <input
                            type="text"
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) => updateLineItem(index, 'description', e.target.value)}
                            className="w-full px-2 py-1.5 text-sm border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                          />
                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="number"
                              required
                              placeholder="Amount"
                              min="0"
                              step="0.01"
                              value={item.amount}
                              onChange={(e) => updateLineItem(index, 'amount', e.target.value)}
                              className="w-full px-2 py-1.5 text-sm border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                            />
                            <input
                              type="text"
                              placeholder="Notes (optional)"
                              value={item.notes}
                              onChange={(e) => updateLineItem(index, 'notes', e.target.value)}
                              className="w-full px-2 py-1.5 text-sm border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="text-right mt-3 text-sm font-medium text-neutral-900">
                      Total: ${lineItems.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                  </div>

                  {/* Save as Recurring Checkbox */}
                  <div className="border-t border-neutral-200 pt-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={saveAsRecurring}
                        onChange={(e) => setSaveAsRecurring(e.target.checked)}
                        className="w-4 h-4 border-neutral-300 focus:ring-neutral-900"
                      />
                      <span className="text-sm text-neutral-700">Save as recurring template</span>
                    </label>
                    <p className="text-xs text-neutral-500 mt-1 ml-6">Mark this as a template for future invoices with the same franchisee</p>
                  </div>
                </>
              )}

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
                  {editingInvoice ? 'Update Invoice' : 'Create Invoice'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewInvoice && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-4 border-b border-neutral-200 sticky top-0 bg-white">
              <h2 className="text-lg font-semibold text-neutral-900">Invoice Preview</h2>
              <button onClick={() => setPreviewInvoice(null)} className="text-neutral-500 hover:text-neutral-900">
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h1 className="text-2xl font-bold text-neutral-900">Rosie's Janitorial Services</h1>
                  <p className="text-neutral-500">Orange County, CA</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-neutral-400">INVOICE</div>
                  <div className="text-sm text-neutral-600 mt-2">{previewInvoice.invoice.invoice_number}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-xs text-neutral-500 uppercase mb-1">Bill To</div>
                  <div className="font-semibold text-neutral-900">{previewInvoice.invoice.client_name}</div>
                  <div className="text-sm text-neutral-600">{previewInvoice.invoice.client_address}</div>
                  <div className="text-sm text-neutral-600">{previewInvoice.invoice.client_email}</div>
                </div>
                <div className="text-right">
                  <div className="mb-2">
                    <div className="text-xs text-neutral-500 uppercase">Invoice Date</div>
                    <div className="text-neutral-900">{new Date(previewInvoice.invoice.created_at).toLocaleDateString()}</div>
                  </div>
                  {previewInvoice.invoice.due_date && (
                    <div>
                      <div className="text-xs text-neutral-500 uppercase">Due Date</div>
                      <div className="text-neutral-900">{new Date(previewInvoice.invoice.due_date).toLocaleDateString()}</div>
                    </div>
                  )}
                </div>
              </div>
              <table className="w-full mb-8">
                <thead>
                  <tr className="border-b-2 border-neutral-200">
                    <th className="text-left py-2 text-sm text-neutral-600">Description</th>
                    <th className="text-right py-2 text-sm text-neutral-600">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {previewInvoice.items && previewInvoice.items.length > 0 ? (
                    previewInvoice.items.map((item) => (
                      <tr key={item.id} className="border-b border-neutral-100">
                        <td className="py-3">
                          <div className="font-medium text-neutral-900">{item.account_name}</div>
                          {item.description && <div className="text-sm text-neutral-500">{item.description}</div>}
                          {item.notes && <div className="text-xs text-neutral-400 mt-1">Note: {item.notes}</div>}
                        </td>
                        <td className="py-3 text-right text-neutral-900">${Number(item.amount).toLocaleString()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 text-neutral-900">{previewInvoice.invoice.service_description}</td>
                      <td className="py-3 text-right text-neutral-900">${Number(previewInvoice.invoice.amount).toLocaleString()}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              <div className="text-right">
                <div className="text-3xl font-bold text-neutral-900">
                  {previewInvoice.invoice.invoice_type === 'franchisee' ? 'Balance Due' : 'Total'}: ${Number(previewInvoice.invoice.amount).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
