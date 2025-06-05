import { Button, Container, Heading, Text, Card } from '../components/ui';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Heading as="h1" className="text-gray-900">
              <span className="block">One Person.</span>
              <span className="block text-primary">One Vision.</span>
              <span className="block">$1 Billion Impact.</span>
            </Heading>
            <Text variant="lead" className="mt-6 mx-auto max-w-2xl text-gray-600">
              Build a billion-dollar business with a team of one. Our radical focus methodology 
              and AI-powered strategies help ambitious founders achieve massive scale without massive teams.
            </Text>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg">
                Request Your Unicorn Strategy Session
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <Heading as="h2" className="text-center text-gray-900 mb-12">
            The Solo Founder&apos;s Dilemma
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '💡', title: 'World-Changing Idea', desc: 'But no world-sized team to execute it' },
              { icon: '🚫', title: 'Traditional Wisdom', desc: 'Says you can\'t do it alone' },
              { icon: '🔥', title: 'Burning Out', desc: 'Before breaking through' },
              { icon: '🎯', title: 'Losing Focus', desc: 'Across too many priorities' },
            ].map((item, index) => (
              <Card key={index} hover className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <Heading as="h3" className="text-lg mb-2">{item.title}</Heading>
                <Text variant="muted">{item.desc}</Text>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <Heading as="h2" className="text-center text-gray-900 mb-12">
            The Unicorn of One Method
          </Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: '1',
                title: 'Exponential Productivity Systems',
                description: '10x your output with proven frameworks designed for solo founders'
              },
              {
                number: '2',
                title: 'AI-Powered Scaling',
                description: 'Leverage cutting-edge AI to build a workforce of digital agents'
              },
              {
                number: '3',
                title: '10x Opportunity Focus',
                description: 'Say no to everything except what moves the needle exponentially'
              },
              {
                number: '4',
                title: 'Elite Founder Community',
                description: 'Connect with other ambitious solo founders building at scale'
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <div>
                  <Heading as="h3" className="text-xl mb-2">{step.title}</Heading>
                  <Text variant="muted">{step.description}</Text>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading as="h2" className="text-white mb-6">
              Ready to Build Your Billion-Dollar Vision?
            </Heading>
            <Text variant="lead" className="text-white/90 mb-8">
              Join the elite group of founders who refuse to let team size limit their impact.
            </Text>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-primary font-semibold"
            >
              Request Your Unicorn Strategy Session
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}