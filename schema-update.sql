-- Migration script: Add support for franchisee invoices
-- Run this in Supabase SQL Editor after the initial schema

-- Add invoice_type column to existing invoices table
ALTER TABLE invoices ADD COLUMN IF NOT EXISTS invoice_type TEXT DEFAULT 'client' CHECK (invoice_type IN ('client', 'franchisee'));

-- Add recurring invoice support
ALTER TABLE invoices ADD COLUMN IF NOT EXISTS is_recurring BOOLEAN DEFAULT FALSE;
ALTER TABLE invoices ADD COLUMN IF NOT EXISTS recurring_template_id UUID;

-- Make due_date nullable (franchisee invoices don't have due dates)
ALTER TABLE invoices ALTER COLUMN due_date DROP NOT NULL;

-- Create invoice_items table for franchisee line items
CREATE TABLE IF NOT EXISTS invoice_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  invoice_id UUID REFERENCES invoices(id) ON DELETE CASCADE,
  account_name TEXT NOT NULL,
  description TEXT,
  amount DECIMAL(10,2) NOT NULL,
  notes TEXT,
  sort_order INTEGER DEFAULT 0
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_invoices_type ON invoices(invoice_type);
CREATE INDEX IF NOT EXISTS idx_invoice_items_invoice_id ON invoice_items(invoice_id);

-- Enable RLS
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "Enable all for authenticated users" ON invoice_items
  FOR ALL USING (true);
