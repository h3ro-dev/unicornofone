export interface EmailTemplate {
  id: string;
  subject: string;
  preheader?: string;
  body: string;
  dayDelay: number;
}

export const welcomeSequenceTemplates: EmailTemplate[] = [
  // Email 1: Welcome - The Path Less Traveled
  {
    id: 'welcome-1',
    subject: "Welcome to the 1% (here's why everyone will doubt you)",
    dayDelay: 0,
    body: `
<p>{{name}},</p>

<p>You just joined a revolution that most people don't believe is possible.</p>

<p>Building a unicorn-level business with a team of one? They'll say you're crazy.</p>

<p>Good. Let them.</p>

<p>Because while they're scheduling their 47th team sync of the week, you'll be shipping features that matter. While they're managing personalities, you'll be multiplying impact.</p>

<p><strong>Over the next week, I'll show you exactly how to:</strong></p>
<ul>
<li>Replace a 10-person team with AI systems that never sleep</li>
<li>10x your productivity by saying no to 90% of "opportunities"</li>
<li>Build faster than funded startups (without the burn rate)</li>
<li>Create systems that scale infinitely without adding headcount</li>
</ul>

<p>But first, let's talk about the elephant in the room...</p>

<p>Everyone will tell you that you need co-founders, employees, advisors, investors. That you can't possibly do it alone.</p>

<p>They're living in the past.</p>

<p>The future belongs to the radically focused. The ones who leverage AI like a superpower. The builders who choose simplicity over complexity.</p>

<p>Tomorrow, I'll introduce you to your new AI team—the one that costs less than your coffee budget.</p>

<p>Welcome to the revolution.</p>

<p>To your solo unicorn journey,<br>
Alex Mitchell<br>
Founder, Unicorn of One</p>

<p>P.S. Quick homework: Write down the ONE thing that would 10x your business if you could focus on it exclusively. We'll use this soon.</p>
`
  },

  // Email 2: The AI Team
  {
    id: 'welcome-2',
    subject: 'Meet your team of tireless AI employees',
    dayDelay: 2,
    body: `
<p>{{name}},</p>

<p>Sarah Chen just replied to my last email: "I hired 12 AI employees last month. Best decision ever."</p>

<p>Plot twist: Her AI team generated $180K in revenue while she slept.</p>

<p>Here's her exact setup:</p>

<p><strong>The AI Dream Team:</strong></p>
<ul>
<li>🤖 Claude (Strategy) - Writes better plans than $500/hr consultants</li>
<li>📝 ChatGPT (Content) - Creates 50 pieces of content daily</li>
<li>🔄 Zapier (Operations) - Automates everything that used to need an ops manager</li>
<li>🔍 Perplexity (Research) - Knows your market better than any analyst</li>
</ul>

<p><strong>Total cost: $197/month<br>
Value created: Priceless</strong></p>

<p>But here's what Sarah discovered that changed everything...</p>

<p>It's not about the tools. It's about the system.</p>

<p>You can give someone the best AI tools on the planet. Without the right framework, they'll still struggle.</p>

<p>That's why tomorrow, I'm sharing the "Strategic No" system that lets you leverage AI at 10x capacity.</p>

<p>Because the secret isn't working harder with AI. It's working on fewer things that matter more.</p>

<p>Exponentially yours,<br>
Alex</p>

<p>P.S. Our next cohort opens in 2 weeks. Just saying... 😉</p>
`
  },

  // Email 3: The Power of No
  {
    id: 'welcome-3',
    subject: 'Why I said no to $2M in revenue',
    dayDelay: 4,
    body: `
<p>{{name}},</p>

<p>True story: Last year, I turned down a $2M contract.</p>

<p>My friends thought I'd lost my mind. But here's what they didn't see...</p>

<p>That contract would have consumed 60% of my time for 12 months. The opportunity cost? About $10M in lost growth from my core business.</p>

<p><strong>The Strategic No Formula:</strong></p>
<ol>
<li>Calculate the TRUE time cost (not just hours, but mental energy)</li>
<li>Multiply by your hourly value (revenue ÷ hours worked)</li>
<li>Compare to your best alternative opportunity</li>
<li>If it's not 10x better, it's a no</li>
</ol>

<p>This isn't about being arrogant. It's about being strategic.</p>

<p>Every "yes" to good kills a "yes" to great.</p>

<p><strong>Your Challenge:</strong><br>
List 3 things you're doing out of obligation, not opportunity. Pick one to eliminate this week.</p>

<p>Sarah Chen did this exercise and dropped 3 "good" clients. Six months later? $2.4M ARR.</p>

<p>Tomorrow: The daily ritual that changed everything.</p>

<p>Stay focused,<br>
Alex</p>

<p>P.S. Struggling with what to cut? Reply with your list. I'll help you choose.</p>
`
  },

  // Email 4: One Thing Daily
  {
    id: 'welcome-4',
    subject: 'The 6-minute morning ritual worth $1M+',
    dayDelay: 6,
    body: `
<p>{{name}},</p>

<p>Every morning at 5:54 AM, I do something unusual.</p>

<p>I sit with a blank piece of paper and write ONE thing.</p>

<p>Not a to-do list. Not goals. Just ONE thing that will move my business forward most today.</p>

<p>Then I do that thing first. Before email. Before Slack. Before the world wakes up.</p>

<p><strong>The compound effect is staggering:</strong></p>
<ul>
<li>1 needle-mover per day = 365 per year</li>
<li>365 focused actions > 3,650 scattered tasks</li>
<li>Result: Exponential growth while others linear struggle</li>
</ul>

<p>Marcus Rodriguez used this to go from 0 to 50K users. Solo.</p>

<p><strong>Try it tomorrow:</strong></p>
<ol>
<li>Wake up</li>
<li>Coffee (optional but recommended)</li>
<li>One paper, one pen</li>
<li>One thing that matters most</li>
<li>Do it before anything else</li>
</ol>

<p>That's it. No app needed. No complexity.</p>

<p>Just focus.</p>

<p>Final email tomorrow: Your invitation to something special.</p>

<p>One thing at a time,<br>
Alex</p>
`
  },

  // Email 5: Your Unicorn Moment - THE CONVERSION EMAIL
  {
    id: 'welcome-5',
    subject: 'Ready to build your billion-dollar vision?',
    dayDelay: 8,
    body: `
<p>{{name}},</p>

<p>Over the past week, you've learned:</p>
<ul>
<li>✓ The 10x Test (eliminate everything else)</li>
<li>✓ AI Systems (your tireless team)</li>
<li>✓ Strategic No (protect your yes)</li>
<li>✓ One Thing Daily (compound focus)</li>
</ul>

<p>These aren't just concepts. They're the exact system I used to build and exit three companies, the last one in just 18 months solo.</p>

<p>But here's the truth...</p>

<p><strong>Information isn't transformation.</strong></p>

<p>You need three things to actually build your unicorn:</p>
<ol>
<li>A proven system (you've seen a glimpse)</li>
<li>Accountability (the solo founder's kryptonite)</li>
<li>A guide who's been there (hi 👋)</li>
</ol>

<p>That's why I created Unicorn of One.</p>

<p><strong>This week only, I'm opening 20 spots for Strategy Sessions.</strong></p>

<p>In 60 minutes, we'll:</p>
<ul>
<li>Analyze your business for 10x opportunities</li>
<li>Design your AI leverage system</li>
<li>Create your 90-day scaling roadmap</li>
<li>See if Unicorn of One is right for you</li>
</ul>

<p>No pitch fest. If we're not 100% confident we can help you scale, we'll tell you.</p>

<p style="text-align: center; margin: 30px 0;">
<a href="{{strategySessionUrl}}" style="background-color: #4169E1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">BOOK YOUR STRATEGY SESSION →</a>
</p>

<p>These spots typically fill in 48 hours.</p>

<p>To your unicorn future,<br>
Alex</p>

<p>P.S. Still skeptical? Read what Sarah, Marcus, and Jennifer say about their transformations: <a href="{{successStoriesUrl}}">Success Stories</a></p>
`
  }
];

// Follow-up sequences for after strategy session
export const postSessionTemplates: EmailTemplate[] = [
  {
    id: 'post-session-1',
    subject: 'Your Unicorn Roadmap (as promised)',
    dayDelay: 0, // Send 1 hour after session
    body: `
<p>{{name}},</p>

<p>Incredible session! Your vision for {{businessName}} is exactly the kind of ambitious thinking that builds unicorns.</p>

<p>As promised, here's your personalized roadmap:</p>

<p><strong>Your 30-Day Quick Wins:</strong></p>
{{quickWins}}

<p><strong>Your 90-Day Priorities:</strong></p>
{{priorities}}

<p><strong>AI Tools to Implement:</strong></p>
{{aiTools}}

<p>Remember: Focus beats force every time.</p>

<p>Start with quick win #1. Complete it before moving to #2.</p>

<p>If you're ready to accelerate this journey, our Scale tier includes everything we discussed: weekly strategy calls, AI implementation support, and our full framework.</p>

<p>Your special offer expires in 72 hours: <a href="{{offerUrl}}">Claim Your Spot</a></p>

<p>To your success,<br>
Alex</p>
`
  }
];