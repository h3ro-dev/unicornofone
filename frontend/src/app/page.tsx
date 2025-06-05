'use client';

import React from 'react';
import { Button, Card } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4169E1] to-[#8E44AD] text-white">
        <div className="container mx-auto px-4 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              One Person. One Vision.<br />
              <span className="text-yellow-300">$1 Billion Impact.</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-10 opacity-90">
              Build a billion-dollar business with radical focus methodology and AI leverage—no massive team required.
            </p>
            <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-4">
              Request Your Unicorn Strategy Session
            </Button>
            <p className="mt-6 text-sm opacity-80">
              Join the elite founders who've discovered how to achieve exponential growth through hyper-focus and AI-powered scaling strategies.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }}></div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The World Says You Need a World-Sized Team
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Your Vision Is Massive. Your Team Isn't.",
                description: "You see the billion-dollar opportunity clearly. But everyone says you need 100+ employees to capture it. They're wrong."
              },
              {
                title: '"You Can\'t Do It Alone" Is Yesterday\'s Advice',
                description: "Conventional startup wisdom was written before AI could multiply your capabilities 1000x. It's time for new rules."
              },
              {
                title: "Working Harder Isn't Working",
                description: "You're grinding 80-hour weeks but moving at 10% speed. The problem isn't your effort—it's your approach."
              },
              {
                title: "Everything Feels Important. Nothing Gets Done.",
                description: "You're juggling product, marketing, sales, operations... and dropping balls daily. There's a better way."
              }
            ].map((pain, index) => (
              <Card key={index} variant="bordered" padding="md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pain.title}</h3>
                <p className="text-gray-600">{pain.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                The Unicorn of One Method™
              </h2>
              <p className="text-2xl font-semibold text-[#4169E1]">
                Radical Focus + AI Leverage = Exponential Growth
              </p>
              <p className="text-lg text-gray-600 mt-4">
                Transform your solo operation into a billion-dollar machine through our proven three-pillar system:
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  number: "1",
                  title: "Ruthless Prioritization Framework",
                  items: [
                    "Identify your single 10x lever",
                    "Eliminate 90% of \"important\" tasks",
                    "Focus only on exponential opportunities"
                  ]
                },
                {
                  number: "2",
                  title: "AI Multiplication System",
                  items: [
                    "Deploy AI agents for 24/7 productivity",
                    "Automate everything except genius work",
                    "Scale your best thinking infinitely"
                  ]
                },
                {
                  number: "3",
                  title: "Exponential Execution Playbook",
                  items: [
                    "Weekly sprints that move mountains",
                    "Decision frameworks that save months",
                    "Growth hacks that compound daily"
                  ]
                }
              ].map((pillar) => (
                <Card key={pillar.number} variant="elevated" className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#4169E1] text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {pillar.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                    <ul className="space-y-2">
                      {pillar.items.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#8E44AD] mr-2">•</span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
              Your Unicorn Toolkit
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: "Exponential Productivity Systems",
                  features: [
                    { name: "10x Task Prioritization Matrix", desc: "Know exactly what to work on every single day" },
                    { name: "AI Agent Army Setup", desc: "Your personal workforce that never sleeps" },
                    { name: "Focus Protection Protocols", desc: "Eliminate distractions permanently" }
                  ]
                },
                {
                  title: "AI-Powered Scaling Strategies",
                  features: [
                    { name: "Content Generation at Scale", desc: "Produce 100x more without burning out" },
                    { name: "Automated Customer Intelligence", desc: "Know your market better than they know themselves" },
                    { name: "Smart Process Automation", desc: "Turn repetitive work into one-click operations" }
                  ]
                },
                {
                  title: "Focus on 10x Opportunities Only",
                  features: [
                    { name: "Opportunity Scoring Algorithm", desc: "Instantly identify what's worth your time" },
                    { name: "Strategic No Framework", desc: "Say no to good to say yes to great" },
                    { name: "Lever Analysis Tools", desc: "Find your highest-impact activities" }
                  ]
                },
                {
                  title: "Elite Founder Community Access",
                  features: [
                    { name: "Weekly Mastermind Calls", desc: "Learn from other solo unicorns" },
                    { name: "24/7 Slack Community", desc: "Get answers when you need them" },
                    { name: "Monthly Strategy Sessions", desc: "Direct access to proven advisors" }
                  ]
                }
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{section.title}</h3>
                  <div className="space-y-4">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="flex-shrink-0 w-1 h-1 bg-[#8E44AD] rounded-full mt-2 mr-3"></div>
                        <div>
                          <h4 className="font-medium text-gray-900">{feature.name}:</h4>
                          <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#4169E1] to-[#8E44AD] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Build Your Billion-Dollar Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Limited strategy sessions available. Only for founders serious about exponential growth.
            </p>
            <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-4 mb-6">
              Request Your Unicorn Strategy Session
            </Button>
            <p className="text-sm opacity-80">
              We work with only 10 new founders per month to ensure quality. Sessions for this month are 70% booked.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm">
              <span className="flex items-center gap-2">
                <span>🔒</span> 100% Confidential
              </span>
              <span className="flex items-center gap-2">
                <span>⚡</span> Results in 90 Days
              </span>
              <span className="flex items-center gap-2">
                <span>🎯</span> Personalized Strategy
              </span>
              <span className="flex items-center gap-2">
                <span>💰</span> ROI Guaranteed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-semibold text-white mb-2">Unicorn of One</p>
            <p className="text-sm">Where solo founders build billion-dollar futures.</p>
            <p className="text-xs mt-4">Part of the Utlyze "Of One" suite - empowering solo professionals everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
