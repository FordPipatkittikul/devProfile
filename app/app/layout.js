import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AppContextProvider } from "@/context/AppContext";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevProfile",
  description: "showcase your developer skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Toaster />
        <AppContextProvider>
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
