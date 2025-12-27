export default function Input({ label, error, ...props }) {
  return (
    <div className="space-y-2">
      {label && <label className="text-gray-700 font-medium">{label}</label>}

      <input
        {...props}
        className="
          w-full px-4 py-3 rounded-xl border-2 
          border-gray-200 focus:border-purple-500
          focus:outline-none transition-colors
        "
      />

      {error && <p className="text-red-500 text-sm">⚠️ {error}</p>}
    </div>
  );
}
