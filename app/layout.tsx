import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "AI Review Summary | Summarize & Analyze Reviews with AI",
    template: "%s | AI Review Summary",
  },
  description:
    "Summarize and analyze product reviews, feedback, and testimonials with AI. Get instant insights, sentiment analysis, and key takeaways from your review data.",
  keywords: [
    "AI review summary",
    "review summarizer",
    "sentiment analysis",
    "product reviews",
    "feedback analysis",
    "testimonial summarizer",
    "AI summarization",
  ],
  creator: "Mohammad Aman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AI Review Summary",
    title: "AI Review Summary | Summarize & Analyze Reviews with AI",
    description:
      "Summarize and analyze product reviews, feedback, and testimonials with AI. Get instant insights and key takeaways.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Review Summary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Review Summary | Summarize & Analyze Reviews with AI",
    description:
      "Summarize and analyze product reviews, feedback, and testimonials with AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
