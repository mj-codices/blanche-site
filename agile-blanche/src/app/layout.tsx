"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wdth,wght@98.1,300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden">
        <Navbar />
        <div className="flex min-h-[calc(100dvh-170px)] flex-col">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <svg style={{ position: "absolute", width: 0, height: 0, visibility: "hidden" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="10"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" result="mix" />
          </filter>
        </defs>
      </svg>
      </body>
    </html>
  );
}
