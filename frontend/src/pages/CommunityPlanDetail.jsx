import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { communityPlans } from '../data/communityPlans';
import { Info, CloudRain, Navigation, DollarSign, Package, RefreshCw, Users, Settings, Briefcase, Coffee, Sun, Utensils, Moon, ChevronUp, ChevronDown } from 'lucide-react';
import toast from 'react-hot-toast';

const CommunityPlanDetail = () => {
  const { id } = useParams();
  const plan = communityPlans.find(p => p.id === id);
  const [activeTab, setActiveTab] = useState('highlights');

  // Accordion state (Day 1 expanded by default)
  const [expandedDays, setExpandedDays] = useState(
    plan && plan.itinerary ? { 0: true } : {}
  );

  // Packing checklist state: `${planId}-${categoryName}-${itemIndex}` -> boolean
  const [checkedItems, setCheckedItems] = useState({});

  if (!plan) {
    return <div className="container" style={{ paddingTop: '100px' }}><h2>Plan not found!</h2></div>;
  }

  const handleFeatureNotAvailable = () => {
    toast('Feature coming soon!', { icon: '🚧' });
  };

  // Itinerary Toggle Handlers
  const toggleDay = (idx) => {
    setExpandedDays(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const allCollapsed = plan.itinerary 
    ? plan.itinerary.every((_, idx) => !expandedDays[idx]) 
    : true;
  
  const handleToggleAll = () => {
    if (allCollapsed) {
      const newExpanded = {};
      plan.itinerary.forEach((_, idx) => {
        newExpanded[idx] = true;
      });
      setExpandedDays(newExpanded);
    } else {
      setExpandedDays({});
    }
  };

  // Packing Checklist Handlers
  const toggleChecklist = (category, itemIdx) => {
    const key = `${plan.id}-${category}-${itemIdx}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const totalPackingItems = plan.packing 
    ? plan.packing.reduce((sum, cat) => sum + cat.items.length, 0)
    : 0;

  const packedItemsCount = plan.packing
    ? plan.packing.reduce((sum, cat) => {
        return sum + cat.items.filter((_, idx) => checkedItems[`${plan.id}-${cat.category}-${idx}`]).length;
      }, 0)
    : 0;

  const packedPercent = totalPackingItems > 0 
    ? Math.round((packedItemsCount / totalPackingItems) * 100) 
    : 0;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-color)', paddingTop: '70px' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', borderRight: '1px solid var(--glass-border)', padding: '24px', position: 'sticky', top: '70px', height: 'calc(100vh - 70px)', overflowY: 'auto' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-light)' }}>Your Plan</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { id: 'highlights', icon: Info, label: 'Trip Highlights' },
            { id: 'weather', icon: CloudRain, label: 'Weather Analysis' },
            { id: 'itinerary', icon: Navigation, label: 'Itinerary' },
            { id: 'budget', icon: DollarSign, label: 'Budget Range' },
            { id: 'packing', icon: Package, label: 'Packing Checklist' }
          ].map(item => (
            <li 
              key={item.id} 
              onClick={() => setActiveTab(item.id)}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', 
                borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem',
                background: activeTab === item.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                color: activeTab === item.id ? 'var(--primary)' : 'var(--text-muted)',
                fontWeight: activeTab === item.id ? '600' : '400',
              }}
            >
              <item.icon size={18} /> {item.label}
            </li>
          ))}
        </ul>

        <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-light)' }}>Control Center</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { id: 'refine', icon: RefreshCw, label: 'Refine Plan' },
            { id: 'expense', icon: DollarSign, label: 'Expense Tracker' },
            { id: 'collab', icon: Users, label: 'Collaborate' },
            { id: 'settings', icon: Settings, label: 'Settings' }
          ].map(item => (
            <li 
              key={item.id} 
              onClick={handleFeatureNotAvailable}
              style={{ 
                display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 16px', 
                borderRadius: '8px', cursor: 'pointer', fontSize: '0.9rem',
                color: 'var(--text-muted)'
              }}
            >
              <item.icon size={18} /> {item.label} <LockIcon />
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px 48px', overflowY: 'auto' }}>
        <div style={{ background: 'var(--card-bg)', borderRadius: '16px', padding: '16px 24px', display: 'inline-block', marginBottom: '24px', border: '1px solid var(--glass-border)' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>📅 {plan.duration}</span>
        </div>

        <div style={{ position: 'relative', height: '300px', borderRadius: '16px', overflow: 'hidden', marginBottom: '40px' }}>
          <img src={plan.image} alt={plan.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '32px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
            <h1 style={{ color: 'white', fontSize: '3rem', margin: 0 }}>{plan.title}</h1>
          </div>
        </div>

        {/* Highlights Section */}
        {activeTab === 'highlights' && (
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '24px' }}>
              <Info size={24} /> Trip Highlights
            </h2>
            <div style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', whiteSpace: 'pre-line' }}>
              {plan.highlights}
            </div>
          </div>
        )}

        {/* Weather Section */}
        {activeTab === 'weather' && plan.weather && (
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '24px' }}>
              <CloudRain size={24} /> Weather Analysis
            </h2>
            <div style={{ marginBottom: '32px', background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Expected Conditions</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{plan.weather.conditions}</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Best Time To Visit</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{plan.weather.bestTime}</p>
            </div>
          </div>
        )}

        {/* Itinerary Section */}
        {activeTab === 'itinerary' && plan.itinerary && (
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', margin: 0 }}>
                <Navigation size={24} color="var(--primary)" /> Itinerary
              </h2>
              <button 
                className="btn-outline" 
                onClick={handleToggleAll}
                style={{ padding: '8px 16px', fontSize: '0.9rem' }}
              >
                {allCollapsed ? 'Expand All Days' : 'Collapse All Days'}
              </button>
            </div>

            {plan.itinerary.map((day, index) => {
              const isExpanded = !!expandedDays[index];
              return (
                <div key={index} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)', marginBottom: '24px', overflow: 'hidden' }}>
                  {/* Day Header */}
                  <div 
                    onClick={() => toggleDay(index)}
                    style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: isExpanded ? '1px solid var(--glass-border)' : 'none', cursor: 'pointer', userSelect: 'none' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(242, 107, 56, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                        {day.day}
                      </div>
                      <div>
                        <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem' }}>{day.title}</h3>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{day.date}</span>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp size={20} color="var(--text-muted)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                  </div>

                  {/* Day Content */}
                  {isExpanded && (
                    <div>
                      <div style={{ padding: '32px', display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
                        
                        {/* Left Column - Schedule */}
                        <div style={{ flex: '1 1 400px' }}>
                          <h4 style={{ marginBottom: '24px', color: 'var(--text-light)', fontSize: '1.1rem' }}>Daily Schedule</h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            {day.schedule.map((slot, i) => (
                              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                  {slot.icon === 'coffee' && <Coffee size={16} color="#FBBC05" />}
                                  {slot.icon === 'sun' && <Sun size={16} color="#4285F4" />}
                                  {slot.icon === 'utensils' && <Utensils size={16} color="#EA4335" />}
                                  {slot.icon === 'moon' && <Moon size={16} color="#8A2BE2" />}
                                </div>
                                <div>
                                  <h5 style={{ margin: '0 0 4px 0', fontSize: '1rem', color: 'var(--text-light)' }}>{slot.time}</h5>
                                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{slot.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right Column - Recommendations */}
                        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                          <div>
                            <h4 style={{ marginBottom: '16px', color: 'var(--text-light)', fontSize: '1.1rem' }}>Food Recommendations</h4>
                            <div style={{ display: 'flex', gap: '12px' }}>
                              <Utensils size={16} color="var(--text-muted)" style={{ marginTop: '4px' }}/>
                              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{day.food}</p>
                            </div>
                          </div>
                          <div>
                            <h4 style={{ marginBottom: '16px', color: 'var(--text-light)', fontSize: '1.1rem' }}>Stay Options</h4>
                            <div style={{ display: 'flex', gap: '12px' }}>
                              <Briefcase size={16} color="var(--text-muted)" style={{ marginTop: '4px' }}/>
                              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{day.stay}</p>
                            </div>
                          </div>
                          <div>
                            <h4 style={{ marginBottom: '16px', color: 'var(--text-light)', fontSize: '1.1rem' }}>Optional Activities</h4>
                            <ul style={{ paddingLeft: '28px', margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                              {day.optional.map((opt, i) => <li key={i} style={{ marginBottom: '8px' }}>{opt}</li>)}
                            </ul>
                          </div>
                        </div>

                      </div>

                      {/* Day Tip */}
                      <div style={{ padding: '16px 32px', background: 'rgba(242, 107, 56, 0.05)', borderTop: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Sun size={18} color="var(--primary)" />
                        <span style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}><strong>Tip:</strong> {day.tip}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && plan.budget && (
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', marginBottom: '24px' }}>
              <DollarSign size={24} color="var(--primary)" /> Budget Range Analysis
            </h2>
            
            {/* Overall stats cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Total Range</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginTop: '8px' }}>{plan.budget.total}</h3>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '12px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Daily Average</span>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--accent)', marginTop: '8px' }}>{plan.budget.dailyAverage}</h3>
              </div>
            </div>

            {/* Allocation breakdown progress bars */}
            <div style={{ background: 'rgba(255,255,255,0.01)', padding: '28px', borderRadius: '12px', border: '1px solid var(--glass-border)', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Budget Allocation Breakdown</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {plan.budget.categories.map((cat, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.95rem' }}>
                      <span style={{ fontWeight: '500' }}>{cat.name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{cat.cost} ({cat.percent}%)</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ 
                        width: `${cat.percent}%`, 
                        height: '100%', 
                        background: idx === 0 ? 'var(--primary)' : idx === 1 ? 'var(--secondary)' : idx === 2 ? 'var(--accent)' : '#8A2BE2',
                        borderRadius: '999px',
                        transition: 'width 1s ease-in-out'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Tiers Grid */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Estimated Daily Cost Tiers</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                {plan.budget.tiers.map((tier, idx) => (
                  <div key={idx} style={{ 
                    background: 'rgba(255,255,255,0.02)', 
                    padding: '24px', 
                    borderRadius: '12px', 
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      position: 'absolute', top: 0, right: 0, width: '60px', height: '60px', 
                      background: idx === 0 ? 'rgba(0,196,204,0.1)' : idx === 1 ? 'rgba(242,107,56,0.1)' : 'rgba(230,46,112,0.1)',
                      filter: 'blur(20px)', zIndex: 0 
                    }} />
                    <div style={{ zIndex: 1 }}>
                      <h4 style={{ fontSize: '1.1rem', color: idx === 0 ? 'var(--accent)' : idx === 1 ? 'var(--primary)' : 'var(--secondary)', marginBottom: '8px' }}>{tier.name}</h4>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>{tier.desc}</p>
                    </div>
                    <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '16px', zIndex: 1 }}>
                      <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{tier.cost}</span> <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>/ day</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saving Tips box */}
            <div style={{ background: 'rgba(242, 107, 56, 0.05)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(242, 107, 56, 0.2)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                💡 Money Saving Tips for {plan.title.split(',')[0]}
              </h4>
              <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                {plan.budget.tips.map((tip, i) => <li key={i}>{tip}</li>)}
              </ul>
            </div>
          </div>
        )}

        {/* Packing Tab */}
        {activeTab === 'packing' && plan.packing && (
          <div className="glass-panel" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.5rem', margin: 0 }}>
                <Package size={24} color="var(--primary)" /> Packing Checklist
              </h2>
              {/* Progress counter badge */}
              <div style={{ background: 'var(--input-bg)', padding: '8px 16px', borderRadius: '20px', border: '1px solid var(--glass-border)', fontSize: '0.9rem', fontWeight: '500' }}>
                📋 Packed: <span style={{ color: 'var(--primary)' }}>{packedItemsCount}</span> of <span>{totalPackingItems}</span> items
              </div>
            </div>

            {/* Overall progress bar */}
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px', border: '1px solid var(--glass-border)', marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem' }}>
                <span>Overall Packing Progress</span>
                <span style={{ fontWeight: 'bold', color: 'var(--primary)' }}>{packedPercent}% Done</span>
              </div>
              <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ 
                  width: `${packedPercent}%`, 
                  height: '100%', 
                  background: 'var(--gradient-brand)',
                  borderRadius: '999px',
                  transition: 'width 0.3s ease-out'
                }} />
              </div>
            </div>

            {/* Categories list */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {plan.packing.map((cat, catIdx) => (
                <div key={catIdx} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--glass-border)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.1rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px', color: 'var(--text-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span>{cat.category}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '10px' }}>
                      {cat.items.filter((_, idx) => checkedItems[`${plan.id}-${cat.category}-${idx}`]).length} / {cat.items.length}
                    </span>
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {cat.items.map((item, idx) => {
                      const isChecked = !!checkedItems[`${plan.id}-${cat.category}-${idx}`];
                      return (
                        <label 
                          key={idx} 
                          style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            gap: '12px', 
                            cursor: 'pointer',
                            padding: '8px 12px',
                            borderRadius: '8px',
                            background: isChecked ? 'rgba(242, 107, 56, 0.03)' : 'transparent',
                            border: '1px solid',
                            borderColor: isChecked ? 'rgba(242, 107, 56, 0.15)' : 'transparent',
                            transition: 'all 0.2s ease',
                            userSelect: 'none'
                          }}
                        >
                          <input 
                            type="checkbox" 
                            checked={isChecked}
                            onChange={() => toggleChecklist(cat.category, idx)}
                            style={{ 
                              marginTop: '3px',
                              accentColor: 'var(--primary)',
                              cursor: 'pointer',
                              width: '16px',
                              height: '16px'
                            }}
                          />
                          <span style={{ 
                            fontSize: '0.95rem',
                            color: isChecked ? 'var(--text-muted)' : 'var(--text-light)',
                            textDecoration: isChecked ? 'line-through' : 'none',
                            transition: 'all 0.2s ease',
                            lineHeight: '1.4'
                          }}>
                            {item}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fallback for missing tabs */}
        {activeTab === 'budget' && !plan.budget && (
          <div className="glass-panel" style={{ padding: '48px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '16px' }}>Detailed budget data not available</h2>
            <p style={{ color: 'var(--text-muted)' }}>This plan does not have a budget breakdown populated.</p>
          </div>
        )}
        {activeTab === 'packing' && !plan.packing && (
          <div className="glass-panel" style={{ padding: '48px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '16px' }}>Detailed packing checklist not available</h2>
            <p style={{ color: 'var(--text-muted)' }}>This plan does not have a packing checklist populated.</p>
          </div>
        )}

      </main>
    </div>
  );
};

// Simple lock icon for control center items
const LockIcon = () => (
  <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

export default CommunityPlanDetail;
