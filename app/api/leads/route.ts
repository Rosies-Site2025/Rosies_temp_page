import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { query, location } = await request.json();
    
    const apiKey = process.env.YELP_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Yelp API key not configured. Add YELP_API_KEY to .env.local' },
        { status: 500 }
      );
    }

    // Use Yelp Fusion API - FREE 5,000 calls/day
    const url = `https://api.yelp.com/v3/businesses/search?term=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}&limit=20`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Yelp API error:', errorData);
      return NextResponse.json(
        { error: errorData.error?.description || 'Yelp API error' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Transform Yelp results to our lead format
    const leads = (data.businesses || []).map((biz: any) => ({
      id: biz.id,
      name: biz.name,
      address: biz.location?.display_address?.join(', ') || '',
      phone: biz.display_phone || '',
      website: biz.url?.split('?')[0] || '',
      category: biz.categories?.[0]?.title || query,
      rating: biz.rating
    }));

    return NextResponse.json({ leads });
  } catch (error: any) {
    console.error('Lead scraping error:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}
