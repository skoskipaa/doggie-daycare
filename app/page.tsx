export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-amber-50 font-sans dark:bg-zinc-950">
      <main className="flex w-full max-w-2xl flex-col items-center gap-6 px-6 py-24 text-center">
        <span className="text-6xl" aria-hidden="true">
          🐾
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Welcome to Doggie Daycare
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Dog walking and daycare for your best friend. Book a walk or a day of
          play — we&apos;ll take care of the tail wags.
        </p>
      </main>
    </div>
  );
}
