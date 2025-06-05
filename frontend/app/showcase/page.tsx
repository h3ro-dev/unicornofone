'use client';

import { useState } from 'react';
import { 
  Badge, 
  Button, 
  Card, 
  Container, 
  Heading, 
  Input, 
  Section, 
  Text 
} from '../../components/ui';

export default function ShowcasePage() {
  const [inputValue, setInputValue] = useState('');
  const [errorInput, setErrorInput] = useState('');

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" size="sm">
        <Container>
          <div className="text-center">
            <Badge variant="primary" className="mb-4">Component Library</Badge>
            <Heading as="h1" className="mb-4">UI Components Showcase</Heading>
            <Text variant="lead" className="text-gray-600">
              A comprehensive collection of reusable UI components built with React and Tailwind CSS
            </Text>
          </div>
        </Container>
      </Section>

      {/* Typography Section */}
      <Section>
        <Container>
          <Heading as="h2" className="mb-8">Typography</Heading>
          
          <Card className="mb-8">
            <Heading as="h3" className="mb-4">Headings</Heading>
            <div className="space-y-4">
              <Heading as="h1">Heading 1 - Build Something Amazing</Heading>
              <Heading as="h2">Heading 2 - Build Something Amazing</Heading>
              <Heading as="h3">Heading 3 - Build Something Amazing</Heading>
              <Heading as="h4">Heading 4 - Build Something Amazing</Heading>
              <Heading as="h5">Heading 5 - Build Something Amazing</Heading>
              <Heading as="h6">Heading 6 - Build Something Amazing</Heading>
            </div>
          </Card>

          <Card>
            <Heading as="h3" className="mb-4">Text Variants</Heading>
            <div className="space-y-4">
              <div>
                <Text variant="small" className="font-semibold text-gray-500 mb-1">Lead Text</Text>
                <Text variant="lead">This is lead text that stands out from regular body text.</Text>
              </div>
              <div>
                <Text variant="small" className="font-semibold text-gray-500 mb-1">Body Text</Text>
                <Text>This is regular body text used for main content throughout the application.</Text>
              </div>
              <div>
                <Text variant="small" className="font-semibold text-gray-500 mb-1">Muted Text</Text>
                <Text variant="muted">This is muted text used for secondary information.</Text>
              </div>
              <div>
                <Text variant="small" className="font-semibold text-gray-500 mb-1">Small Text</Text>
                <Text variant="small">This is small text used for captions and labels.</Text>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Buttons Section */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="mb-8">Buttons</Heading>
          
          <Card className="mb-8">
            <Heading as="h3" className="mb-4">Button Variants</Heading>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="danger">Danger Button</Button>
            </div>
          </Card>

          <Card className="mb-8">
            <Heading as="h3" className="mb-4">Button Sizes</Heading>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small Button</Button>
              <Button size="md">Medium Button</Button>
              <Button size="lg">Large Button</Button>
            </div>
          </Card>

          <Card>
            <Heading as="h3" className="mb-4">Button States</Heading>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled Button</Button>
              <Button loading>Loading Button</Button>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Badges Section */}
      <Section>
        <Container>
          <Heading as="h2" className="mb-8">Badges</Heading>
          
          <Card>
            <Heading as="h3" className="mb-4">Badge Variants</Heading>
            <div className="flex flex-wrap gap-4 mb-6">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="gray">Gray</Badge>
            </div>
            
            <Heading as="h3" className="mb-4">Badge Sizes</Heading>
            <div className="flex flex-wrap items-center gap-4">
              <Badge size="sm">Small Badge</Badge>
              <Badge size="md">Medium Badge</Badge>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Cards Section */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="mb-8">Cards</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Heading as="h3" className="mb-2">Default Card</Heading>
              <Text variant="muted">This is a default card with standard padding and styling.</Text>
            </Card>
            
            <Card hover>
              <Heading as="h3" className="mb-2">Hover Card</Heading>
              <Text variant="muted">This card has a hover effect. Try hovering over it!</Text>
            </Card>
            
            <Card hover onClick={() => alert('Card clicked!')}>
              <Heading as="h3" className="mb-2">Clickable Card</Heading>
              <Text variant="muted">This card is clickable. Click to see an alert!</Text>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <Card padding="none">
              <div className="p-4 bg-primary text-white rounded-t-lg">
                <Text className="font-semibold">No Padding</Text>
              </div>
              <div className="p-4">
                <Text variant="small">Card content</Text>
              </div>
            </Card>
            
            <Card padding="sm">
              <Text className="font-semibold mb-2">Small Padding</Text>
              <Text variant="small">Less spacing</Text>
            </Card>
            
            <Card padding="md">
              <Text className="font-semibold mb-2">Medium Padding</Text>
              <Text variant="small">Default spacing</Text>
            </Card>
            
            <Card padding="lg">
              <Text className="font-semibold mb-2">Large Padding</Text>
              <Text variant="small">More spacing</Text>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Forms Section */}
      <Section>
        <Container>
          <Heading as="h2" className="mb-8">Form Elements</Heading>
          
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Input
                  label="Default Input"
                  placeholder="Enter some text..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  fullWidth
                />
                
                <Input
                  label="Email Input"
                  type="email"
                  placeholder="john@example.com"
                  helperText="We'll never share your email"
                  fullWidth
                />
                
                <Input
                  label="Password Input"
                  type="password"
                  placeholder="Enter your password"
                  fullWidth
                />
              </div>
              
              <div className="space-y-6">
                <Input
                  label="Input with Error"
                  placeholder="This field has an error"
                  value={errorInput}
                  onChange={(e) => setErrorInput(e.target.value)}
                  error="This field is required"
                  fullWidth
                />
                
                <Input
                  label="Disabled Input"
                  placeholder="This input is disabled"
                  disabled
                  fullWidth
                />
                
                <Input
                  label="Read-only Input"
                  value="This value cannot be changed"
                  readOnly
                  fullWidth
                />
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* Layout Components */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="mb-8">Layout Components</Heading>
          
          <Card className="mb-6">
            <Heading as="h3" className="mb-4">Container Sizes</Heading>
            <Text variant="muted" className="mb-6">
              Containers provide consistent max-width and padding. Resize your browser to see responsive behavior.
            </Text>
            
            <div className="space-y-4">
              <div className="bg-primary-100 rounded">
                <Container size="sm" className="py-4">
                  <Text className="text-center font-medium">Small Container (max-w-3xl)</Text>
                </Container>
              </div>
              
              <div className="bg-primary-100 rounded">
                <Container size="md" className="py-4">
                  <Text className="text-center font-medium">Medium Container (max-w-5xl)</Text>
                </Container>
              </div>
              
              <div className="bg-primary-100 rounded">
                <Container size="lg" className="py-4">
                  <Text className="text-center font-medium">Large Container (max-w-7xl)</Text>
                </Container>
              </div>
            </div>
          </Card>

          <Card>
            <Heading as="h3" className="mb-4">Section Backgrounds</Heading>
            <Text variant="muted">
              Sections provide consistent vertical spacing and background colors. 
              They are used throughout the application for page structure.
            </Text>
          </Card>
        </Container>
      </Section>
    </>
  );
}