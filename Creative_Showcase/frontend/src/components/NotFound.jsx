import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="animate-pulse text-7xl font-extrabold tracking-tight">
        404
      </h1>

      <p className="mt-4 text-lg text-slate-300">Page not found</p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-sky-500 px-6 py-2 text-sm font-medium text-white transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Go Home
      </Link>
    </div>
  );
}
