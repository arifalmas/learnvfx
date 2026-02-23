import getServerApiClient from "@/lib/api-server";

export const getProfile = async () => {
	try {
		const client = await getServerApiClient();
		const response = await client.get("/users/me");
		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
