import React from 'react';

interface KpiCardProps {
  title: string;
  metric: string;
  trend: string;
}

export const KpiCard = ({ title, metric, trend }: KpiCardProps) => {
  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', flex: 1 }}>
      <h4 style={{ margin: 0, color: '#6b7280', fontSize: '0.875rem', textTransform: 'uppercase' }}>{title}</h4>
      <p style={{ margin: '0.5rem 0', fontSize: '2rem', fontWeight: 'bold', color: '#111827' }}>{metric}</p>
      <span style={{ color: trend.startsWith('+') ? '#059669' : '#dc2626', fontSize: '0.875rem' }}>{trend} vs last week</span>
    </div>
  );
};