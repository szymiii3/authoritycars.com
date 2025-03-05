import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/features/global/theme-provider";
import Navbar from "@/features/global/navbar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Authoritycars | Landing Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="flex items-center justify-center">
            <Navbar />
            <main className="flex w-full flex-col overflow-y-auto">
              {children}
            </main>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
