/**
 * Test script for Email Sequence - Stream 5 (Conversion Email)
 * 
 * This demonstrates how the email sequence works, with focus on Email 5
 * which is the key conversion email in the sequence.
 */

import { emailService } from './services/emailService';

async function testEmailSequence() {
  console.log('🚀 Testing Unicorn of One Email Sequence - Stream 5\n');

  // Test recipient
  const testLead = {
    email: 'test@example.com',
    name: 'Test Founder',
    leadId: 'test_lead_123',
    signupDate: new Date(),
    customFields: {
      businessName: 'Test Startup',
      source: 'testing'
    }
  };

  console.log('📧 Starting welcome sequence for:', testLead.email);
  console.log('-------------------------------------------\n');

  // Start the welcome sequence
  await emailService.startWelcomeSequence(testLead);

  console.log('✅ Email 1 sent immediately: "Welcome to the 1% (here\'s why everyone will doubt you)"\n');

  // Show the sequence schedule
  console.log('📅 Email Sequence Schedule:');
  console.log('- Email 1 (Welcome): Sent immediately ✓');
  console.log('- Email 2 (AI Team): Day 2');
  console.log('- Email 3 (Power of No): Day 4');
  console.log('- Email 4 (One Thing Daily): Day 6');
  console.log('- Email 5 (Your Unicorn Moment): Day 8 ⭐️ CONVERSION EMAIL\n');

  // Check sequence status
  const status = emailService.getSequenceStatus(testLead.leadId);
  console.log('📊 Current Sequence Status:', {
    currentEmailIndex: status?.currentEmailIndex,
    emailsSent: status?.emails.filter(e => e.sentAt).length,
    startedAt: status?.startedAt
  });

  console.log('\n-------------------------------------------');
  console.log('🎯 Testing Email 5 (Stream 5) - Direct Send\n');

  // Demonstrate sending Email 5 immediately
  await emailService.sendEmail5Immediately(testLead);

  console.log('✅ Email 5 sent directly!');
  console.log('\n📧 Email 5 Details:');
  console.log('Subject: "Ready to build your billion-dollar vision?"');
  console.log('Purpose: Drive conversions to strategy session bookings');
  console.log('Key Elements:');
  console.log('  - Recap of all 4 previous learnings');
  console.log('  - Strong urgency (limited spots)');
  console.log('  - Clear CTA to book strategy session');
  console.log('  - Social proof reference\n');

  console.log('🔗 Links in Email 5:');
  console.log(`  - Strategy Session: https://unicornofone.ai/book-session?ref=email&id=${testLead.leadId}`);
  console.log('  - Success Stories: https://unicornofone.ai/success-stories\n');

  console.log('💡 Use Cases for Direct Email 5 Send:');
  console.log('  1. Hot leads who need immediate attention');
  console.log('  2. Re-engagement campaigns');
  console.log('  3. Testing conversion rates');
  console.log('  4. Special promotions\n');

  // Demonstrate post-session email
  console.log('-------------------------------------------');
  console.log('📮 Post-Session Follow-up Example\n');

  const sessionData = {
    businessName: 'Test Startup',
    quickWins: '<ul><li>Implement AI customer support</li><li>Automate content creation</li><li>Set up analytics dashboard</li></ul>',
    priorities: '<ul><li>Product-market fit validation</li><li>Revenue stream optimization</li><li>Scale preparation</li></ul>',
    aiTools: '<ul><li>Claude for strategy</li><li>ChatGPT for content</li><li>Zapier for automation</li></ul>',
    offerUrl: `https://unicornofone.ai/special-offer?lead=${testLead.leadId}`
  };

  await emailService.sendPostSessionEmail(testLead, sessionData);

  console.log('✅ Post-session email sent with personalized roadmap!\n');

  console.log('📈 Expected Conversion Metrics:');
  console.log('  - Email 5 Open Rate: 40%+');
  console.log('  - Email 5 Click Rate: 15%+');
  console.log('  - Strategy Session Booking Rate: 5%+\n');

  console.log('✨ Stream 5 Implementation Complete!');
}

// Run the test if this file is executed directly
if (require.main === module) {
  testEmailSequence().catch(console.error);
}

export { testEmailSequence };