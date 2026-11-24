import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kent Jhuros Manatad | Personal Site",
  description: "A personal site built with Next.js",
};

const navLink = "text-slate-600 underline-offset-4 hover:text-teal-700 hover:underline";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-stone-50 text-slate-800 antialiased">
        <header className="border-b border-stone-200">
          <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-serif text-lg font-semibold text-slate-900">
              Kent Manatad
            </Link>
            <div className="flex gap-6 text-sm">
              <Link href="/" className={navLink}>
                Home
              </Link>
              <Link href="/about" className={navLink}>
                About
              </Link>
              <Link href="/projects" className={navLink}>
                Projects
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">{children}</main>

        <footer className="border-t border-stone-200">
          <p className="mx-auto max-w-3xl px-6 py-6 text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Kent Jhuros Manatad
          </p>
        </footer>
      </body>
    </html>
  );
}
