// lib/api-server.ts
import axios from "axios";
import { cookies } from "next/headers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getServerApiClient() {
	const cookieStore = await cookies();
	const allCookies = cookieStore.toString(); // Gets all cookies as a string
	return axios.create({
		baseURL: API_BASE_URL,
		headers: {
			Cookie: allCookies, // Forward the browser's cookies to Express
		},
		withCredentials: true,
	});
}

export default getServerApiClient;
