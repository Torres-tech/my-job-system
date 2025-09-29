"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">LW</span>
          </div>
          <span className="font-semibold text-gray-900">LearnWise AI</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="/dashboard" className="hover:text-gray-900 transition-colors">Dashboard</Link>
          <Link href="/courses" className="hover:text-gray-900 transition-colors">Courses</Link>
          <Link href="/dashboard/mentee" className="hover:text-gray-900 transition-colors">My Learning</Link>
          <Link href="/dashboard/mentor" className="hover:text-gray-900 transition-colors">Instructor</Link>
        </nav>
      </div>
    </header>
  );
}


