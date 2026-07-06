import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORY_NOTES, ORDER_URL, formatPrice } from "../data.js";

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export default function MenuSection({ menu }) {
  const categories = Object.keys(menu);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const items = menu[activeTab] ?? [];

  return (
    <section id="menu" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-bold tracking-[0.35em] text-flame">
          FRESH OFF THE GRILL
        </p>
        <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
          THE MENU
        </h2>
      </div>

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="Menu categories"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => {
          const isActive = category === activeTab;
          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(category)}
              className={`rounded-full px-4 py-2 text-[13px] font-bold tracking-wide transition sm:px-5 sm:py-2.5 sm:text-sm ${
                isActive
                  ? "bg-crimson text-white shadow-lg shadow-crimson/25"
                  : "border border-edge bg-panel text-neutral-300 hover:border-crimson hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Animated item list */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={listVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="mb-5 text-center text-sm italic text-neutral-400">
            {CATEGORY_NOTES[activeTab] ?? ""}
          </p>
          <ul className="space-y-3">
            {items.map((item) => (
              <motion.li
                key={item.id}
                variants={itemVariants}
                className="rounded-lg border border-edge bg-panel px-5 py-4 transition hover:border-flame/50"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="min-w-6 flex-1 border-b border-dashed border-edge" />
                  <span className="font-display text-lg tracking-wide text-flame">
                    {formatPrice(item.price)}
                  </span>
                </div>
                {item.desc && (
                  <p className="mt-1 pr-16 text-sm text-neutral-400">
                    {item.desc}
                  </p>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>

      <div className="mt-10 text-center">
        <a
          href={ORDER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-crimson px-8 py-4 text-sm font-bold tracking-widest text-white shadow-lg shadow-crimson/25 transition hover:bg-crimson-dark"
        >
          ORDER ONLINE FOR PICKUP
        </a>
      </div>
    </section>
  );
}
