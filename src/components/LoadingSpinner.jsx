export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center py-24 gap-4">
      <div className="w-14 h-14 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin" />
      <p className="text-sm text-gray-400 font-medium">Loading photos…</p>
    </div>
  );
}
