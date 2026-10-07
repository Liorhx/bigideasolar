import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#065f46",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "BigIdeaSolar - Rooftop Solar Installation & PM Surya Ghar Subsidy up to ₹108,000",
  description:
    "BigIdeaSolar is Lucknow's premier Rooftop Solar Platform at Kalyanpur. Install certified Tier-1 Tata, Waaree & Adani solar panels. Calculate your solar budget, claim ₹108,000 subsidy & reduce electricity bills to zero.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
  keywords: [
    "BigIdeaSolar",
    "Big Idea Solar Lucknow",
    "Rooftop Solar Kalyanpur Lucknow",
    "PM Surya Ghar Yojana Lucknow",
    "Solar Subsidy UP",
    "Tata Power Solar Lucknow",
    "Waaree Solar Dealer Lucknow",
    "Adani Solar Panels UP",
    "Solar Net Metering UPPCL",
    "Solar Panel Price Lucknow"
  ],
  authors: [{ name: "BigIdeaSolar Team" }],
  openGraph: {
    title: "BigIdeaSolar - Rooftop Solar & Up to ₹108,000 Govt Subsidy",
    description:
      "Get 0 electricity bill with PM Surya Ghar Muft Bijli Yojana. Instant solar cost calculation, 2% discount coupon & free rooftop survey from BigIdeaSolar.",
    type: "website",
    locale: "en_IN",
    siteName: "BigIdeaSolar",
    images: [{ url: "/icon.png", width: 512, height: 512, alt: "BigIdeaSolar Logo" }]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased flex flex-col">
        {children}
      </body>
    </html>
  );
}
