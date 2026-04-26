import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Protect /studio routes with basic auth
  if (request.nextUrl.pathname.startsWith('/studio')) {
    const authHeader = request.headers.get('authorization')
    
    // Check for basic auth credentials
    const expectedAuth = process.env.STUDIO_AUTH_TOKEN
    
    if (!expectedAuth) {
      console.warn('[middleware] STUDIO_AUTH_TOKEN not set - Studio is unprotected!')
      return NextResponse.next()
    }
    
    if (authHeader !== `Basic ${expectedAuth}`) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Sanity Studio"',
        },
      })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/studio/:path*'],
}
