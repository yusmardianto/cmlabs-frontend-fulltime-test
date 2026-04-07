import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        
        {/* 🔝 Navbar */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <h1 className="font-bold text-lg">mealapp</h1>

            {/* Menu */}
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="/" className="hover:text-black">Home</a>
              <a href="/foods" className="hover:text-black">Foods</a>
              <a href="/ingredients" className="hover:text-black font-semibold text-black">
                Ingredients
              </a>
              <a href="#" className="hover:text-black">Local Culinary</a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}