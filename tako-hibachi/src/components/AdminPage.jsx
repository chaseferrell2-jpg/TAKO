import { useState } from "react";
import { ADMIN_PASSCODE, DEFAULT_SITE_DATA } from "../data.js";

export default function AdminPage({ siteData, onSave, onExit }) {
  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [draft, setDraft] = useState(() =>
    JSON.parse(JSON.stringify(siteData))
  );
  const [savedMessage, setSavedMessage] = useState("");

  function handleUnlock() {
    if (passcode === ADMIN_PASSCODE) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect passcode. Try again.");
    }
  }

  function updatePrice(category, itemId, value) {
    setDraft((prev) => ({
      ...prev,
      menu: {
        ...prev.menu,
        [category]: prev.menu[category].map((item) =>
          item.id === itemId ? { ...item, price: value } : item
        ),
      },
    }));
    setSavedMessage("");
  }

  function handleSave() {
    // Normalize prices to valid numbers before committing
    const cleaned = {
      ...draft,
      locationText: draft.locationText.trim() || DEFAULT_SITE_DATA.locationText,
      menu: Object.fromEntries(
        Object.entries(draft.menu).map(([category, items]) => [
          category,
          items.map((item) => {
            const num = Number(item.price);
            return { ...item, price: Number.isFinite(num) && num >= 0 ? num : 0 };
          }),
        ])
      ),
    };
    setDraft(cleaned);
    onSave(cleaned);
    setSavedMessage("Changes saved. The live site is updated.");
  }

  function handleReset() {
    setDraft(JSON.parse(JSON.stringify(DEFAULT_SITE_DATA)));
    setSavedMessage("");
  }

  /* ─── Locked view ─────────────────────────────────────────────── */
  if (!unlocked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-ink px-4">
        <div className="w-full max-w-sm rounded-xl border border-edge bg-panel p-8">
          <h1 className="font-display text-2xl tracking-wide text-white">
            OWNER ACCESS
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Enter the passcode to manage the live site.
          </p>
          <input
            type="password"
            value={passcode}
            onChange={(event) => setPasscode(event.target.value)}
            onKeyDown={(event) => event.key === "Enter" && handleUnlock()}
            placeholder="Passcode"
            autoFocus
            className="mt-5 w-full rounded-md border border-edge bg-ink px-4 py-3 text-white outline-none focus:border-crimson"
          />
          {error && <p className="mt-2 text-sm text-crimson">{error}</p>}
          <button
            onClick={handleUnlock}
            className="mt-4 w-full rounded-md bg-crimson py-3 text-sm font-bold tracking-widest text-white transition hover:bg-crimson-dark"
          >
            UNLOCK
          </button>
          <button
            onClick={onExit}
            className="mt-3 w-full py-2 text-sm text-neutral-400 transition hover:text-white"
          >
            ← Back to site
          </button>
        </div>
      </main>
    );
  }

  /* ─── Unlocked dashboard ──────────────────────────────────────── */
  return (
    <main className="min-h-screen bg-ink px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-3xl tracking-wide text-white">
            TAKO DASHBOARD
          </h1>
          <button
            onClick={onExit}
            className="rounded-md border border-edge px-4 py-2 text-sm font-semibold text-neutral-300 transition hover:border-crimson hover:text-white"
          >
            ← Back to site
          </button>
        </div>

        {/* Live status controls */}
        <section className="rounded-xl border border-edge bg-panel p-6">
          <h2 className="text-sm font-bold tracking-[0.25em] text-flame">
            LIVE STATUS BAR
          </h2>
          <label className="mt-4 block text-sm font-semibold text-neutral-300">
            Location text
            <input
              type="text"
              value={draft.locationText}
              onChange={(event) => {
                setDraft((prev) => ({
                  ...prev,
                  locationText: event.target.value,
                }));
                setSavedMessage("");
              }}
              className="mt-2 w-full rounded-md border border-edge bg-ink px-4 py-3 text-white outline-none focus:border-crimson"
            />
          </label>

          <div className="mt-5 flex items-center justify-between rounded-md border border-edge bg-ink px-4 py-3">
            <span className="text-sm font-semibold text-neutral-300">
              Truck status:{" "}
              <span className={draft.isOpen ? "text-jade" : "text-crimson"}>
                {draft.isOpen ? "OPEN (green dot)" : "CLOSED (red dot)"}
              </span>
            </span>
            <button
              role="switch"
              aria-checked={draft.isOpen}
              onClick={() => {
                setDraft((prev) => ({ ...prev, isOpen: !prev.isOpen }));
                setSavedMessage("");
              }}
              className={`relative h-7 w-12 rounded-full transition ${
                draft.isOpen ? "bg-jade" : "bg-crimson"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${
                  draft.isOpen ? "left-6" : "left-1"
                }`}
              />
            </button>
          </div>
        </section>

        {/* Menu price editor */}
        <section className="mt-6 rounded-xl border border-edge bg-panel p-6">
          <h2 className="text-sm font-bold tracking-[0.25em] text-flame">
            MENU PRICES
          </h2>
          {Object.entries(draft.menu).map(([category, items]) => (
            <div key={category} className="mt-5">
              <h3 className="mb-3 font-display text-lg tracking-wide text-white">
                {category}
              </h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center justify-between gap-4 rounded-md border border-edge bg-ink px-4 py-2.5"
                  >
                    <span className="text-sm font-semibold text-neutral-200">
                      {item.name}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      $
                      <input
                        type="number"
                        min="0"
                        step="0.05"
                        inputMode="decimal"
                        value={item.price}
                        onChange={(event) =>
                          updatePrice(category, item.id, event.target.value)
                        }
                        className="w-24 rounded-md border border-edge bg-panel px-3 py-1.5 text-right text-white outline-none focus:border-crimson"
                      />
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Save / reset */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleSave}
            className="flex-1 rounded-md bg-crimson py-3.5 text-sm font-bold tracking-widest text-white transition hover:bg-crimson-dark"
          >
            SAVE CHANGES
          </button>
          <button
            onClick={handleReset}
            className="rounded-md border border-edge px-6 py-3.5 text-sm font-semibold text-neutral-300 transition hover:border-flame hover:text-flame"
          >
            Reset to defaults
          </button>
        </div>
        {savedMessage && (
          <p className="mt-3 text-center text-sm text-jade">{savedMessage}</p>
        )}
      </div>
    </main>
  );
}
