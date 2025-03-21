"use client"
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Collapsebar2 from "./components/Collapsebar2"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
       <Navbar/>
        {/* <br /> */}
        {/* <Collapsebar2/> */}
        {children}
      </body>
    </html>
  );
}
