import apiClient from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

export default function useProfile() {
	return useQuery({
		queryKey: ["profile"],
		queryFn: () => apiClient.get("/users/me").then((res) => res.data),
		retry: () => false,
		// queryFn: () =>
		// axios
		// 	.get(`${process.env.NEXT_PUBLIC_API_URL}/users/me`, {
		// 		withCredentials: true,
		// 	})
		// 	.then((res) => res.data),
		// A 401 means the user is simply not logged in — that's not an error worth
		// retrying. Without this guard React Query would retry 3× on every page,
		// which is what fed the interceptor loop on the login page.
		// retry: (failureCount, error) => {
		// 	const axiosError = error as AxiosError;
		// 	if (axiosError?.response?.status === 401) return false;
		// 	return failureCount < 2;
		// },
		// // Don't treat 401 as a hard error in the UI — just let `data` stay undefined
		// throwOnError: false,
	});
}
