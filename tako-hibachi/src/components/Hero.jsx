import { motion } from "motion/react";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from "../data.js";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background image — drop your photo at /public/hero.jpg.
          The gradient overlays below keep the section looking good
          (and text readable) even before the photo is added. */}
      <div
        className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink"
        aria-hidden="true"
      />
      {/* Amber "grill glow" rising from the bottom edge */}
      <div
        className="absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(245,165,36,0.22),transparent_70%)]"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:py-32"
      >
        <p className="mb-4 text-xs font-bold tracking-[0.35em] text-flame">
          MCMINNVILLE'S TEPPANYAKI FOOD TRUCK
        </p>
        <h1 className="font-display text-5xl leading-[1.05] tracking-wide text-white sm:text-7xl">
          TEPPANYAKI FLAMES.
          <br />
          <span className="text-crimson">PREMIUM ROLLS.</span>
          <br />
          RIGHT AROUND THE CORNER.
        </h1>
        <p className="mt-6 max-w-xl text-base text-neutral-300 sm:text-lg">
          Hibachi grilled to order and signature sushi rolls, served hot off
          the truck. Call ahead and your food is ready when you are.
        </p>

        <div className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={PHONE_TEL}
            className="w-full rounded-md bg-crimson px-8 py-4 text-center text-sm font-bold tracking-widest text-white shadow-lg shadow-crimson/25 transition hover:bg-crimson-dark sm:w-auto"
          >
            ORDER PICKUP NOW · {PHONE_DISPLAY}
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-md border-2 border-neutral-500 px-8 py-[14px] text-center text-sm font-bold tracking-widest text-white transition hover:border-flame hover:text-flame sm:w-auto"
          >
            FIND OUR LOCATION
          </a>
        </div>
      </motion.div>
    </section>
  );
}
