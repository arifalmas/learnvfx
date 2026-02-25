import { cookies } from "next/headers";
import { apiServer } from "@/lib/api-client";

export async function GET(request: Request) {
	const cookieStore = await cookies();
	const accessToken = cookieStore.get("access_token");
	const refreshToken = cookieStore.get("refresh_token");

	try {
		const res = await apiServer.get("/users/me", {
			headers: {
				Authorization: `Bearer ${accessToken?.value}`,
			},
		});
		return new Response(
			JSON.stringify({
				success: true,
				data: {
					accessToken,
					refreshToken,
					user: res.data?.data,
				},
			}),
		);
	} catch (error) {
		return new Response(
			JSON.stringify({
				success: false,
				data: {
					accessToken,
					refreshToken,
					user: null,
				},
			}),
		);
	}
}
