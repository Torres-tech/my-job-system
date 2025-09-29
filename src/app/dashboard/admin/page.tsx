export default function AdminView() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold text-gray-900">Admin View</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">Job Sources</div>
          <div className="text-sm text-gray-600">Configure sources like LinkedIn/Indeed/Handshake.</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">System Stats</div>
          <div className="text-sm text-gray-600">Charts will appear here.</div>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <div className="font-medium">Agents</div>
          <div className="text-sm text-gray-600">Monitor agent runs and logs.</div>
        </div>
      </div>
    </section>
  );
}


