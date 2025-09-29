export default function DashboardHome() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
      <p className="text-gray-600">
        Welcome to Job Application Copilot. Use the sidebar to navigate between views.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Applications this week</div>
          <div className="text-2xl font-semibold">0</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Average match score</div>
          <div className="text-2xl font-semibold">—</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="text-sm text-gray-500">Offers</div>
          <div className="text-2xl font-semibold">0</div>
        </div>
      </div>
    </section>
  );
}


