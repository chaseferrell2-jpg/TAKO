import { ORDER_URL, PHONE_DISPLAY, PHONE_TEL } from "../data.js";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt=""
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            className="h-9 w-9 rounded-full bg-white object-contain p-0.5"
          />
          <span className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-wide text-white">
              TAKO<span className="text-crimson">.</span>
            </span>
            <span className="hidden text-[11px] font-semibold tracking-[0.25em] text-flame sm:inline">
              HIBACHI · SUSHI
            </span>
          </span>
        </a>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="#menu"
            className="text-sm font-semibold tracking-wide text-neutral-300 transition hover:text-white"
          >
            Menu
          </a>
          <a
            href="#visit"
            className="hidden text-sm font-semibold tracking-wide text-neutral-300 transition hover:text-white sm:inline"
          >
            Hours
          </a>
          <a
            href={PHONE_TEL}
            aria-label={`Call TAKO at ${PHONE_DISPLAY}`}
            className="flex items-center gap-2 rounded-full border border-edge p-2 text-white transition hover:border-crimson hover:text-crimson sm:px-3 sm:py-1.5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden text-sm font-semibold lg:inline">
              {PHONE_DISPLAY}
            </span>
          </a>
          <a
            href={ORDER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-crimson px-4 py-2 text-sm font-bold tracking-wide text-white transition hover:bg-crimson-dark"
          >
            Order
          </a>
        </div>
      </nav>
    </header>
  );
}
