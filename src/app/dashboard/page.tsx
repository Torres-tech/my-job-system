export default function DashboardHome() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Learning Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome to LearnWise AI. Track your progress and continue your learning journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 p-6 border-blue-200">
          <div className="text-sm text-blue-600 font-medium">Courses Completed</div>
          <div className="text-3xl font-bold text-blue-700 mt-2">12</div>
          <div className="text-xs text-blue-500 mt-1">+3 this week</div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-green-50 to-green-100 p-6 border-green-200">
          <div className="text-sm text-green-600 font-medium">Learning Streak</div>
          <div className="text-3xl font-bold text-green-700 mt-2">7 days</div>
          <div className="text-xs text-green-500 mt-1">Keep it up!</div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-purple-50 to-purple-100 p-6 border-purple-200">
          <div className="text-sm text-purple-600 font-medium">Skills Mastered</div>
          <div className="text-3xl font-bold text-purple-700 mt-2">8</div>
          <div className="text-xs text-purple-500 mt-1">JavaScript, React, Python</div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-orange-50 to-orange-100 p-6 border-orange-200">
          <div className="text-sm text-orange-600 font-medium">Study Time</div>
          <div className="text-3xl font-bold text-orange-700 mt-2">24h</div>
          <div className="text-xs text-orange-500 mt-1">This month</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Completed "Advanced React Patterns"</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Started "Machine Learning Basics"</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Earned "Python Expert" badge</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended for You</h3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-sm">TypeScript Fundamentals</div>
              <div className="text-xs text-gray-500">Based on your JavaScript progress</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-sm">Data Structures & Algorithms</div>
              <div className="text-xs text-gray-500">Popular among developers</div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="font-medium text-sm">UI/UX Design Principles</div>
              <div className="text-xs text-gray-500">Complement your React skills</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


