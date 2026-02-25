import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryProvider } from "../providers/query-provider";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://vfxcourse.com"), // change to your real domain

	title: {
		default: "VFX Course | Professional Visual Effects Training Platform",
		template: "%s | VFX Course",
	},

	description:
		"Master Visual Effects, CGI, Compositing, and Cinematic Color Grading with industry-level training at VFX Course. Learn from experts and build a professional VFX career.",

	keywords: [
		"VFX Course",
		"Visual Effects Training",
		"CGI Course",
		"Compositing Course",
		"Color Grading Course",
		"Online VFX Academy",
		"After Effects Training",
		"Film Post Production",
	],

	authors: [{ name: "VFX Course Team" }],
	creator: "VFX Course",
	publisher: "VFX Course",

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	openGraph: {
		type: "website",
		url: "https://vfxcourse.com",
		title: "VFX Course | Professional Visual Effects Training",
		description:
			"Learn industry-standard Visual Effects, CGI, and Post Production skills from professionals.",
		siteName: "VFX Course",
		locale: "en_US",
		images: [
			{
				url: "/og-image.jpg", // add inside public folder
				width: 1200,
				height: 630,
				alt: "VFX Course - Professional Training Platform",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "VFX Course | Professional Visual Effects Training",
		description: "Master VFX, CGI & Compositing with professional training.",
		creator: "@vfxcourse", // optional
		images: ["/og-image.jpg"],
	},

	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},

	category: "education",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white m-0 p-0 `}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
