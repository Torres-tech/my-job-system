export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-lg border bg-white p-6">
        <h1 className="text-xl font-semibold">Login</h1>
        <form className="mt-4 space-y-3">
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input type="email" className="mt-1 w-full rounded border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Password</label>
            <input type="password" className="mt-1 w-full rounded border px-3 py-2" />
          </div>
          <button type="submit" className="w-full rounded bg-gray-900 text-white py-2">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}


