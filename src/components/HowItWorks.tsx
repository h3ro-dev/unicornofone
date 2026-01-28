"use client";

const steps = [
  {
    number: "01",
    title: "Assess",
    subtitle: "Deep-Dive Discovery",
    description:
      "We analyze your skills, market opportunity, and existing assets. Our AI assessment identifies the highest-leverage path to your billion-dollar vision — and what's holding you back.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Architect",
    subtitle: "Blueprint Your Empire",
    description:
      "Design your AI-powered operating system. We build a custom tech stack, automation workflows, and growth playbook tailored to your unique strengths and market position.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Accelerate",
    subtitle: "Launch & Scale",
    description:
      "Execute with velocity. Deploy your AI agents, launch campaigns, and start scaling. With ongoing coaching and community support, you compound your advantages every single week.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-[#8E44AD] font-semibold text-sm uppercase tracking-wider mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Three steps to{" "}
            <span className="gradient-text">unicorn status</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            A proven framework that transforms ambitious solo founders into
            billion-dollar operators.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4169E1]/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={step.number} className="relative group">
                {/* Card */}
                <div className="glass-card rounded-2xl p-8 text-center relative overflow-hidden">
                  {/* Background number */}
                  <div className="absolute top-4 right-6 text-7xl font-black text-[#4169E1]/5 select-none">
                    {step.number}
                  </div>

                  {/* Step number badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4169E1] to-[#8E44AD] text-white mb-6 mx-auto group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#4169E1] text-sm font-medium mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-[#8888aa] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-[#4169E1]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}

                {/* Arrow between steps (mobile) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4 text-[#4169E1]">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
