"use client";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import { ContactDrawer } from "./components/ContactDrawer/ContactDrawer";
import ViewportHeightFixer from "./components/ViewportHeightFixer";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
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
        <AnimatePresence mode="wait" initial={true}>
          <>
            <ViewportHeightFixer />
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Navbar />
            </motion.div>

            <div className="flex min-h-[calc(100dvh-170px)] flex-col">
              <main className="flex-grow">{children}</main>

              <Footer />

              <ContactDrawer />
            </div>
            <svg
              style={{
                position: "absolute",
                width: 0,
                height: 0,
                visibility: "hidden",
              }}
            >
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
          </>
        </AnimatePresence>
      </body>
    </html>
  );
}
