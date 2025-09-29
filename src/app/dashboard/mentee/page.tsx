export default function MenteeView() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold text-gray-900">Mentee View</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">Job Matches</div>
          <div className="text-sm text-gray-600">No jobs yet. Start scraping from the Jobs tab.</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">Resume Versions</div>
          <div className="text-sm text-gray-600">Your tailored resumes will appear here.</div>
        </div>
        <div className="rounded-lg border bg-white p-4 md:col-span-2">
          <div className="font-medium">Application History</div>
          <div className="text-sm text-gray-600">No applications yet.</div>
        </div>
      </div>
    </section>
  );
}


