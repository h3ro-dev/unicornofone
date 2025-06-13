'use client';

import React from 'react';
import { HeroButton, HeroCard, HeroHeader, HeroAvatar, HeroStat } from '@h3ro-dev/ofone-ui';

export default function SharedComponentsDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <HeroHeader 
          title="Unicorn of One"
          subtitle="Shared Components Showcase"
          variant="center"
        />
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hero Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <HeroButton variant="primary">Primary Action</HeroButton>
            <HeroButton variant="secondary">Secondary Action</HeroButton>
            <HeroButton variant="outline">Outline Style</HeroButton>
            <HeroButton variant="ghost">Ghost Button</HeroButton>
            <HeroButton variant="destructive">Destructive</HeroButton>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hero Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HeroCard 
              title="Full-Stack Development"
              description="Build end-to-end solutions with modern tech stacks and cloud infrastructure"
              ctaText="Start Building"
            />
            <HeroCard 
              title="Product Design"
              description="Design user experiences that delight customers and drive business growth"
              ctaText="Design Now"
            />
            <HeroCard 
              title="Business Strategy"
              description="Create winning strategies with data analytics and market insights"
              ctaText="Strategize"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hero Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <HeroStat 
              label="Skills Mastered"
              value="47"
              trend={{ value: 5, isPositive: true }}
            />
            <HeroStat 
              label="Projects Shipped"
              value="23"
              trend={{ value: 3, isPositive: true }}
            />
            <HeroStat 
              label="Client Rating"
              value="5.0★"
              trend={{ value: 0.2, isPositive: true }}
            />
            <HeroStat 
              label="Revenue Generated"
              value="$1.2M"
              trend={{ value: 45, isPositive: true }}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Hero Avatars</h2>
          <div className="flex items-center gap-6">
            <HeroAvatar 
              name="Unicorn User"
              imageUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Unicorn"
              size="sm"
            />
            <HeroAvatar 
              name="Unicorn User"
              imageUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Unicorn"
              size="md"
            />
            <HeroAvatar 
              name="Unicorn User"
              imageUrl="https://api.dicebear.com/7.x/avataaars/svg?seed=Unicorn"
              size="lg"
            />
            <HeroAvatar 
              name="UU"
              size="lg"
            />
          </div>
        </section>

        <section className="text-center py-12">
          <HeroHeader 
            title="Ready to Become a True Unicorn?"
            subtitle="Master every skill and build anything with unified components"
            variant="center"
          />
          <div className="mt-8">
            <HeroButton variant="primary" size="lg">
              Start Your Unicorn Journey
            </HeroButton>
          </div>
        </section>
      </div>
    </div>
  );
}