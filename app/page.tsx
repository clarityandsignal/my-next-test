export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
          Clarity & Signal
        </p>

        <h1 className="mt-6 text-5xl font-bold tracking-tight">
          Websites for copywriters who want their words to convert.
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Strategy, structure, and clean Webflow-ready design for copywriters
          who need a trusted website partner.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="mailto:jean-pierre@clarityandsignal.com"
            className="rounded-full bg-white px-6 py-3 font-medium text-black"
          >
            Start a Project
          </a>

          <a
            href="#"
            className="rounded-full border border-white/20 px-6 py-3 font-medium"
          >
            View Work
          </a>
        </div>
      </section>
    </main>
  );
}
