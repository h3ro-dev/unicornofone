'use client';

import { useState } from 'react';
import { Container, Heading, Text, Card, Button, Input } from '../../components/ui';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      // You would typically send this to an API endpoint
      alert('Thank you for your message! We\'ll be in touch soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Heading as="h1" className="text-gray-900 mb-6">
              Let&apos;s Build Your Unicorn Together
            </Heading>
            <Text variant="lead" className="text-gray-600">
              Ready to transform your vision into a billion-dollar reality? 
              Get in touch and let&apos;s discuss how we can help you achieve exponential growth.
            </Text>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <Heading as="h2" className="mb-6">Get in Touch</Heading>
              <Text className="mb-8">
                Whether you&apos;re ready to start your journey or just have questions about our methodology, 
                we&apos;re here to help. Fill out the form and we&apos;ll get back to you within 24 hours.
              </Text>

              <div className="space-y-6">
                <Card padding="sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <Heading as="h3" className="text-lg mb-1">Email</Heading>
                      <Text variant="muted">hello@unicornofone.ai</Text>
                    </div>
                  </div>
                </Card>

                <Card padding="sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">💬</span>
                    </div>
                    <div>
                      <Heading as="h3" className="text-lg mb-1">Live Chat</Heading>
                      <Text variant="muted">Available Monday-Friday, 9am-6pm EST</Text>
                    </div>
                  </div>
                </Card>

                <Card padding="sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🌐</span>
                    </div>
                    <div>
                      <Heading as="h3" className="text-lg mb-1">Social Media</Heading>
                      <Text variant="muted">Follow us on Twitter, LinkedIn, and GitHub</Text>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  fullWidth
                />

                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  fullWidth
                />

                <Input
                  label="Company (Optional)"
                  name="company"
                  type="text"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={handleChange}
                  fullWidth
                />

                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your vision..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`
                      block w-full px-4 py-3 rounded-lg border transition-colors duration-200
                      ${errors.message 
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                      }
                      focus:outline-none focus:ring-2 focus:ring-opacity-50
                    `}
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" fullWidth size="lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" className="text-center mb-12">Frequently Asked Questions</Heading>
            <div className="space-y-6">
              {[
                {
                  question: 'How quickly can I expect to see results?',
                  answer: 'Most founders see significant productivity improvements within the first 30 days. Building to scale takes time, but our methodology accelerates every step of the journey.',
                },
                {
                  question: 'Do I need technical skills to succeed?',
                  answer: 'Not necessarily. While technical skills can be helpful, our AI-powered tools and strategies are designed to work for founders from all backgrounds.',
                },
                {
                  question: 'What makes Unicorn of One different?',
                  answer: 'We\'re the only program specifically designed for solo founders aiming for billion-dollar scale. Our methodology is built on real experience and cutting-edge AI integration.',
                },
              ].map((faq, index) => (
                <Card key={index} hover>
                  <Heading as="h3" className="text-lg mb-2">{faq.question}</Heading>
                  <Text variant="muted">{faq.answer}</Text>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}