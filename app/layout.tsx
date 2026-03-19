import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Surya Traders | Premium Corporate Gift Solutions in Pratapgarh, UP",
  description:
    "Premium corporate gifting solutions in Pratapgarh, Uttar Pradesh. Custom gift combos, executive sets, bags, t-shirts, and branded merchandise. Call +91-9131379151 or +91-7545088000.",
  keywords: "corporate gifts, premium gifts, executive gifts, custom gifts, gift combos, bags, t-shirts, Pratapgarh, Uttar Pradesh, Surya Traders",
  authors: [{ name: "Surya Traders" }],
  creator: "Surya Traders",
  publisher: "Surya Traders",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "Surya Traders | Premium Corporate Gift Solutions",
    description: "Elevate your corporate relationships with thoughtfully curated premium gifts. Serving businesses across Pratapgarh, Uttar Pradesh.",
    url: "https://yourdomain.com",
    siteName: "Surya Traders",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 400,
        height: 400,
        alt: "Surya Traders Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Traders | Premium Corporate Gifts",
    description: "Premium corporate gifting solutions in Pratapgarh, UP. Custom gifts for businesses.",
    images: ["/logo.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_playfair.variable} ${_inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
