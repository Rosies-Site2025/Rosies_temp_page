-- Supabase Database Schema for Rosie's Janitorial Admin Dashboard
-- Run this SQL in your Supabase SQL Editor

-- Clients table
CREATE TABLE clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  service_type TEXT,
  monthly_rate DECIMAL(10,2) DEFAULT 0,
  invoice_day INTEGER DEFAULT 1 CHECK (invoice_day >= 1 AND invoice_day <= 28),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Invoices table
CREATE TABLE invoices (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_number TEXT NOT NULL UNIQUE,
  invoice_type TEXT DEFAULT 'client' CHECK (invoice_type IN ('client', 'franchisee')),
  is_recurring BOOLEAN DEFAULT FALSE,
  recurring_template_id UUID,
  client_id UUID REFERENCES clients(id) ON DELETE SET NULL,
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_address TEXT,
  amount DECIMAL(10,2) NOT NULL,
  service_description TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'paid', 'overdue')),
  due_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  paid_at TIMESTAMP WITH TIME ZONE
);

-- Invoice line items table (for franchisee invoices)
CREATE TABLE invoice_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_id UUID REFERENCES invoices(id) ON DELETE CASCADE,
  account_name TEXT NOT NULL,
  description TEXT,
  amount DECIMAL(10,2) NOT NULL,
  notes TEXT,
  sort_order INTEGER DEFAULT 0
);

-- Settings table (single row for app settings)
CREATE TABLE settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  auto_invoice_enabled BOOLEAN DEFAULT FALSE,
  default_invoice_day INTEGER DEFAULT 1,
  email_reminders BOOLEAN DEFAULT TRUE,
  reminder_days_before INTEGER DEFAULT 3,
  company_name TEXT DEFAULT 'Rosie''s Janitorial Services',
  company_email TEXT DEFAULT 'rosiesjanitorial@yahoo.com',
  company_phone TEXT DEFAULT '(949) 687-8297',
  company_address TEXT DEFAULT 'Serving Orange County, California',
  invoice_notes TEXT DEFAULT 'Thank you for your business!',
  payment_terms TEXT DEFAULT 'Net 30'
);

-- Saved leads table
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  website TEXT,
  category TEXT,
  rating DECIMAL(2,1),
  notes TEXT,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'lost')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default settings row
INSERT INTO settings (id) VALUES (gen_random_uuid());

-- Create indexes for better query performance
CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_invoices_client_id ON invoices(client_id);
CREATE INDEX idx_invoices_status ON invoices(status);
CREATE INDEX idx_invoices_due_date ON invoices(due_date);
CREATE INDEX idx_invoices_type ON invoices(invoice_type);
CREATE INDEX idx_invoice_items_invoice_id ON invoice_items(invoice_id);
CREATE INDEX idx_leads_status ON leads(status);

-- Enable Row Level Security (RLS)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policies (allowing all operations for authenticated users)
-- For production, you should restrict these based on user roles

CREATE POLICY "Enable all for authenticated users" ON clients
  FOR ALL USING (true);

CREATE POLICY "Enable all for authenticated users" ON invoices
  FOR ALL USING (true);

CREATE POLICY "Enable all for authenticated users" ON invoice_items
  FOR ALL USING (true);

CREATE POLICY "Enable all for authenticated users" ON settings
  FOR ALL USING (true);

CREATE POLICY "Enable all for authenticated users" ON leads
  FOR ALL USING (true);
