import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { communityPlans } from '../data/communityPlans';

const Community = () => {
  const [showAll, setShowAll] = useState(false);

  // Show only 6 by default, or all when showAll is true
  const displayedPlans = showAll ? communityPlans : communityPlans.slice(0, 6);

  return (
    <div className="container" style={{ paddingTop: '100px', minHeight: '80vh', paddingBottom: '60px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '16px' }}>Our Community's Favorite Trips</h2>
        <p style={{ color: 'var(--text-muted)' }}>Explore handpicked itineraries from our community of travelers.</p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: '24px' 
      }}>
        {displayedPlans.map((plan) => (
          <Link to={`/community/${plan.id}`} key={plan.id} style={{ textDecoration: 'none' }}>
            <div className="glass-panel" style={{ 
              borderRadius: '16px', 
              overflow: 'hidden', 
              position: 'relative',
              height: '240px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(242, 107, 56, 0.15)';
              e.currentTarget.style.borderColor = 'rgba(242, 107, 56, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
            >
              <img 
                src={plan.image} 
                alt={plan.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'brightness(0.65)',
                  transition: 'filter 0.3s ease'
                }} 
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '0', 
                left: '0', 
                width: '100%', 
                padding: '20px',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)'
              }}>
                <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: '600', textShadow: '0 2px 4px rgba(0,0,0,0.5)', marginBottom: '4px' }}>{plan.title}</h3>
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', fontWeight: '500' }}>📅 {plan.duration}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <button 
          className="btn-outline" 
          onClick={() => setShowAll(!showAll)}
          style={{ 
            padding: '12px 36px', 
            fontSize: '0.95rem',
            fontWeight: '600',
            cursor: 'pointer',
            borderRadius: '30px',
            border: '1px solid var(--glass-border)',
            background: 'var(--card-bg)',
            color: 'var(--text-light)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gradient-brand)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(242, 107, 56, 0.3)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--card-bg)';
            e.currentTarget.style.color = 'var(--text-light)';
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          {showAll ? 'Show Featured Plans' : 'View All Community Plans'}
        </button>
      </div>
    </div>
  );
};

export default Community;
