import {
  ADDRESS,
  EMAIL,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
} from "../data.js";

export default function InfoSection({ hours }) {
  return (
    <section id="visit" className="border-t border-edge bg-panel/40">
      <div className="mx-auto grid max-w-4xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
        {/* Find us */}
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.35em] text-flame">
            FIND THE TRUCK
          </p>
          <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
            VISIT US
          </h2>
          <p className="mt-5 text-lg font-semibold text-white">{ADDRESS}</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-md border-2 border-neutral-500 px-6 py-3 text-sm font-bold tracking-widest text-white transition hover:border-flame hover:text-flame"
          >
            GET DIRECTIONS
          </a>

          <div className="mt-8 space-y-3 text-neutral-300">
            <p>
              <span className="font-semibold text-white">Call:</span>{" "}
              <a href={PHONE_TEL} className="transition hover:text-flame">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="break-all transition hover:text-flame"
              >
                {EMAIL}
              </a>
            </p>
            <p className="text-sm text-neutral-400">
              Delivery available on DoorDash. Follow us on Facebook for
              specials and updates.
            </p>
          </div>
        </div>

        {/* Hours */}
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.35em] text-flame">
            WHEN WE'RE COOKING
          </p>
          <h2 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
            HOURS
          </h2>
          <ul className="mt-5 divide-y divide-edge rounded-lg border border-edge bg-panel">
            {hours.map(({ day, hours: value }) => (
              <li
                key={day}
                className="flex items-center justify-between px-5 py-3"
              >
                <span className="font-semibold text-white">{day}</span>
                <span
                  className={
                    /closed/i.test(value)
                      ? "font-semibold text-crimson"
                      : "text-neutral-300"
                  }
                >
                  {value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
