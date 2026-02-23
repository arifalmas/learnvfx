import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
	withCredentials: true, // sends cookies (refresh_token) automatically
});

// ─── Token Refresh Logic ──────────────────────────────────────────────────────

/** Tracks whether a refresh is already in flight to avoid multiple concurrent calls */
const isRefreshing = false;

/** Queue of requests waiting for the new access token */
let failedQueue: {
	resolve: (value: unknown) => void;
	reject: (reason?: unknown) => void;
}[] = [];

/** Flush the queue after a refresh attempt */
function processQueue(error: AxiosError | null) {
	failedQueue.forEach(({ resolve, reject }) => {
		if (error) {
			reject(error);
		} else {
			resolve(undefined);
		}
	});
	failedQueue = [];
}

// ─── Response Interceptor ─────────────────────────────────────────────────────

apiClient.interceptors.response.use(
	// ✅ Success — pass through
	(response) => response,

	// ❌ Error — handle 401 with token refresh
	async (error: AxiosError) => {
		// TODO: Implement your refresh token logic here
		// const originalRequest = error.config as InternalAxiosRequestConfig & {
		// 	_retry?: boolean;
		// };
		// const is401 = error.response?.status === 401;
		// const alreadyRetried = originalRequest._retry;

		// // Only attempt refresh for 401 errors that haven't been retried yet
		// if (is401 && !alreadyRetried) {
		// 	if (isRefreshing) {
		// 		// Another refresh is already in flight — queue this request
		// 		return new Promise((resolve, reject) => {
		// 			failedQueue.push({ resolve, reject });
		// 		})
		// 			.then(() => apiClient(originalRequest))
		// 			.catch((err) => Promise.reject(err));
		// 	}

		// 	originalRequest._retry = true;
		// 	isRefreshing = true;

		// 	try {
		// 		// 🔄 Call your refresh endpoint — adjust the URL to match your API
		// 		await apiClient.post("/auth/refresh-token");

		// 		// Refresh succeeded — replay queued requests then retry original
		// 		processQueue(null);
		// 		return apiClient(originalRequest);
		// 	} catch (refreshError) {
		// 		// Refresh failed — flush the queue with the error and sign the user out
		// 		processQueue(refreshError as AxiosError);

		// 		// Optional: redirect to login page
		// 		if (typeof window !== "undefined") {
		// 			window.location.href = "/login-register";
		// 		}

		// 		return Promise.reject(refreshError);
		// 	} finally {
		// 		isRefreshing = false;
		// 	}
		// }

		return Promise.reject(error);
	},
);

// Global Error Handler
apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response) {
			console.error(
				"[API Error]",
				error.response.status,
				error.response.data,
			);
		}
		return Promise.reject(error);
	},
);

export default apiClient;
