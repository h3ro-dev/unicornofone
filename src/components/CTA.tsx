"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <section id="cta" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4169E1]/10 via-[#0a0a0f] to-[#8E44AD]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#4169E1]/10 to-[#8E44AD]/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Unicorn emoji decoration */}
        <div className="text-6xl mb-8">🦄</div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to become a{" "}
          <span className="gradient-text">Unicorn of One</span>?
        </h2>
        <p className="text-[#8888aa] text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Join hundreds of solo founders who are proving that you don&apos;t need a
          massive team to build a massive business. Your billion-dollar journey
          starts with a single step.
        </p>

        {/* Email form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 rounded-full bg-[#12121a] border border-[#2a2a45] text-white placeholder-[#8888aa] focus:outline-none focus:border-[#4169E1] focus:ring-2 focus:ring-[#4169E1]/20 transition-all"
          />
          <button
            type="submit"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#4169E1] to-[#8E44AD] text-white font-semibold transition-all hover:shadow-2xl hover:shadow-[#4169E1]/30 hover:scale-105 whitespace-nowrap"
          >
            {submitted ? (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Requested!
              </span>
            ) : (
              "Request Strategy Session"
            )}
          </button>
        </form>

        <p className="text-xs text-[#8888aa]">
          Free strategy session · No credit card required · Unsubscribe anytime
        </p>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[#8888aa]/50">
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            SSL Encrypted
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
            </svg>
            14-Day Guarantee
          </div>
          <div className="flex items-center gap-2 text-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
            500+ Founders
          </div>
        </div>
      </div>
    </section>
  );
}
