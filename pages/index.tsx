import React from 'react';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to DigitalHoldingAI 🚀</h1>
      <p>This is a clean Next.js + TypeScript + Supabase + Contact Form starter.</p>
      <form method="POST" action="/api/contact" style={{ marginTop: '2rem' }}>
        <input type="text" name="name" placeholder="Your Name" required style={{ padding: '0.5rem', marginBottom: '1rem' }} /><br />
        <input type="email" name="email" placeholder="Your Email" required style={{ padding: '0.5rem', marginBottom: '1rem' }} /><br />
        <textarea name="message" placeholder="Your Message" required style={{ padding: '0.5rem', marginBottom: '1rem' }}></textarea><br />
        <button type="submit" style={{ padding: '0.75rem 2rem' }}>Send</button>
      </form>
    </div>
  );
}