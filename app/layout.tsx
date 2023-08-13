import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import "../global.css";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
	title: {
		default: "itsbrex.dev",
		template: "%s | itsbrex.dev",
	},
	description: "Product Engineer with 10 years of experience in end-to-end User Experience (UX) innovation.",
	openGraph: {
		title: "itsbrex.dev",
		description: "Senior Prouduct Manager & Innovation Engineer",
		url: "https://itsbrex.dev",
		siteName: "itsbrex.dev",
		images: [
			{
				url: "https://itsbrex.dev/og.png",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
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
	twitter: {
		title: "Chronark",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
			<body
				className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
					}`}
			>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
