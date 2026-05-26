import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Map, Calendar, Users, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import toast from 'react-hot-toast';

const Home = () => {
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
      {/* Hero Section */}
      <section style={{ 
        padding: '120px 0', 
        textAlign: 'center', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '80%',
          background: 'var(--gradient-glow)',
          filter: 'blur(120px)',
          zIndex: -1,
          borderRadius: '50%'
        }}></div>
        
        <div className="container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(242, 107, 56, 0.1)', padding: '8px 16px', borderRadius: '99px', marginBottom: '32px', border: '1px solid rgba(242, 107, 56, 0.2)', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
            <Sparkles size={16} />
            Your AI-Powered Travel Planner
          </div>
          
          <h1 className="heading-gradient" style={{ 
            fontSize: '5rem', 
            marginBottom: '24px', 
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
            maxWidth: '900px',
            margin: '0 auto 24px'
          }}>
            Plan your perfect trip with smart AI
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-muted)', 
            marginBottom: '48px', 
            maxWidth: '650px', 
            margin: '0 auto 48px',
            lineHeight: 1.6
          }}>
            Effortlessly plan personalized itineraries that match your travel style, budget, and time—so you spend less time organizing and more time exploring.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link to="/plan">
              <button className="btn-primary" style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                Start Planning <ArrowRight size={20} />
              </button>
            </Link>
            <Link to="/community">
              <button className="btn-outline" style={{ fontSize: '1.1rem' }}>
                Explore Plans
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '60px' }}>Why choose WanderNest?</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(242, 107, 56, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Calendar size={32} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Never Miss a Moment</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Our smart tools optimize every hour of your trip, balancing must-see sights, hidden gems, and downtime — all while staying within your budget.</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(0, 196, 204, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Users size={32} color="var(--accent)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Collaborate Instantly</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Sync with friends or family in real-time, agree on plans, and book flights, hotels, and activities in seconds — no more endless debates.</p>
            </div>
            
            <div className="glass-panel" style={{ padding: '40px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'rgba(230, 46, 112, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Zap size={32} color="var(--secondary)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Zero Effort Deals</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We partner with trusted providers worldwide to bring real-time meta-searched offers, so you save money without hunting for deals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section Preview */}
      <section id="pricing" style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Simple, transparent pricing</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '60px' }}>Pay only for what you use. No subscriptions required.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
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
        </div>
      </section>
    </div>
  );
};

export default Home;
