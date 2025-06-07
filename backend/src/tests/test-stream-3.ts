/**
 * Test Script for Stream 3 - Cart Abandonment
 * 
 * Run this to test the cart abandonment email sequence
 */

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

async function testStream3() {
  console.log('🚀 Testing Stream 3 - Cart Abandonment Email Sequence\n');

  try {
    // Step 1: Track a cart abandonment
    console.log('1️⃣ Tracking cart abandonment...');
    const abandonmentResponse = await axios.post(`${API_BASE_URL}/cart-abandonment`, {
      email: 'sarah.founder@example.com',
      firstName: 'Sarah',
      productId: 'unicorn-strategy-session',
      cartValue: 997,
      metadata: {
        source: 'landing-page',
        referrer: 'google-ads',
        sessionId: 'test_session_123'
      }
    });

    const abandonmentId = abandonmentResponse.data.data.id;
    console.log(`✅ Cart abandonment tracked: ${abandonmentId}\n`);

    // Step 2: Check abandonment status
    console.log('2️⃣ Checking abandonment status...');
    const statusResponse = await axios.get(`${API_BASE_URL}/cart-abandonment/${abandonmentId}`);
    console.log('Status:', statusResponse.data.data);
    console.log('');

    // Step 3: Check email queue
    console.log('3️⃣ Checking email queue...');
    const queueResponse = await axios.get(`${API_BASE_URL}/cart-abandonment/queue/status`);
    console.log('Queued emails:', queueResponse.data.data.queuedEmails);
    console.log('');

    // Step 4: Wait and simulate emails being sent
    console.log('4️⃣ Waiting for emails to be scheduled...');
    console.log('⏰ Email 1 will be sent in 2 hours (simulated as 2 seconds for testing)');
    console.log('⏰ Email 2 will be sent in 24 hours (simulated as 5 seconds for testing)\n');

    // Optional: Simulate cart recovery
    const shouldRecover = false; // Change to true to test recovery
    if (shouldRecover) {
      console.log('5️⃣ Simulating cart recovery...');
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait 3 seconds
      
      const recoverResponse = await axios.put(`${API_BASE_URL}/cart-abandonment/${abandonmentId}/recover`);
      console.log('✅ Cart recovered:', recoverResponse.data.data);
      console.log('ℹ️  No more emails will be sent for this abandonment\n');
    }

    console.log('✨ Stream 3 test completed successfully!');
    console.log('\nNOTE: In production, emails would be sent after the specified delays.');
    console.log('Check the server logs to see mock email sends.\n');

  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
  }
}

// Run the test
if (require.main === module) {
  testStream3();
}

export { testStream3 };