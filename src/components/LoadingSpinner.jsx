export default function LoadingSpinner() {
  return (
    <div className="flex flex-col justify-center items-center py-32 gap-6 animate-fade-in">
      <div className="relative">
        <div className="w-12 h-12 border-2 border-gray-200 border-t-[#1a1a2e] rounded-full animate-spin" />
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500 font-medium">Loading your gallery</p>
        <p className="text-xs text-gray-300 mt-1">Fetching beautiful photos...</p>
      </div>
    </div>
  );
}
