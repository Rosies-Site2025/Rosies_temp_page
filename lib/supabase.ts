import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  service_type: string;
  monthly_rate: number;
  invoice_day: number;
  created_at: string;
}

export interface Invoice {
  id: string;
  invoice_number: string;
  invoice_type: 'client' | 'franchisee';
  is_recurring: boolean;
  recurring_template_id?: string;
  client_id: string;
  client_name: string;
  client_email: string;
  client_address: string;
  amount: number;
  service_description: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
  due_date?: string;
  created_at: string;
  paid_at?: string;
}

export interface InvoiceItem {
  id: string;
  invoice_id: string;
  account_name: string;
  description: string;
  amount: number;
  notes?: string;
  sort_order: number;
}

export interface Settings {
  id: string;
  auto_invoice_enabled: boolean;
  default_invoice_day: number;
  email_reminders: boolean;
  reminder_days_before: number;
  company_name: string;
  company_email: string;
  company_phone: string;
  company_address: string;
  invoice_notes: string;
  payment_terms: string;
}

export interface Lead {
  id: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  category: string;
  rating?: number;
  notes?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  created_at: string;
}
