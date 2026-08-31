import SmoothScrollProvider from "@/src/components/animation/smooth-scroll";
import Footer from "@/src/components/shared/layout/footer/footer";
import Navbar from "@/src/components/shared/layout/navbar/navbar";
import { MobileMenuProvider } from "@/src/context/MobileMenuContext";
import { fontVariables } from "@/src/utils/font";
import Script from "next/script";
import { ReactNode, Suspense } from "react";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-E2XLWGXPJS";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} antialiased`}>
        {/* Google tag (gtag.js) — loaded once here so it's present on every page */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        <Suspense>
          <MobileMenuProvider>
            <SmoothScrollProvider>
              <Navbar />
              <main className="bg-background-13">{children}</main>
              <Footer />
            </SmoothScrollProvider>
          </MobileMenuProvider>
        </Suspense>
      </body>
    </html>
  );
}
