import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nettify | Discover Movies & Series",
  description:
    "Nettify is a modern movie discovery platform to explore movies, ratings, genres and series information.",
  keywords: [
    "movies",
    "series",
    "movie discovery",
    "Nettify",
  ],
  authors: [
    {
      name: "Nettify Team",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>
        <Navbar />

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <p>
            © 2026 Nettify — Movie Discovery Platform
          </p>
          <span>
            Built with Next.js
          </span>
        </footer>

      </body>
    </html>
  );
}