import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-xl mx-auto px-6 py-16">
      <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-7xl">
        Hi, I&apos;m Kent.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
        I&apos;m a student who likes building web and mobile apps. This site
        collects what I have made so far.
      </p>
      <Link
        href="/projects"
        className="mt-8 inline-block rounded-md bg-teal-700 px-5 py-3 font-medium text-white hover:bg-teal-800"
      >
        See my projects
      </Link>
    </section>
  );
}
