import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PROTECTED_ROUTES = [
	"/payment",
	"/courses",
	"/crystal-price",
	"/profile",
	"/dashboard",
];

const AUTH_ROUTES = ["/auth"];

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

function isProtectedRoute(pathname: string) {
	return PROTECTED_ROUTES.some((r) => pathname.startsWith(r));
}

function isAuthRoute(pathname: string) {
	return AUTH_ROUTES.some((r) => pathname.startsWith(r));
}

async function tryRefreshToken(request: NextRequest) {
	try {
		const res = await fetch(`${API_BASE_URL}/auth/refresh`, {
			method: "POST",
			headers: {
				Cookie: request.headers.get("cookie") ?? "",
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) return { success: false };
		return { success: true, setCookieHeader: res.headers.get("set-cookie") };
	} catch {
		return { success: false };
	}
}

export async function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const accessToken = request.cookies.get("access_token")?.value;
	const refreshToken = request.cookies.get("refresh_token")?.value;
	const isAuthenticated = Boolean(accessToken);

	// 1️⃣ Authenticated user visiting guest-only page → home
	if (isAuthRoute(pathname) && isAuthenticated) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	// 2️⃣ Guest visiting protected page
	if (isProtectedRoute(pathname) && !isAuthenticated) {
		if (!refreshToken) {
			const loginUrl = new URL("/auth/login", request.url);
			loginUrl.searchParams.set("callbackUrl", pathname);
			return NextResponse.redirect(loginUrl);
		}

		// Try refreshing the token
		let attempt = 0;
		while (attempt < 3) {
			console.log("Attempt", attempt);
			const { success, setCookieHeader } = await tryRefreshToken(request);
			if (success) {
				// allow the request
				const res = NextResponse.next();
				if (setCookieHeader) res.headers.set("Set-Cookie", setCookieHeader);
				return res;
			}
			attempt++;
		}

		// Refresh failed → increment retry and redirect to login
		const loginUrl = new URL("/auth/login", request.url);
		loginUrl.searchParams.set("callbackUrl", pathname);
		return NextResponse.redirect(loginUrl);
	}

	// 3️⃣ Authenticated user visiting protected route → continue
	if (isProtectedRoute(pathname) && isAuthenticated) {
		return NextResponse.next();
	}

	// 4️⃣ Default → allow
	return NextResponse.next();
}

// ─── Matcher ───────────────────────────────────────────────
export const config = {
	matcher: ["/((?!api|_next|favicon.ico|.*\\..*).*)"],
};
