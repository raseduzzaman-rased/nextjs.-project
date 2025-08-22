export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-16 h-16 border-4 border-teal-600 border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
