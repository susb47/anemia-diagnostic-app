import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./providers";

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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-100 font-sans transition-colors">
        <ThemeProvider>
          <Navbar />
          <div className="max-w-7xl mx-auto p-6 lg:p-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}