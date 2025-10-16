import React from "react";

/**
 * Testimonials component
 * - Pass `testimonials` prop: array of { id, quote, name }
 * - Falls back to defaultTestimonials
 * - Renders responsive grid (1 / 2 / 3 cols)
 * - Uses bg-[#0a192f] and card shades derived from it
 */

const defaultTestimonials = [
  {
    id: 1,
    quote:
      "\"Commendable work!\"",
    name: "SyncX PVT LTD",
  },
];

const Testimonials = ({ testimonials = defaultTestimonials }) => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0a192f] px-6 py-24 sm:py-32 lg:px-8">
      {/* subtle decorative gradients / shapes kept but tuned for dark background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(45rem 50rem at top, rgba(65,109,25,0.06), rgba(10,25,47,1))",
          opacity: 0.9,
        }}
      />
      <div className="mx-auto max-w-6xl">

        {/* Title + description */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#81A263] inline-block border-b-4 border-pink-300 pb-2">
        Testimonials
        </h2>
        <p className="mt-4 text-lg text-gray-200 mb-12 font-normal">
        / Hear from people who have worked with me. /
        </p>

        {/* Grid: 1 / 2 / 3 columns. cards made visually larger via padding and min-h */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="bg-[#0f2740] rounded-2xl p-10 shadow-lg flex flex-col h-full min-h-[230px] transition-transform duration-200 hover:-translate-y-1"
            >
              <blockquote className="text-left text-lg font-medium text-gray-100 flex-grow">
                <p className="leading-relaxed">{t.quote}</p>
              </blockquote>

              {/* Only name shown (no avatar / role) */}
              <figcaption className="mt-8">
                <div className="flex items-center">
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
