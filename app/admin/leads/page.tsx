'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Phone, ExternalLink, Plus, Check, Trash2 } from 'lucide-react';
import { supabase, Lead } from '@/lib/supabase';

interface SearchResult {
  id: string;
  name: string;
  address: string;
  phone?: string;
  website?: string;
  category: string;
  rating?: number;
}

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('Orange County, CA');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [allResults, setAllResults] = useState<SearchResult[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [savedLeads, setSavedLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const resultsPerPage = 10;
  const totalPages = Math.ceil(allResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedResults = allResults.slice(startIndex, endIndex);

  useEffect(() => {
    fetchSavedLeads();
  }, []);

  const fetchSavedLeads = async () => {
    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (data) setSavedLeads(data);
    if (error) console.error('Error fetching leads:', error);
    setLoading(false);
  };

  const [searchError, setSearchError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    setSearchError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery, location })
      });

      const data = await response.json();

      if (!response.ok) {
        setSearchError(data.error || 'Failed to search leads');
        setSearchResults([]);
        setAllResults([]);
      } else {
        setSearchResults(data.leads || []);
        setAllResults(data.leads || []);
        setCurrentPage(1);
      }
    } catch (error) {
      setSearchError('Network error. Please try again.');
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSaveLead = async (result: SearchResult) => {
    const { error } = await supabase.from('leads').insert([{
      name: result.name,
      address: result.address,
      phone: result.phone,
      website: result.website,
      category: result.category,
      rating: result.rating,
      status: 'new'
    }]);

    if (error) {
      console.error('Error saving lead:', error);
      return;
    }

    setAllResults(allResults.filter(r => r.id !== result.id));
    setSearchResults(searchResults.filter(r => r.id !== result.id));
    fetchSavedLeads();
  };

  const handleDeleteLead = async (id: string) => {
    const { error } = await supabase.from('leads').delete().eq('id', id);
    if (error) {
      console.error('Error deleting lead:', error);
      return;
    }
    fetchSavedLeads();
  };

  const handleUpdateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from('leads').update({ status }).eq('id', id);
    if (error) {
      console.error('Error updating lead:', error);
      return;
    }
    fetchSavedLeads();
  };

  const searchSuggestions = [
    // Tier 1: High-Probability, Recurring
    'Office buildings', 'Medical offices', 'Dental clinics', 'Urgent care centers',
    'Property management', 'Banks', 'Schools', 'Daycares', 'Government offices',
    // Tier 2: High Foot Traffic
    'Gyms', 'Fitness studios', 'Hotels', 'Retail stores', 'Shopping centers',
    'Restaurants', 'Churches', 'Event venues', 'Banquet halls',
    // Tier 3: Specialized
    'Warehouses', 'Distribution centers', 'Manufacturing', 'Laboratories',
    'Auto dealerships', 'Car dealerships',
    // Tier 4: Professional Services
    'Law firms', 'Accounting firms', 'Real estate offices', 'Insurance offices',
    // Tier 5: Lifestyle & Service
    'Salons', 'Barbershops', 'Spas', 'Yoga studios', 'Physical therapy',
    'Chiropractic offices', 'Senior living facilities'
  ];

  if (loading) {
    return <div className="text-neutral-500">Loading...</div>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-neutral-900">Lead Scraper</h1>
        <p className="text-neutral-500">Find potential clients in your service area</p>
      </div>

      {/* Search Form */}
      <div className="bg-white border border-neutral-200 p-6 mb-6">
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Search For</label>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="e.g., Office buildings, medical offices..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Location</label>
              <div className="relative">
                <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 focus:border-neutral-900 focus:outline-none"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="px-6 py-2 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50"
          >
            {isSearching ? 'Searching...' : 'Search Leads'}
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-neutral-100">
          <p className="text-sm text-neutral-500 mb-2">Quick searches:</p>
          <div className="flex flex-wrap gap-2">
            {searchSuggestions.map((suggestion, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSearchQuery(suggestion)}
                className="px-3 py-1 text-sm bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Results */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-neutral-200">
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
              <h2 className="font-semibold text-neutral-900">Search Results ({allResults.length})</h2>
              {totalPages > 1 && (
                <div className="flex items-center gap-2 text-sm">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-neutral-300 text-neutral-700 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="text-neutral-600">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-neutral-300 text-neutral-700 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
            <div className="divide-y divide-neutral-100">
              {searchError ? (
                <div className="p-8 text-center text-red-600">
                  <p className="font-medium">Error</p>
                  <p className="text-sm mt-1">{searchError}</p>
                  <p className="text-xs text-neutral-500 mt-2">Add YELP_API_KEY to your .env.local</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-neutral-500">
                  <Search size={40} className="mx-auto mb-3 opacity-30" />
                  <p>Search for businesses to find potential leads</p>
                </div>
              ) : (
                paginatedResults.map((result) => (
                  <div key={result.id} className="p-4 hover:bg-neutral-50">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium text-neutral-900">{result.name}</h3>
                        <p className="text-sm text-neutral-500 flex items-center gap-1 mt-1">
                          <MapPin size={14} /> {result.address}
                        </p>
                        {result.phone && (
                          <p className="text-sm text-neutral-500 flex items-center gap-1 mt-1">
                            <Phone size={14} /> {result.phone}
                          </p>
                        )}
                        <div className="flex items-center gap-3 mt-2">
                          <span className="px-2 py-0.5 text-xs bg-neutral-100 text-neutral-600">{result.category}</span>
                          {result.rating && <span className="text-sm text-neutral-500">{result.rating} rating</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {result.website && (
                          <a href={`https://${result.website}`} target="_blank" rel="noopener noreferrer" className="p-2 text-neutral-500 hover:text-neutral-900">
                            <ExternalLink size={16} />
                          </a>
                        )}
                        <button onClick={() => handleSaveLead(result)} className="p-2 text-neutral-500 hover:text-neutral-900" title="Save lead">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Saved Leads */}
        <div>
          <div className="bg-white border border-neutral-200">
            <div className="p-4 border-b border-neutral-200">
              <h2 className="font-semibold text-neutral-900">Saved Leads ({savedLeads.length})</h2>
            </div>
            <div className="divide-y divide-neutral-100 max-h-[500px] overflow-auto">
              {savedLeads.length === 0 ? (
                <div className="p-4 text-center text-neutral-500 text-sm">
                  Click + to save leads for follow-up
                </div>
              ) : (
                savedLeads.map((lead) => (
                  <div key={lead.id} className="p-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-neutral-900 text-sm">{lead.name}</div>
                        <div className="text-xs text-neutral-500 mt-1">{lead.phone}</div>
                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                          className="mt-2 text-xs px-2 py-1 border border-neutral-200 rounded"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="qualified">Qualified</option>
                          <option value="converted">Converted</option>
                          <option value="lost">Lost</option>
                        </select>
                      </div>
                      <button onClick={() => handleDeleteLead(lead.id)} className="p-1 text-neutral-400 hover:text-red-600">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
