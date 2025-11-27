import { NextResponse } from 'next/server'

// Note: The function name must be 'middleware' (lowercase is standard convention)
export function middleware(request) {

    // 1. Get the token from cookies
    const token = request.cookies.get('token')?.value

    // 2. Define protected routes (Add more paths here if needed)
    const isProtectedRoute = request.nextUrl.pathname.startsWith('/account')

    // 3. Redirect if no token found on a protected route
    if (isProtectedRoute && !token) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('from', request.nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
    }

    return NextResponse.next()
}

// Config matches the paths you want middleware to run on
export const config = {
    matcher: ['/account/:path*'],
}