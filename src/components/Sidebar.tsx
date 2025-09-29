import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden md:block md:w-64 border-r min-h-[calc(100vh-56px)] bg-white">
      <div className="p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">LW</span>
          </div>
          <span className="font-semibold text-gray-900">LearnWise AI</span>
        </div>
        
        <div className="space-y-4">
          <div className="text-gray-500 uppercase tracking-wide text-xs font-medium">Learning</div>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700">
                <span className="text-lg">📊</span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/mentee" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700">
                <span className="text-lg">🎓</span>
                <span>My Learning</span>
              </Link>
            </li>
            <li>
              <Link href="/courses" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700">
                <span className="text-lg">📚</span>
                <span>Browse Courses</span>
              </Link>
            </li>
            <li>
              <Link href="/progress" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700">
                <span className="text-lg">📈</span>
                <span>Progress</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="text-gray-500 uppercase tracking-wide text-xs font-medium">Teaching</div>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard/mentor" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700">
                <span className="text-lg">👨‍🏫</span>
                <span>Instructor Hub</span>
              </Link>
            </li>
            <li>
              <Link href="/create-course" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700">
                <span className="text-lg">➕</span>
                <span>Create Course</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="text-gray-500 uppercase tracking-wide text-xs font-medium">System</div>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard/admin" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700">
                <span className="text-lg">⚙️</span>
                <span>Admin Panel</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className="flex items-center space-x-3 rounded-lg px-3 py-2 hover:bg-gray-50 text-gray-700">
                <span className="text-lg">🔧</span>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}


