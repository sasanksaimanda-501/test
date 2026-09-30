import React from 'react';
import { KpiCard } from './components/KpiCard';
import { AlertPanel } from './components/AlertPanel';

export const Dashboard = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <h1 style={{ color: '#111827', marginBottom: '2rem' }}>Enterprise Operations Overview</h1>
      
      <AlertPanel />

      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <KpiCard title="Active Users" metric="24,591" trend="+12%" />
        <KpiCard title="System Uptime" metric="99.98%" trend="+0.01%" />
        <KpiCard title="Open Tickets" metric="142" trend="-5%" />
      </div>

      <section style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
        <h2>Quick Actions</h2>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Generate Report</button>
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#ffffff', color: '#374151', border: '1px solid #d1d5db', borderRadius: '4px', cursor: 'pointer' }}>View Logs</button>
        </div>
      </section>
    </div>
  );
};