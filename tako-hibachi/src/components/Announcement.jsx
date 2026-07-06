export default function Announcement({ text }) {
  if (!text || !text.trim()) return null;

  return (
    <div className="border-b border-flame/30 bg-flame/10">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2.5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0 text-flame"
          aria-hidden="true"
        >
          <path d="M3 11l18-5v12L3 14v-3z" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
        <p className="text-center text-sm font-semibold text-flame">{text}</p>
      </div>
    </div>
  );
}
