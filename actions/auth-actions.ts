"use server";

import apiClient from "@/lib/api-client";
import { syncCookies } from "@/lib/cookie-sync";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// ─── Sign In ──────────────────────────────────────────────────────────────────

export async function doSignin(actionPayload: FormData): Promise<{
	success: boolean;
	user: unknown;
	error?: { message: string };
}> {
	try {
		const email = actionPayload.get("email") as string;
		const password = actionPayload.get("password") as string;

		const response = await apiClient.post("/auth/login", { email, password });

		// Sync Set-Cookie headers (access_token, refresh_token) into the browser
		await syncCookies(response);
		return {
			success: true,
			user: response.data,
		};
	} catch (error) {
		const axiosError = error as AxiosError<{ message: string }>;
		return {
			error: axiosError.response?.data || {
				message: "Internal Server Error",
			},
			success: false,
			user: null,
		};
	}
}

// ─── Register ─────────────────────────────────────────────────────────────────

export async function doRegister(formData: FormData): Promise<{
	success: boolean;
	user: unknown;
	error?: { message: string };
}> {
	try {
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		const response = await apiClient.post("/auth/register", {
			name,
			email,
			password,
		});
		await syncCookies(response);
		return {
			success: true,
			user: response.data,
		};
	} catch (error) {
		return {
			error: (error as AxiosError<{ message: string }>).response?.data,
			success: false,
			user: null,
		};
	}
}

// ─── Logout ───────────────────────────────────────────────────────────────────

export async function doLogout() {
	try {
		const response = await apiClient.post("/auth/logout");
		await syncCookies(response);
	} catch {
		// Even if the API call fails, clear local cookies so the user is signed out
	} finally {
		// Explicitly delete auth cookies on the Next.js side
		const cookieStore = await cookies();
		cookieStore.delete("access_token");
		cookieStore.delete("refresh_token");
	}
}
