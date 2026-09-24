import React from "react";
import { certifications, enterpriseClients } from "../data";

export default function Learning() {
  return (
    <section className="light-section section-pad section-soft">
      <div className="section-shell">
        {/* Certifications */}
        <div className="section-heading centered reveal">
          <span className="eyebrow">CERTIFICATIONS</span>
          <p>Continuously expanding expertise across the Salesforce ecosystem and modern web technologies.</p>
        </div>

        <div className="cert-grid" style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Salesforce Certifications */}
          <article className="cert-card reveal" style={{ 
            border: '1px solid var(--line)', 
            borderRadius: '16px', 
            padding: '28px', 
            background: '#fff',
            transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--line)' }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '10px', 
                background: 'linear-gradient(135deg, #1798c1, #0ea5e9)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff',
                fontSize: '18px'
              }}>
                <i className="fa-brands fa-salesforce"></i>
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: 'var(--ink)' }}>Salesforce</h3>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{certifications.salesforce.length} Certifications</span>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {certifications.salesforce.map((cert, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  padding: '10px 12px',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  transition: 'background .2s ease',
                }}>
                  <i className="fa-solid fa-check" style={{ color: '#22c55e', fontSize: '14px' }}></i>
                  <span style={{ fontSize: '14px', color: 'var(--ink-2)', fontWeight: '500' }}>{cert}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Other Certifications */}
          <article className="cert-card reveal" style={{ 
            border: '1px solid var(--line)', 
            borderRadius: '16px', 
            padding: '28px', 
            background: '#fff',
            transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid var(--line)' }}>
              <div style={{ 
                width: '44px', 
                height: '44px', 
                borderRadius: '10px', 
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#fff',
                fontSize: '18px'
              }}>
                <i className="fa-solid fa-code"></i>
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: 'var(--ink)' }}>Web Technologies</h3>
                <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{certifications.other.length} Certifications</span>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {certifications.other.map((cert, index) => (
                <li key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  padding: '10px 12px',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  transition: 'background .2s ease',
                }}>
                  <i className="fa-solid fa-check" style={{ color: '#22c55e', fontSize: '14px' }}></i>
                  <span style={{ fontSize: '14px', color: 'var(--ink-2)', fontWeight: '500' }}>{cert}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Enterprise Clients */}
        <div className="section-heading centered reveal" style={{ marginTop: '80px' }}>
          <span className="eyebrow">ENTERPRISE IMPACT</span>
          <h2>Clients I've Delivered For</h2>
          <p>Building scalable Salesforce and web solutions for global brands across industries.</p>
        </div>

        <div className="clients-grid" style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {enterpriseClients.map((client) => (
            <article key={client.id} className="client-card reveal" style={{ 
              border: '1px solid var(--line)', 
              borderRadius: '16px', 
              padding: '24px', 
              background: '#fff',
              transition: 'transform .2s ease, box-shadow .2s ease, border-color .2s ease',
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '12px', 
                  background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '20px'
                }}>
                  <i className={client.logo}></i>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: 'var(--ink)' }}>{client.name}</h4>
                  <span style={{ fontSize: '12px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{client.sector}</span>
                </div>
              </div>
              <p style={{ margin: 0, color: 'var(--muted)', lineHeight: '1.6', fontSize: '14px', flex: 1 }}>{client.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}