import Link from "next/link";

export default function NotFound() {
  return (
    <section className="arkon-container grid min-h-[70vh] place-items-center py-16 text-center">
      <div>
        <p className="arkon-eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-black text-white">Page not found</h1>
        <p className="mt-4 text-arkon-silver">The page may have moved or the link may be incomplete.</p>
        <Link href="/en" className="arkon-btn arkon-btn-gold mt-8">Return home</Link>
      </div>
    </section>
  );
}
