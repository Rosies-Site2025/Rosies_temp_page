import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const protectedRoutes = ['/admin'];
const publicAdminRoutes = ['/admin/signup', '/admin/reset-password'];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if route needs protection
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isPublicAdminRoute = publicAdminRoutes.some(route => pathname === route);

  // Allow public admin routes
  if (isPublicAdminRoute) {
    return NextResponse.next();
  }

  // Check auth for protected routes
  if (isProtectedRoute) {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.next();
    }

    // Get auth token from cookies
    const token = request.cookies.get('sb-access-token')?.value 
      || request.cookies.get('sb-' + supabaseUrl.split('//')[1].split('.')[0] + '-auth-token')?.value;

    if (!token) {
      // No token, let client-side auth handle it
      return NextResponse.next();
    }

    try {
      const supabase = createClient(supabaseUrl, supabaseAnonKey, {
        global: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      });

      const { data: { user }, error } = await supabase.auth.getUser(token);

      if (error || !user) {
        // Invalid token, redirect to admin login
        const loginUrl = new URL('/admin', request.url);
        return NextResponse.redirect(loginUrl);
      }
    } catch {
      // On error, let client handle auth
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
