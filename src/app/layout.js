import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wondr Clone",
  description: "An Application for banking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-white border-gray-200 w-full transition-all duration-300 relative">
              <div className="flex flex-wrap w-full items-center justify-between max-w-screen-xl p-4 mx-auto">
                <Link href="http://localhost:3000" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Image src="/wondr-logo.png" width={120} height={80} className="object-contain" alt="logo"/>
                </Link>
              <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
                <div className="flex items-center odd:divide-x odd:divide-[#7A7A7A] md:me-0 me-1">
                  <button className="text-[16px] leading-[24px] font-demibold pe-2 text-[#141414]">ID</button>
                  <button className="text-[16px] leading-[24px] font-demibold ps-2 text-[#8c8c8c]">EN</button>
                </div>
              </div>
             </div>
            </nav>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}
