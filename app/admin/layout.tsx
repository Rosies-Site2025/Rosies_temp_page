'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Users, FileText, Search, Settings, LogOut, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isResetMode, setIsResetMode] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const { error } = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.password,
    });

    if (error) {
      setLoginError(error.message);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setLoginError(error.message);
    } else {
      setResetSent(true);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin');
  };

  const navItems = [
    { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
    { href: '/admin/clients', icon: Users, label: 'Clients' },
    { href: '/admin/invoices', icon: FileText, label: 'Invoices' },
    { href: '/admin/leads', icon: Search, label: 'Lead Scraper' },
    { href: '/admin/users', icon: Users, label: 'Users' },
    { href: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-100 flex items-center justify-center">
        <div className="text-neutral-500">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-neutral-500">Rosie's Janitorial Dashboard</p>
          </div>

          {isResetMode ? (
            resetSent ? (
              <div className="text-center">
                <p className="text-white mb-4">Password reset email sent! Check your inbox.</p>
                <button
                  onClick={() => { setIsResetMode(false); setResetSent(false); }}
                  className="text-neutral-400 text-sm hover:text-white"
                >
                  Back to login
                </button>
              </div>
            ) : (
              <form onSubmit={handlePasswordReset} className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700"
                />
                {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors"
                >
                  Send Reset Link
                </button>
                <button
                  type="button"
                  onClick={() => setIsResetMode(false)}
                  className="w-full text-neutral-400 text-sm hover:text-white"
                >
                  Back to login
                </button>
              </form>
            )
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-700"
              />
              {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
              <button
                type="submit"
                className="w-full py-3 bg-white text-neutral-900 font-semibold hover:bg-neutral-100 transition-colors"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setIsResetMode(true)}
                className="w-full text-neutral-400 text-sm hover:text-white"
              >
                Forgot password?
              </button>
            </form>
          )}

          <div className="mt-6 text-center space-y-2">
            <Link href="/signup" className="block text-neutral-400 text-sm hover:text-white transition-colors">
              Create an account
            </Link>
            <Link href="/" className="block text-neutral-500 text-sm hover:text-white transition-colors">
              Back to Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-neutral-950 text-white px-4 py-3 flex items-center justify-between">
        <span className="font-semibold">Admin Dashboard</span>
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 bg-neutral-950 text-white transform transition-all lg:translate-x-0 ${
        sidebarCollapsed ? 'lg:w-16' : 'lg:w-64'
      } ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-64'}`}>
        <div className={`p-6 border-b border-neutral-800 flex items-center justify-between ${sidebarCollapsed ? 'lg:p-4 lg:justify-center' : ''}`}>
          {!sidebarCollapsed && (
            <div className="lg:block">
              <h1 className="text-lg font-bold">Rosie's Admin</h1>
              <p className="text-neutral-500 text-sm">Dashboard</p>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden lg:flex p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded"
          >
            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                title={sidebarCollapsed ? item.label : undefined}
                className={`flex items-center gap-3 px-4 py-3 rounded transition-colors ${
                  sidebarCollapsed ? 'lg:justify-center lg:px-0' : ''
                } ${
                  isActive ? 'bg-white text-neutral-900' : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <item.icon size={20} />
                {!sidebarCollapsed && <span className="lg:inline">{item.label}</span>}
                {sidebarCollapsed && <span className="lg:hidden">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-neutral-800">
          <button
            onClick={handleLogout}
            title={sidebarCollapsed ? 'Sign Out' : undefined}
            className={`flex items-center gap-3 px-4 py-3 w-full text-neutral-400 hover:text-white hover:bg-neutral-900 rounded transition-colors ${
              sidebarCollapsed ? 'lg:justify-center lg:px-0' : ''
            }`}
          >
            <LogOut size={20} />
            {!sidebarCollapsed && <span className="lg:inline">Sign Out</span>}
            {sidebarCollapsed && <span className="lg:hidden">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`min-h-screen transition-all ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}>
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
