import React from 'react';

export const AlertPanel = () => {
  return (
    <div style={{ padding: '1rem', backgroundColor: '#fee2e2', border: '1px solid #ef4444', borderRadius: '4px', marginBottom: '1rem' }}>
      <h3 style={{ margin: 0, color: '#991b1b' }}>System Status</h3>
      <p style={{ margin: '0.5rem 0 0 0', color: '#b91c1c' }}>1 Active Alert: High CPU usage on Server 4.</p>
    </div>
  );
};