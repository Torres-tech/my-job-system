import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:block md:w-64 border-r min-h-[calc(100vh-56px)]">
      <div className="p-4 space-y-2 text-sm">
        <div className="text-gray-500 uppercase tracking-wide">Navigation</div>
        <ul className="space-y-1">
          <li>
            <Link href="/dashboard" className="block rounded px-2 py-1 hover:bg-gray-50">
              Overview
            </Link>
          </li>
          <li>
            <Link href="/dashboard/mentee" className="block rounded px-2 py-1 hover:bg-gray-50">
              Mentee View
            </Link>
          </li>
          <li>
            <Link href="/dashboard/mentor" className="block rounded px-2 py-1 hover:bg-gray-50">
              Mentor View
            </Link>
          </li>
          <li>
            <Link href="/dashboard/admin" className="block rounded px-2 py-1 hover:bg-gray-50">
              Admin View
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}


