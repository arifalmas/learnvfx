import apiClient from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";

export default function useProfile() {
	return useQuery({
		queryKey: ["profile"],
		queryFn: () => apiClient.get("/users/me").then((res) => res.data),
	});
}
