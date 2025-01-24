import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/header";
import Footer from "./components/layouts/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MarchEx",
  description: "A simple ecommerce app",
};

export default function RootLayout({children }) {
  return (
    <html lang="en">
    <head>
      <title>MarchEx</title>

    </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
       <main>{children}</main>
       <Footer />
      </body>

    </html>
  );
}
