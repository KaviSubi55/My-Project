import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import Header from "@/components/Header";
import Footer from "@/components/Footer";
=======
import { AuthProvider } from "@/lib/contexts/AuthContext";
>>>>>>> 37b3bae1fbe796c59f2aea75ffb59a989dca0be2

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alpine Resort - Your Multi-Season Adventure Destination",
  description: "Book accommodations, activities, sports schools, and equipment rentals for year-round adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
<<<<<<< HEAD
        <Header />
        {children}
        <Footer />
=======
        <AuthProvider>
          {children}
        </AuthProvider>
>>>>>>> 37b3bae1fbe796c59f2aea75ffb59a989dca0be2
      </body>
    </html>
  );
}
