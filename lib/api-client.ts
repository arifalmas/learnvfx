import axios, { AxiosError } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
	withCredentials: true, // sends cookies (access_token / refresh_token) automatically
});

// ─── Global Error Logger ──────────────────────────────────────────────────────
apiClient.interceptors.response.use(
	(response) => response,
	(error: AxiosError) => {
		// Don't spam the console for expected 401s on auth pages
		if (error.response && !(error.response.status === 401)) {
			console.log("[API Error]", error.response.status, error.response.data);
		}
		return Promise.reject(error);
	},
);

export const apiServer = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 10000,
	withCredentials: true,
});

export default apiClient;
