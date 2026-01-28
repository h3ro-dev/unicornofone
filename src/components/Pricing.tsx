"use client";

const tiers = [
  {
    name: "Explorer",
    price: "$0",
    period: "forever",
    description: "Start your journey toward building solo at scale.",
    features: [
      "AI Readiness Assessment",
      "Solo Founder Playbook (PDF)",
      "Community access (read-only)",
      "Weekly newsletter",
      "Basic automation templates",
    ],
    cta: "Start Free",
    highlighted: false,
    gradient: "from-[#2a2a45] to-[#1a1a2e]",
    borderColor: "border-[#2a2a45]",
  },
  {
    name: "Builder",
    price: "$49",
    period: "/mo",
    description: "For founders actively building their AI-powered empire.",
    features: [
      "Everything in Explorer",
      "Full community access & networking",
      "Monthly group coaching calls",
      "AI agent starter kit",
      "Radical Focus workshop series",
      "Private Slack channel",
      "Curated tool stack recommendations",
    ],
    cta: "Start Building",
    highlighted: true,
    gradient: "from-[#4169E1] to-[#8E44AD]",
    borderColor: "border-[#4169E1]",
  },
  {
    name: "Unicorn",
    price: "$199",
    period: "/mo",
    description: "For founders ready to scale to $1B and beyond.",
    features: [
      "Everything in Builder",
      "1-on-1 strategy sessions (monthly)",
      "Custom AI agent development",
      "Investor intro network",
      "Priority support & implementation",
      "Annual Unicorn Summit access",
      "Revenue acceleration playbooks",
      "White-glove onboarding",
    ],
    cta: "Go Unicorn",
    highlighted: false,
    gradient: "from-[#8E44AD] to-[#6e3489]",
    borderColor: "border-[#8E44AD]/50",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4169E1]/[0.02] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#8E44AD] font-semibold text-sm uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Invest in your{" "}
            <span className="gradient-text">unicorn future</span>
          </h2>
          <p className="text-[#8888aa] text-lg max-w-2xl mx-auto">
            Choose the plan that matches your ambition. All plans include a
            14-day money-back guarantee.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl overflow-hidden ${
                tier.highlighted ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#4169E1] to-[#8E44AD] text-center py-2 text-sm font-semibold text-white">
                  Most Popular
                </div>
              )}

              <div
                className={`glass-card rounded-2xl p-8 h-full border ${tier.borderColor} ${
                  tier.highlighted ? "pt-14" : ""
                }`}
              >
                {/* Tier name */}
                <h3 className="text-lg font-semibold text-[#8888aa] mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-white">
                    {tier.price}
                  </span>
                  <span className="text-[#8888aa] text-lg">{tier.period}</span>
                </div>

                {/* Description */}
                <p className="text-[#8888aa] text-sm mb-8">
                  {tier.description}
                </p>

                {/* CTA */}
                <a
                  href="#cta"
                  className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-[#4169E1] to-[#8E44AD] text-white hover:shadow-lg hover:shadow-[#4169E1]/25 hover:scale-[1.02]"
                      : "border border-[#2a2a45] text-white hover:border-[#4169E1]/50 hover:bg-[#4169E1]/5"
                  }`}
                >
                  {tier.cta}
                </a>

                {/* Divider */}
                <div className="border-t border-[#2a2a45] my-8" />

                {/* Features */}
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-[#4169E1] shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#ccccdd]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
