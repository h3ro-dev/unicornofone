"use client";

const testimonials = [
  {
    quote:
      "I went from burning out with a team of 12 to generating more revenue solo with AI. Unicorn of One didn't just change my business — it changed my entire paradigm.",
    name: "Sarah Chen",
    title: "Founder, NexusAI",
    revenue: "$4.2M ARR",
    avatar: "SC",
    gradient: "from-[#4169E1] to-[#5a7fee]",
  },
  {
    quote:
      "The Radical Focus methodology alone was worth 10x the investment. I eliminated 80% of my to-do list and my revenue tripled in 6 months. This is the future of entrepreneurship.",
    name: "Marcus Rivera",
    title: "Founder, DataForge",
    revenue: "$8.7M ARR",
    avatar: "MR",
    gradient: "from-[#8E44AD] to-[#a855c7]",
  },
  {
    quote:
      "The community here is unlike anything I've experienced. Every member is building something insane, and the playbooks shared inside have saved me years of trial and error.",
    name: "Aisha Patel",
    title: "Founder, ScaleStack",
    revenue: "$12.1M ARR",
    avatar: "AP",
    gradient: "from-[#4169E1] to-[#8E44AD]",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#8E44AD]/[0.02] to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#8E44AD]/5 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#4169E1] font-semibold text-sm uppercase tracking-wider mb-3">
            Social Proof
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Solo founders building{" "}
            <span className="gradient-text">the impossible</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Real results from real founders who embraced the Unicorn of One philosophy.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#4169E1]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#ccccdd] leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-sm text-[#8888aa]">{t.title}</div>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-mono text-[#4169E1] bg-[#4169E1]/10 px-2 py-1 rounded">
                    {t.revenue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
