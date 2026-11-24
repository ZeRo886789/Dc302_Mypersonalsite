import Link from "next/link";

export default function NotFound() {
  return (
    <section className="max-w-xl mx-auto px-6 py-16 text-center">
      <h1 className="font-serif text-4xl font-semibold tracking-tight text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 text-lg text-slate-600">
        That address doesn&apos;t match any page on this site.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-teal-700 underline underline-offset-4 hover:text-teal-900"
      >
        Back to Home
      </Link>
    </section>
  );
}
