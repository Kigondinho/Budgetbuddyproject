import { Inter } from "next/font/google";

import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Budget Buddy",
  description: "Finanial Management Made Easy",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header />
        {/* main content */}
        <main className="min-h-screen">{children}</main>
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto text-center">
            <p>Made by Albert Ngotho and Andrew Kigondu <br></br>
            ICS3A PROJECT 1</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
