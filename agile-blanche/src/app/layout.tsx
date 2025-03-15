"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Bootnav from "./components/Bootnav"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Bootnav/>
        {children}
      </body>
    </html>
  );
}
