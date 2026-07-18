import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <section className="arkon-container grid min-h-screen place-items-center py-16 text-center">
      <div>
        <p className="arkon-eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-black text-arkon-navy">Page not found</h1>
        <Link href="/en" className="arkon-btn arkon-btn-gold mt-8">Return home</Link>
      </div>
    </section>
  );
}
