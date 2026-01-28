export default function Footer() {
  const ofOneProducts = [
    { name: "CEO of One", url: "https://ceoofone.ai" },
    { name: "CFO of One", url: "https://cfoofone.ai" },
    { name: "Lawyer of One", url: "https://lawyerofone.ai" },
    { name: "CTO of One", url: "https://ctoofone.ai" },
    { name: "Creator of One", url: "https://creatorofone.ai" },
    { name: "Marketer of One", url: "https://marketerofone.ai" },
  ];

  const resources = [
    { name: "Blog", url: "#" },
    { name: "Podcast", url: "#" },
    { name: "Case Studies", url: "#" },
    { name: "AI Tool Directory", url: "#" },
    { name: "Solo Founder Playbook", url: "#" },
  ];

  const company = [
    { name: "About Utlyze", url: "https://utlyze.com" },
    { name: "Of One Suite", url: "https://of1.ai" },
    { name: "Careers", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
  ];

  return (
    <footer className="border-t border-[#2a2a45] bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4169E1] to-[#8E44AD] flex items-center justify-center text-white font-bold text-sm">
                U1
              </div>
              <span className="text-lg font-bold text-white">
                Unicorn<span className="text-[#4169E1]">of</span>One
              </span>
            </a>
            <p className="text-sm text-[#8888aa] leading-relaxed mb-6">
              Build and scale a billion-dollar business with a team of one. Part of
              the Of One suite by Utlyze.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {[
                { label: "Twitter/X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-lg border border-[#2a2a45] flex items-center justify-center text-[#8888aa] hover:text-[#4169E1] hover:border-[#4169E1]/50 transition-all"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Of One Suite */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Of One Suite
            </h4>
            <ul className="space-y-3">
              {ofOneProducts.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="text-sm text-[#8888aa] hover:text-[#4169E1] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="text-sm text-[#8888aa] hover:text-[#4169E1] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="text-sm text-[#8888aa] hover:text-[#4169E1] transition-colors"
                    target={item.url.startsWith("http") ? "_blank" : undefined}
                    rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2a2a45] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8888aa]">
            © {new Date().getFullYear()} Utlyze Inc. All rights reserved.
          </p>
          <p className="text-sm text-[#8888aa]">
            Built with 🦄 by a team of one
          </p>
        </div>
      </div>
    </footer>
  );
}
