"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-gray-900">
          Job Application Copilot
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/mentee">Mentee</Link>
          <Link href="/dashboard/mentor">Mentor</Link>
          <Link href="/dashboard/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}


