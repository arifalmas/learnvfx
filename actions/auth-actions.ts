"use server";

import apiClient from "@/lib/api-client";
import { syncCookies } from "@/lib/cookie-sync";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

// Login form action
export async function doSignin(
	previousState: {
		success: boolean;
		user: unknown;
		error?: { message: string };
	},
	actionPayload: FormData,
): Promise<{
	success: boolean;
	user: unknown;
	error?: { message: string };
}> {
	let isSuccess = false;
	let data = null;

	try {
		const email = actionPayload.get("email") as string;
		const password = actionPayload.get("password") as string;
		const response = await apiClient.post("/auth/login", { email, password });

		// Sync cookies before redirecting
		await syncCookies(response);
		data = response.data;

		isSuccess = true;
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

	// 4. Redirect MUST happen outside the try/catch block
	// redirect() throws internally in Next.js, so it never actually returns,
	// but we need a final return to satisfy TypeScript's control-flow analysis.
	if (isSuccess) {
		redirect("/");
	}

	return { success: false, user: data };
}

// Registration form action
export async function doRegister(
	previousState: {
		success: boolean;
		user: unknown;
		error?: { message: string };
	},
	formData: FormData,
): Promise<{
	success: boolean;
	user: unknown;
	error?: { message: string };
}> {
	let isSuccess = false;
	let data = null;

	try {
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;

		const signupData = {
			name,
			email,
			password,
		};
		const response = await apiClient.post("/auth/register", signupData);
		data = response.data;
		await syncCookies(response);
		isSuccess = true;
	} catch (error) {
		return {
			error: (error as AxiosError<{ message: string }>).response?.data,
			success: false,
			user: null,
		};
	}

	if (isSuccess) {
		redirect("/");
	}

	return { success: true, user: data };
}

export async function doLogout() {
	const response = await apiClient.post("/auth/logout");
	await syncCookies(response);
	redirect("/auth/login");
}
