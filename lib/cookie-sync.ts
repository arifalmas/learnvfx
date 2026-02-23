// Use the AxiosResponse type from axios
import { AxiosResponse } from "axios";
import { cookies } from "next/headers";
import { parse } from "set-cookie-parser";

export async function syncCookies(axiosResponse: AxiosResponse) {
	// Axios headers are usually objects. 'set-cookie' is special and often an array.
	const setCookieHeader = axiosResponse.headers["set-cookie"];

	if (setCookieHeader) {
		const cookieStore = await cookies();
		// set-cookie-parser handles the array of strings perfectly
		const parsedCookies = parse(setCookieHeader);

		parsedCookies.forEach((cookie) => {
			cookieStore.set(cookie.name, cookie.value, {
				httpOnly: cookie.httpOnly ?? true,
				secure: cookie.secure ?? process.env.NODE_ENV === "production",
				sameSite: (cookie.sameSite as "lax" | "strict" | "none") ?? "lax",
				path: cookie.path ?? "/",
				expires: cookie.expires,
				maxAge: cookie.maxAge,
			});
		});
	}
}
