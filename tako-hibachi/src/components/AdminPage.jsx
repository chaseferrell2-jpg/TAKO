import { useState } from "react";
import { ADMIN_PASSCODE, DEFAULT_SITE_DATA } from "../data.js";

const inputClass =
  "w-full rounded-md border border-edge bg-ink px-4 py-2.5 text-white outline-none focus:border-crimson";

function slugify(text) {
  return (
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "item"
  );
}

export default function AdminPage({ siteData, onSave, onExit }) {
  const [unlocked, setUnlocked] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const [draft, setDraft] = useState(() =>
    JSON.parse(JSON.stringify(siteData))
  );
  const [openCategory, setOpenCategory] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  function touch(updater) {
    setDraft(updater);
    setSavedMessage("");
  }

  function handleUnlock() {
    if (passcode === ADMIN_PASSCODE) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect passcode. Try again.");
    }
  }

  function updateItem(category, itemId, field, value) {
    touch((prev) => ({
      ...prev,
      menu: {
        ...prev.menu,
        [category]: prev.menu[category].map((item) =>
          item.id === itemId ? { ...item, [field]: value } : item
        ),
      },
    }));
  }

  function deleteItem(category, itemId) {
    touch((prev) => ({
      ...prev,
      menu: {
        ...prev.menu,
        [category]: prev.menu[category].filter((item) => item.id !== itemId),
      },
    }));
  }

  function addItem(category) {
    const newItem = {
      id: `${slugify(category)}-${Date.now()}`,
      name: "",
      desc: "",
      price: 0,
    };
    touch((prev) => ({
      ...prev,
      menu: { ...prev.menu, [category]: [...prev.menu[category], newItem] },
    }));
  }

  function updateHours(index, value) {
    touch((prev) => ({
      ...prev,
      hours: prev.hours.map((row, i) =>
        i === index ? { ...row, hours: value } : row
      ),
    }));
  }

  function handleSave() {
    // Normalize everything before committing: valid prices,
    // no nameless items, sensible fallbacks.
    const cleaned = {
      ...draft,
      locationText:
        draft.locationText.trim() || DEFAULT_SITE_DATA.locationText,
      announcement: draft.announcement.trim(),
      hours: draft.hours.map((row) => ({
        ...row,
        hours: row.hours.trim() || "Closed",
      })),
      menu: Object.fromEntries(
        Object.entries(draft.menu).map(([category, items]) => [
          category,
          items
            .filter((item) => item.name.trim() !== "")
            .map((item) => {
              const num = Number(item.price);
              return {
                ...item,
                name: item.name.trim(),
                desc: (item.desc || "").trim(),
                price: Number.isFinite(num) && num >= 0 ? num : 0,
              };
            }),
        ])
      ),
    };
    setDraft(cleaned);
    onSave(cleaned);
    setSavedMessage("Changes saved. The live site is updated.");
  }

  function handleReset() {
    touch(() => JSON.parse(JSON.stringify(DEFAULT_SITE_DATA)));
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
            className={`mt-5 ${inputClass} py-3`}
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

        {/* Live status */}
        <section className="rounded-xl border border-edge bg-panel p-6">
          <h2 className="text-sm font-bold tracking-[0.25em] text-flame">
            LIVE STATUS BAR
          </h2>
          <label className="mt-4 block text-sm font-semibold text-neutral-300">
            Location text
            <input
              type="text"
              value={draft.locationText}
              onChange={(event) =>
                touch((prev) => ({ ...prev, locationText: event.target.value }))
              }
              className={`mt-2 ${inputClass}`}
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
              onClick={() =>
                touch((prev) => ({ ...prev, isOpen: !prev.isOpen }))
              }
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

        {/* Announcement */}
        <section className="mt-6 rounded-xl border border-edge bg-panel p-6">
          <h2 className="text-sm font-bold tracking-[0.25em] text-flame">
            ANNOUNCEMENT BANNER
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Shows in gold at the top of the site. Leave empty to hide it.
          </p>
          <textarea
            value={draft.announcement}
            onChange={(event) =>
              touch((prev) => ({ ...prev, announcement: event.target.value }))
            }
            rows={2}
            placeholder="e.g. Closed July 4th — Happy Independence Day! 🎆"
            className={`mt-3 ${inputClass} resize-y`}
          />
        </section>

        {/* Hours */}
        <section className="mt-6 rounded-xl border border-edge bg-panel p-6">
          <h2 className="text-sm font-bold tracking-[0.25em] text-flame">
            HOURS
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Type anything — "11 AM – 8 PM", "Closed", "Catering only", etc.
          </p>
          <div className="mt-4 space-y-2">
            {draft.hours.map((row, index) => (
              <label
                key={row.day}
                className="flex items-center justify-between gap-4 rounded-md border border-edge bg-ink px-4 py-2"
              >
                <span className="w-28 text-sm font-semibold text-neutral-200">
                  {row.day}
                </span>
                <input
                  type="text"
                  value={row.hours}
                  onChange={(event) => updateHours(index, event.target.value)}
                  className="flex-1 rounded-md border border-edge bg-panel px-3 py-1.5 text-sm text-white outline-none focus:border-crimson"
                />
              </label>
            ))}
          </div>
        </section>

        {/* Menu editor */}
        <section className="mt-6 rounded-xl border border-edge bg-panel p-6">
          <h2 className="text-sm font-bold tracking-[0.25em] text-flame">
            MENU
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Tap a category to edit names, descriptions, and prices, remove
            items, or add new ones.
          </p>

          <div className="mt-4 space-y-2">
            {Object.entries(draft.menu).map(([category, items]) => {
              const isOpenCat = openCategory === category;
              return (
                <div
                  key={category}
                  className="overflow-hidden rounded-md border border-edge bg-ink"
                >
                  <button
                    onClick={() =>
                      setOpenCategory(isOpenCat ? "" : category)
                    }
                    className="flex w-full items-center justify-between px-4 py-3 text-left"
                    aria-expanded={isOpenCat}
                  >
                    <span className="font-display text-lg tracking-wide text-white">
                      {category}
                    </span>
                    <span className="text-sm text-neutral-400">
                      {items.length} items {isOpenCat ? "▲" : "▼"}
                    </span>
                  </button>

                  {isOpenCat && (
                    <div className="space-y-3 border-t border-edge p-4">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="rounded-md border border-edge bg-panel p-3"
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={item.name}
                              placeholder="Item name"
                              onChange={(event) =>
                                updateItem(
                                  category,
                                  item.id,
                                  "name",
                                  event.target.value
                                )
                              }
                              className="flex-1 rounded-md border border-edge bg-ink px-3 py-2 text-sm font-semibold text-white outline-none focus:border-crimson"
                            />
                            <span className="flex items-center gap-1 text-neutral-400">
                              $
                              <input
                                type="number"
                                min="0"
                                step="0.05"
                                inputMode="decimal"
                                value={item.price}
                                onChange={(event) =>
                                  updateItem(
                                    category,
                                    item.id,
                                    "price",
                                    event.target.value
                                  )
                                }
                                className="w-20 rounded-md border border-edge bg-ink px-2 py-2 text-right text-sm text-white outline-none focus:border-crimson"
                              />
                            </span>
                          </div>
                          <div className="mt-2 flex items-center gap-2">
                            <input
                              type="text"
                              value={item.desc || ""}
                              placeholder="Description (optional)"
                              onChange={(event) =>
                                updateItem(
                                  category,
                                  item.id,
                                  "desc",
                                  event.target.value
                                )
                              }
                              className="flex-1 rounded-md border border-edge bg-ink px-3 py-2 text-sm text-neutral-300 outline-none focus:border-crimson"
                            />
                            <button
                              onClick={() => deleteItem(category, item.id)}
                              aria-label={`Remove ${item.name || "item"}`}
                              className="rounded-md border border-edge px-3 py-2 text-sm font-semibold text-neutral-400 transition hover:border-crimson hover:text-crimson"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                      <button
                        onClick={() => addItem(category)}
                        className="w-full rounded-md border border-dashed border-edge py-2.5 text-sm font-semibold text-neutral-300 transition hover:border-flame hover:text-flame"
                      >
                        + Add item to {category}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Save / reset */}
        <div className="sticky bottom-4 mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleSave}
            className="flex-1 rounded-md bg-crimson py-3.5 text-sm font-bold tracking-widest text-white shadow-lg shadow-ink transition hover:bg-crimson-dark"
          >
            SAVE CHANGES
          </button>
          <button
            onClick={handleReset}
            className="rounded-md border border-edge bg-ink px-6 py-3.5 text-sm font-semibold text-neutral-300 transition hover:border-flame hover:text-flame"
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
