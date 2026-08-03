import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nettify | Movie Discovery",
  description: "เว็บไซต์ค้นหาและค้นพบภาพยนตร์และซีรีส์",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer className="footer">© 2026 Nettify — Student Web Project</footer>
      </body>
    </html>
  );
}