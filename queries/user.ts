import apiClient from "@/lib/api-client";

export const getProfile = async () => {
	try {
		const response = await apiClient.get("/users/me");
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
