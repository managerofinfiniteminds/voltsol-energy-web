export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status">
      <span className="sr-only">Loading&hellip;</span>
      <span
        aria-hidden="true"
        className="h-10 w-10 animate-spin rounded-full border-2 border-gold/30 border-t-gold"
      />
    </div>
  );
}
