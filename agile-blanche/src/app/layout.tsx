"use client"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TestFoot from "./TestFoot";

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
        <Footer/>
        {/* <TestFoot/> */}
      </body>
    </html>
  );
}
