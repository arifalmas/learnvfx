"use server";

import apiClient from "@/lib/api-client";
import { syncCookies } from "@/lib/cookie-sync";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

// Login form action
export async function doSignin(actionPayload: FormData): Promise<{
	success: boolean;
	user: unknown;
	error?: { message: string };
}> {
	try {
		const email = actionPayload.get("email") as string;
		const password = actionPayload.get("password") as string;
		const response = await apiClient.post("/auth/login", { email, password });

		// Sync cookies before redirecting
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

// Registration form action
export async function doRegister(formData: FormData): Promise<{
	success: boolean;
	user: unknown;
	error?: { message: string };
}> {
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

export async function doLogout() {
	const response = await apiClient.post("/auth/logout");
	await syncCookies(response);
	redirect("/auth/login");
}
