"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, CreditCard, Landmark, Banknote, Check } from "lucide-react";

export default function PaymentPage() {
  const router = useRouter();
  const [method, setMethod] = useState('card');
  const royalBlue = "#0561FF";

  const methods = [
    { id: 'card', icon: <CreditCard size={20} />, label: 'Credit Card', sub: '**** **** 1234' },
    { id: 'bank', icon: <Landmark size={20} />, label: 'Online Banking', sub: 'FPX / Direct Transfer' },
    { id: 'cash', icon: <Banknote size={20} />, label: 'Cash', sub: 'Pay on arrival' },
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <ChevronLeft size={24} onClick={() => router.back()} style={{ cursor: 'pointer' }} />
        <h1 style={{ fontSize: '18px', fontWeight: 'bold', color: '#000' }}>Payment</h1>
        <div style={{ width: '24px' }}></div>
      </div>

      <div style={cardStyle}>
        <p style={{ fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>Select Payment Method</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {methods.map((m) => (
            <div 
              key={m.id} 
              onClick={() => setMethod(m.id)}
              style={{ 
                ...methodItem, 
                borderColor: method === m.id ? royalBlue : '#eee', 
                backgroundColor: method === m.id ? '#F0F6FF' : '#fff' 
              }}
            >
              <div style={{ color: method === m.id ? royalBlue : '#666' }}>{m.icon}</div>
              <div style={{ flex: 1, marginLeft: '12px' }}>
                <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px', color: '#000' }}>{m.label}</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{m.sub}</p>
              </div>
              {method === m.id && <Check size={18} color={royalBlue} />}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', color: '#666' }}>Total Amount</p>
          <h2 style={{ fontSize: '32px', fontWeight: '900', margin: '5px 0', color: '#000' }}>RM 83</h2>
          <button 
            onClick={() => router.push('/success')} 
            style={{ ...mainButtonStyle, backgroundColor: royalBlue, marginTop: '20px' }}
          >
            Pay RM 83
          </button>
        </div>
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = { padding: '20px', maxWidth: '450px', margin: '0 auto', minHeight: '100vh', backgroundColor: '#f8faff', display: 'flex', flexDirection: 'column' };
const headerStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' };
const cardStyle: React.CSSProperties = { backgroundColor: '#fff', padding: '24px', borderRadius: '28px', boxShadow: '0 10px 25px rgba(5, 97, 255, 0.05)' };
const methodItem: React.CSSProperties = { display: 'flex', alignItems: 'center', padding: '16px', borderRadius: '16px', border: '2px solid #eee', cursor: 'pointer', transition: '0.2s' };
const mainButtonStyle: React.CSSProperties = { width: '100%', padding: '18px', color: '#fff', borderRadius: '16px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' };