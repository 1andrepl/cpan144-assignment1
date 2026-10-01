import Link from "next/link";

export default function Navbar() {
  return (
    // Navigation links between the main application pages
    <nav>
      <Link href="/">Home</Link>
      <Link href="/counter">Counter</Link>
      <Link href="/feedback">Feedback</Link>
    </nav>
  );
}