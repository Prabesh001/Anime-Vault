import { DM_Sans } from "next/font/google";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.css";
import { FaChevronUp } from "react-icons/fa6";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
  icons:"../logo.svg"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <main className="max-w-7xl mx-auto bg-[#0F1117]">
          <div id="top"></div>
          <Hero />
          {children}
          <Footer />
          <a className="fixed bottom-20 right-4 bg-gray-900 p-4 rounded-full" href="#top"><FaChevronUp/></a>
        </main>
      </body>
    </html>
  );
}
