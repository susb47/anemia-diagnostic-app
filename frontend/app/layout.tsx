import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Anemia Diagnostic AI",
  description: "GNN-powered anemia detection system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen text-slate-900 font-sans">
        {/* The Navbar Hook: Lives outside the page content */}
        <Navbar />
        
        {/* Page Content Injection */}
        <div className="max-w-7xl mx-auto p-6 lg:p-10">
          {children}
        </div>
      </body>
    </html>
  );
}