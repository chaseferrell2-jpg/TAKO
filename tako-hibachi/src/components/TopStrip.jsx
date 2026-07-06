export default function TopStrip({ locationText, isOpen }) {
  const statusColor = isOpen ? "text-jade" : "text-crimson";
  const statusLabel = isOpen ? "OPEN" : "CLOSED";

  return (
    <div className="bg-panel border-b border-edge">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-2.5">
        <span className={`live-dot ${statusColor}`} aria-hidden="true">
          <svg viewBox="0 0 10 10" className="h-2.5 w-2.5">
            <circle cx="5" cy="5" r="5" fill="currentColor" />
          </svg>
        </span>
        <p className="text-center text-xs font-semibold tracking-widest text-neutral-200 sm:text-sm">
          <span className={`${statusColor} mr-2`}>{statusLabel}</span>
          {locationText}
        </p>
      </div>
    </div>
  );
}
