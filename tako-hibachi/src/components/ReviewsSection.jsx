import { MAPS_URL, RATING, REVIEWS } from "../data.js";

function Stars({ count }) {
  return (
    <div
      className="flex gap-0.5 text-flame"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const featured = REVIEWS.find((review) => review.featured);
  const rest = REVIEWS.filter((review) => !review.featured);

  return (
    <section id="reviews" className="border-t border-edge">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-bold tracking-[0.35em] text-flame">
            DON'T TAKE OUR WORD FOR IT
          </p>
          <h2 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
            THE REVIEWS
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="font-display text-3xl text-flame">
              {RATING.score}
            </span>
            <div className="text-left">
              <Stars count={5} />
              <p className="mt-0.5 text-xs text-neutral-400">{RATING.count}</p>
            </div>
          </div>
        </div>

        {featured && (
          <figure className="mb-6 rounded-xl border border-flame/30 bg-panel p-6 sm:p-8">
            <Stars count={featured.stars} />
            <blockquote className="mt-4 text-lg leading-relaxed text-neutral-100 sm:text-xl">
              "{featured.text}"
            </blockquote>
            <figcaption className="mt-4 text-sm text-neutral-400">
              <span className="font-semibold text-white">{featured.name}</span>{" "}
              · {featured.source}, {featured.date}
            </figcaption>
          </figure>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((review) => (
            <figure
              key={review.id}
              className="flex flex-col rounded-xl border border-edge bg-panel p-5"
            >
              <Stars count={review.stars} />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-neutral-200">
                "{review.text}"
              </blockquote>
              <figcaption className="mt-4 text-xs text-neutral-400">
                <span className="font-semibold text-neutral-200">
                  {review.name}
                </span>{" "}
                · {review.source}, {review.date}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-neutral-400 underline-offset-4 transition hover:text-flame hover:underline"
          >
            Read more or leave us a review on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
