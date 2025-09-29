export default function MentorView() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold text-gray-900">Mentor View</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">Mentee Progress</div>
          <div className="text-sm text-gray-600">No data yet.</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">Feedback Panel</div>
          <div className="text-sm text-gray-600">Leave feedback on mentee resumes and applications.</div>
        </div>
      </div>
    </section>
  );
}


