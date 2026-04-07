import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoLearnix — Master MBBS Exams with Confidence",
  description: "Practice 10,000+ MCQs organized by Year, Block, Module, Subject & Topic. Timed exams, instant feedback, and detailed analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-text-primary">
        {children}
      </body>
    </html>
  );
}
