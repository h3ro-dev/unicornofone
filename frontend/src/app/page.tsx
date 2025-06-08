export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="max-width-container section-padding py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">One Person.</span>
              <span className="block text-primary">One Vision.</span>
              <span className="block">$1 Billion Impact.</span>
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg leading-8 text-gray-600">
              Build a billion-dollar business with a team of one. Our radical focus methodology 
              and AI-powered strategies help ambitious founders achieve massive scale without massive teams.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="btn-primary">
                Request Your Unicorn Strategy Session
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-width-container section-padding">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Solo Founder&apos;s Dilemma
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">World-Changing Idea</h3>
              <p className="text-gray-600">But no world-sized team to execute it</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚫</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Traditional Wisdom</h3>
              <p className="text-gray-600">Says you can&apos;t do it alone</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Burning Out</h3>
              <p className="text-gray-600">Before breaking through</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Losing Focus</h3>
              <p className="text-gray-600">Across too many priorities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-width-container section-padding">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Unicorn of One Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Exponential Productivity Systems</h3>
                  <p className="text-gray-600">10x your output with proven frameworks designed for solo founders</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">AI-Powered Scaling</h3>
                  <p className="text-gray-600">Leverage cutting-edge AI to build a workforce of digital agents</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">10x Opportunity Focus</h3>
                  <p className="text-gray-600">Say no to everything except what moves the needle exponentially</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Elite Founder Community</h3>
                  <p className="text-gray-600">Connect with other ambitious solo founders building at scale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-width-container section-padding text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Billion-Dollar Vision?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the elite group of founders who refuse to let team size limit their impact.
          </p>
          <button className="bg-white hover:bg-gray-100 text-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
            Request Your Unicorn Strategy Session
          </button>
        </div>
      </section>
    </main>
  )
}