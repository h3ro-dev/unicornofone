import { Container, Heading, Text, Card, Button } from '../../components/ui';

export default function AboutPage() {
  const values = [
    {
      title: 'Radical Focus',
      description: 'We believe in saying no to 99% of opportunities to excel at the 1% that truly matters.',
      icon: '🎯',
    },
    {
      title: 'AI Leverage',
      description: 'Harness the power of artificial intelligence to multiply your impact exponentially.',
      icon: '🤖',
    },
    {
      title: 'Solo Power',
      description: 'One person with the right tools and mindset can outperform entire teams.',
      icon: '💪',
    },
    {
      title: 'Billion-Dollar Thinking',
      description: 'Think and act at the scale of billion-dollar companies from day one.',
      icon: '🚀',
    },
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'Founder & CEO',
      bio: 'Serial entrepreneur who built and sold 3 companies as a solo founder.',
      image: '👤',
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of Methodology',
      bio: 'Former McKinsey consultant, expert in scaling lean operations.',
      image: '👤',
    },
    {
      name: 'Marcus Rivera',
      role: 'AI Strategy Lead',
      bio: 'Ex-Google AI researcher, pioneering AI-powered productivity systems.',
      image: '👤',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading as="h1" className="text-gray-900 mb-6">
              Building the Future of Solo Entrepreneurship
            </Heading>
            <Text variant="lead" className="text-gray-600">
              We&apos;re on a mission to prove that one person can build a billion-dollar business. 
              Our methodology combines radical focus, AI leverage, and exponential thinking.
            </Text>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" className="text-center mb-12">Our Story</Heading>
            <div className="space-y-6">
              <Text variant="lead">
                It started with a simple observation: the most successful companies in history 
                were built by small, focused teams. But what if we could go even further?
              </Text>
              <Text>
                In 2023, our founder built and scaled a SaaS company to $10M ARR completely solo, 
                using AI tools and automation. This sparked a realization: the future of 
                entrepreneurship isn&apos;t about building bigger teams—it&apos;s about building 
                smarter systems.
              </Text>
              <Text>
                Today, Unicorn of One is dedicated to helping ambitious founders achieve 
                what was once thought impossible: building billion-dollar businesses with 
                a team of one. We combine cutting-edge AI technology, proven productivity 
                frameworks, and a community of like-minded founders to make this vision a reality.
              </Text>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <Heading as="h2" className="text-center mb-12">Our Core Values</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} hover className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <div>
                  <Heading as="h3" className="text-xl mb-2">{value.title}</Heading>
                  <Text variant="muted">{value.description}</Text>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">Meet the Team</Heading>
            <Text variant="lead" className="text-gray-600 max-w-2xl mx-auto">
              We practice what we preach. Our lean team of experts helps thousands 
              of founders build their billion-dollar visions.
            </Text>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} hover className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">{member.image}</span>
                </div>
                <Heading as="h3" className="text-xl mb-1">{member.name}</Heading>
                <Text variant="small" className="text-primary mb-3">{member.role}</Text>
                <Text variant="muted" className="text-sm">{member.bio}</Text>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Heading as="h2" className="text-white mb-6">
              Ready to Join the Revolution?
            </Heading>
            <Text variant="lead" className="text-white/90 mb-8">
              Discover how our methodology can help you build your billion-dollar vision.
            </Text>
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-primary font-semibold"
            >
              Start Your Journey
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}