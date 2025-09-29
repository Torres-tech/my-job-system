import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-3xl p-8 sm:p-12">
        <h1 className="text-4xl font-semibold">Job Application Copilot</h1>
        <p className="mt-4 text-gray-600">
          A multi-agent system that helps students apply for jobs end-to-end.
        </p>
        <div className="mt-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-white hover:bg-black"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
