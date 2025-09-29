export default function InstructorView() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Instructor Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your courses and track student progress.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 p-6 border-blue-200">
          <div className="text-sm text-blue-600 font-medium">Total Students</div>
          <div className="text-3xl font-bold text-blue-700 mt-2">1,247</div>
          <div className="text-xs text-blue-500 mt-1">+23 this week</div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-green-50 to-green-100 p-6 border-green-200">
          <div className="text-sm text-green-600 font-medium">Active Courses</div>
          <div className="text-3xl font-bold text-green-700 mt-2">8</div>
          <div className="text-xs text-green-500 mt-1">3 new this month</div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-purple-50 to-purple-100 p-6 border-purple-200">
          <div className="text-sm text-purple-600 font-medium">Avg. Rating</div>
          <div className="text-3xl font-bold text-purple-700 mt-2">4.8</div>
          <div className="text-xs text-purple-500 mt-1">Based on 892 reviews</div>
        </div>
        <div className="rounded-xl border bg-gradient-to-br from-orange-50 to-orange-100 p-6 border-orange-200">
          <div className="text-sm text-orange-600 font-medium">Completion Rate</div>
          <div className="text-3xl font-bold text-orange-700 mt-2">87%</div>
          <div className="text-xs text-orange-500 mt-1">Above platform avg.</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Student Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">JS</div>
              <div className="flex-1">
                <div className="font-medium text-sm">Sarah completed "JavaScript Fundamentals"</div>
                <div className="text-xs text-gray-500">2 hours ago</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">R</div>
              <div className="flex-1">
                <div className="font-medium text-sm">Mike started "React Advanced Patterns"</div>
                <div className="text-xs text-gray-500">4 hours ago</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">T</div>
              <div className="flex-1">
                <div className="font-medium text-sm">Alex earned "TypeScript Expert" badge</div>
                <div className="text-xs text-gray-500">6 hours ago</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium text-sm">JavaScript Fundamentals</div>
                <div className="text-xs text-gray-500">1,247 students</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600">4.9</div>
                <div className="text-xs text-gray-500">rating</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium text-sm">React Advanced Patterns</div>
                <div className="text-xs text-gray-500">892 students</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600">4.7</div>
                <div className="text-xs text-gray-500">rating</div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium text-sm">TypeScript Mastery</div>
                <div className="text-xs text-gray-500">654 students</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-green-600">4.8</div>
                <div className="text-xs text-gray-500">rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


