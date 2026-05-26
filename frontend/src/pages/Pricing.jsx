import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Pricing = () => {
  const navigate = useNavigate();

  const handleAction = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast('Please log in first to continue.', { icon: '👋' });
      navigate('/auth');
    } else {
      toast.success('Payment Integration Coming Soon!', { icon: '🚀' });
    }
  };

  return (
    <div style={{ paddingBottom: '100px' }}>
      <section style={{ padding: '120px 0 60px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="heading-gradient" style={{ fontSize: '3.5rem', marginBottom: '24px' }}>Simple, transparent pricing</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Pay only for what you use. No hidden fees, no subscriptions required.
          </p>
        </div>
      </section>

      <section style={{ padding: '0 0 80px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          {/* Free Tier */}
          <div className="glass-panel" style={{ padding: '48px', width: '350px', textAlign: 'left', position: 'relative' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>2 Credits</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>₹0</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>₹400</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><ShieldCheck size={20} color="var(--primary)"/> Tailored Itineraries (7 days)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><ShieldCheck size={20} color="var(--primary)"/> Top Spots Unveiled</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><ShieldCheck size={20} color="var(--primary)"/> Invite 1 collaborator</li>
            </ul>
            <button className="btn-outline" style={{ width: '100%' }} onClick={handleAction}>Start for free</button>
          </div>
          
          {/* Paid Tier */}
          <div className="glass-panel" style={{ padding: '48px', width: '350px', textAlign: 'left', background: 'linear-gradient(180deg, rgba(30, 41, 59, 0.8) 0%, rgba(242, 107, 56, 0.1) 100%)', border: '1px solid rgba(242, 107, 56, 0.3)' }}>
            <div style={{ position: 'absolute', top: '-15px', right: '30px', background: 'var(--gradient-brand)', color: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600 }}>Most Popular</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>5 Credits</h3>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>₹250</span>
              <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>₹1000</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><ShieldCheck size={20} color="var(--secondary)"/> Tailored Itineraries (30 days)</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><ShieldCheck size={20} color="var(--secondary)"/> Advanced Travel Optimization</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><ShieldCheck size={20} color="var(--secondary)"/> Invite up to 5 collaborators</li>
            </ul>
            <button className="btn-primary" style={{ width: '100%' }} onClick={handleAction}>Buy Credits</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-light)' }}>What is a Credit?</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>One credit allows you to generate a fully customized, premium itinerary using our advanced AI models. It covers all the destination research, routing, and personalized recommendations.</p>
          </div>
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--text-light)' }}>Do credits expire?</h4>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>No! Once you purchase credits, they remain in your account forever until you use them. You can buy them now and plan a trip months later.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
