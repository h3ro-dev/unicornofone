import React from 'react';
import Link from 'next/link';
import { Container, Text } from '../ui';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/methodology', label: 'Our Method' },
      { href: '/testimonials', label: 'Success Stories' },
      { href: '/blog', label: 'Blog' },
    ],
    support: [
      { href: '/resources', label: 'Resources' },
      { href: '/faq', label: 'FAQ' },
      { href: '/contact', label: 'Contact' },
      { href: '/help', label: 'Help Center' },
    ],
    legal: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
      { href: '/cookies', label: 'Cookie Policy' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">U</span>
                </div>
                <span className="text-xl font-bold">Unicorn of One</span>
              </div>
              <Text variant="muted" className="text-gray-400 mb-6">
                Build a billion-dollar business with a team of one. 
                Our radical focus methodology and AI-powered strategies 
                help ambitious founders achieve massive scale.
              </Text>
              {/* Social Links */}
              <div className="flex space-x-4">
                {['twitter', 'linkedin', 'github'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={`Follow us on ${social}`}
                  >
                    <span className="text-gray-400 hover:text-white text-sm">
                      {social[0].toUpperCase()}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Text variant="small" className="text-gray-400">
              © {currentYear} Unicorn of One. All rights reserved.
            </Text>
            <Text variant="small" className="text-gray-400">
              Built with ❤️ by solo founders, for solo founders
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;