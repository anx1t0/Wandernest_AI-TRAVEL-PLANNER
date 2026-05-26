import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav style={{ 
      padding: '20px 0', 
      borderBottom: '1px solid var(--glass-border)', 
      background: 'var(--card-bg)', 
      backdropFilter: 'blur(10px)', 
      position: 'sticky', 
      top: 0, 
      zIndex: 100 
    }}>
      <div className="container flex-between">
        <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.png" alt="WanderNest Logo" style={{ width: '40px', height: '40px', borderRadius: '8px' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
            WanderNest
          </span>
        </Link>
        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link to="/#how-it-works" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>How it works</Link>
          <Link to="/community" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>Community Plans</Link>
          <Link to="/pricing" style={{ color: 'var(--text-light)', textDecoration: 'none', fontWeight: 500, fontSize: '0.95rem' }}>Pricing</Link>
          
          {localStorage.getItem('token') ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gradient-brand)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                {JSON.parse(localStorage.getItem('user') || '{}')?.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
              <button 
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  window.location.reload();
                }}
                className="btn-outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }}
              >
                Log Out
              </button>
            </div>
          ) : (
            <Link to="/auth">
              <button className="btn-outline" style={{ padding: '10px 24px', fontSize: '0.95rem' }}>Log In</button>
            </Link>
          )}

          <button 
            onClick={toggleTheme} 
            style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', borderRadius: '50%' }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
