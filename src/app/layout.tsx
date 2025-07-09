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
  title: 'Himanshu Raj Yadav - Full Stack Developer',
  description: 'Passionate full-stack developer specializing in React, Next.js, TypeScript, and Machine Learning. Creating innovative web solutions and data-driven applications.',
  keywords: 'full-stack developer, React, Next.js, TypeScript, Machine Learning, web development',
  authors: [{ name: 'Himanshu Raj Yadav' }],
  openGraph: {
    title: 'Himanshu Raj Yadav - Full Stack Developer',
    description: 'Passionate full-stack developer specializing in modern web technologies',
    type: 'website',
  },
}
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

        {children}
      </body>
    </html>
  );
}


