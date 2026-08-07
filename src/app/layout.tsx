import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

// Initializing the technical, sharp font
const bricolage = Bricolage_Grotesque({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Zurge Studios | Redefining Narrative Gaming",
  description: "Founded in 2026, Zurge Studios is an independent game development studio creating high-quality, story-driven experiences. Currently developing METAL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${bricolage.variable} font-sans antialiased selection:bg-[#00ffcc]/30 selection:text-[#00ffcc]`}>
        <main className="relative min-h-screen flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}