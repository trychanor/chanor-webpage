import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/app/components/LenisWrapper";
import Header from "@/app/components/header";
import FooterCTASection from "@/app/components/footer";
import { ToastProvider } from "@/app/components/ToastProvider";
import Script from "next/script";
// import WaitlistModal from "./components/ui/WaitlistModal";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ef5a22",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Chanor",
    default:
      "Chanor | The First African Banking App That Speaks Your Language",
  },
  description:
    "Chanor is the first African banking app that speaks your language, offering fast, secure, and easy money transfers, airtime top-ups, data recharges, POS payments, and digital banking services for individuals and businesses across Nigeria.",
  keywords: [
    "Chanor",
    "Chanor fintech app",
    "Send money Nigeria",
    "Airtime top up app",
    "Data recharge Nigeria",
    "Mobile banking app Nigeria",
    "Chanor business account",
    "POS payment Nigeria",
    "Voice banking app",
    "Secure money transfer Nigeria",
    "Fast payment app Nigeria",
    "Trusted fintech Nigeria",
    "Online wallet Nigeria",
    "Digital banking Nigeria",
  ],
  authors: [{ name: "Chanor", url: "https://trychanor.com" }],
  robots: "index, follow",
  openGraph: {
    title: "Chanor",
    description:
      "Chanor is the first African banking app that speaks your language, offering fast, secure, and easy money transfers, airtime top-ups, data recharges, POS payments, and digital banking services for individuals and businesses across Nigeria.",
    url: "https://trychanor.com",
    siteName: "Chanor",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://trychanor.com/chanor-og.jpeg",
        width: 1200,
        height: 630,
        alt: "Chanor Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanor",
    description:
      "Chanor is the first African banking app that speaks your language, offering fast, secure, and easy money transfers, airtime top-ups, data recharges, POS payments, and digital banking services for individuals and businesses across Nigeria.",
    creator: "",
    images: ["https://trychanor.com/chanor-og.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/chanor-og.jpeg",
  },
  metadataBase: new URL("https://trychanor.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <ToastProvider>
          <LenisWrapper>
            <Header />

            <main>
              {children}
              {/* <WaitlistModal /> */}
            </main>
            <FooterCTASection />
          </LenisWrapper>
        </ToastProvider>
        <Script
          type="application/ld+json"
          id="organization-schema"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Chanor",
              url: "https://trychanor.com",
              logo: "https://trychanor.com/logo.png",
              sameAs: [
                "https://twitter.com/chanor",
                "https://facebook.com/chanor",
                "https://instagram.com/chanor",
                "https://linkedin.com/company/chanor",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+2349015759875",
                  contactType: "customer support",
                  email: "support@chanor.ng",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
