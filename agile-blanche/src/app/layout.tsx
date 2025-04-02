"use client"
import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wdth,wght@98.1,300..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
