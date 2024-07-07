import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Midnitcode Innovations",
  description: "Discover innovative solutions with Midnitcode Innovations. We transform your digital presence with cutting-edge web development and design.",
  keywords: "Midnitcode, Midnitcode Innovations, web development, software solutions, digital transformation",
  author: "Midnitcode Innovations",
  openGraph: {
    title: "Midnitcode Innovations",
    description: "Discover innovative solutions with Midnitcode Innovations. We transform your digital presence with cutting-edge web development and design.",
    url: "https://www.midnitcode.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midnitcode Innovations",
    description: "Discover innovative solutions with Midnitcode Innovations. We transform your digital presence with cutting-edge web development and design.",
    creator: "@midnitcode",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
