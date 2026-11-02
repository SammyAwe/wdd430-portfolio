
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white text-slate-800 border-b border-orange-100">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide text-orange-600">
          Samuel Awe
        </Link>

        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-orange-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-orange-600 transition">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
