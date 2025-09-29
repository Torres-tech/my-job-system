export default function LearnerView() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">My Learning Journey</h1>
        <p className="text-gray-600 mt-2">Track your progress and discover new learning opportunities.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-xl border bg-gradient-to-br from-blue-50 to-blue-100 p-6 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-blue-600 font-medium">Active Courses</div>
              <div className="text-2xl font-bold text-blue-700 mt-1">3</div>
            </div>
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xl">📚</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-gradient-to-br from-green-50 to-green-100 p-6 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-green-600 font-medium">Completed</div>
              <div className="text-2xl font-bold text-green-700 mt-1">12</div>
            </div>
            <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xl">✅</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-gradient-to-br from-purple-50 to-purple-100 p-6 border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-purple-600 font-medium">Certificates</div>
              <div className="text-2xl font-bold text-purple-700 mt-1">5</div>
            </div>
            <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-xl">🏆</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Continue Learning</h3>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">JavaScript Fundamentals</div>
                  <div className="text-sm text-gray-500">Lesson 5 of 12</div>
                </div>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '42%'}}></div>
                </div>
              </div>
            </div>
            <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">React Advanced Patterns</div>
                  <div className="text-sm text-gray-500">Lesson 8 of 15</div>
                </div>
                <div className="w-16 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '53%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl border bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Recommendations</h3>
          <div className="space-y-3">
            <div className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <div className="font-medium text-sm">TypeScript Mastery</div>
              <div className="text-xs text-gray-500">95% match - Based on your JavaScript progress</div>
            </div>
            <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <div className="font-medium text-sm">Node.js Backend Development</div>
              <div className="text-xs text-gray-500">88% match - Natural next step</div>
            </div>
            <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="font-medium text-sm">Database Design</div>
              <div className="text-xs text-gray-500">82% match - Popular among developers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


