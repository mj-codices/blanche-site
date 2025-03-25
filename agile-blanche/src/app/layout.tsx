"use client"
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
       <Navbar/>
        {children}
      </body>
    </html>
  );
}
