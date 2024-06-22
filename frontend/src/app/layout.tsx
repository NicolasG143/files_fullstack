import type {Metadata} from "next";

import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  title: "frontend",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-background dark container m-auto grid min-h-screen grid-rows-[auto,1fr] px-4 font-sans antialiased">
        <header className="text-center text-xl font-bold leading-[4rem]">
          <Link href="/">frontend</Link>
        </header>
        <main className="py-8">{children}</main>
      </body>
    </html>
  );
}
