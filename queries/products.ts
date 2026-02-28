import apiClient from "@/lib/api-client";

export async function getProducts() {
	try {
		const response = await apiClient.get("/products");
		return response.data;
	} catch (error) {
		return { data: [] };
	}
}
