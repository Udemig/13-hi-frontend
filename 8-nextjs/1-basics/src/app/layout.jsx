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

// Bu metadata bütün sayfalara etki ediyor
export const metadata = {
  title: { default: "Amazon", template: "Amazon | %s " },
  description: "Amazon en popüler alış veriş sitesi...",
  keywords: ["amazon", "alışveriş", "elektronik", "teknoloji"],
  author: "Amazon",
  robots: "index,follow",
  openGraph: {
    title: "Amazon",
    description: "Amazon en popüler alış veriş sitesi...",
    url: "https://amazon.com",
    siteName: "Amazon",
    images: ["https://amazon.com/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="border-b p-5 text-center">Header</header>

        <main className="text-2xl my-40 text-center flex-1">{children}</main>

        <footer className="border-t p-5 text-center">Footer</footer>
      </body>
    </html>
  );
}
