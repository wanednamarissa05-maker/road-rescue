"use client";
import { useRouter } from "next/navigation";
import { Fuel, Disc, Truck, Zap, ChevronLeft, Bell } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const royalBlue = "#0561FF";

  const services = [
    { id: 'Towing', icon: <Truck size={24} />, label: 'Towing' },
    { id: 'Flat Tire', icon: <Disc size={24} />, label: 'Flat Tire' },
    { id: 'Battery', icon: <Zap size={24} />, label: 'Battery' },
    { id: 'Fuel', icon: <Fuel size={24} />, label: 'Fuel' },
  ];

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <ChevronLeft size={24} />
        <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>Road Rescue</h1>
        <Bell size={24} />
      </div>

      <div style={cardStyle}>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>Location: <span style={{color: '#000', fontWeight: '600'}}>📍 Kuala Lumpur</span></p>
        <div style={mapPlaceholder}>Map Preview</div>
        
        <p style={sectionTitle}>What service do you need?</p>
        
        <div style={gridStyle}>
          {services.map((s) => (
            <button key={s.id} onClick={() => router.push(`/confirm-request?service=${s.id}`)} style={serviceButtonStyle}>
              <div style={{...iconCircle, backgroundColor: '#EBF3FF', color: royalBlue}}>{s.icon}</div>
              <span style={{fontSize: '12px', fontWeight: '600'}}>{s.label}</span>
            </button>
          ))}
        </div>

        <button style={{...mainButtonStyle, backgroundColor: royalBlue}}>Request Assistance</button>
      </div>

      <div style={bottomNavStyle}>
        <span style={{color: royalBlue, fontWeight: 'bold'}}>🏠 Home</span>
        <span style={{color: '#9ca3af'}}>🕒 History</span>
        <span style={{color: '#9ca3af'}}>👤 Profile</span>
      </div>
    </div>
  );
}

// Global Styles for UI consistency
const containerStyle = { padding: '20px', maxWidth: '450px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' as const };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' };
const cardStyle = { backgroundColor: '#fff', borderRadius: '28px', padding: '24px', boxShadow: '0 10px 25px rgba(5, 97, 255, 0.05)', flex: 1 };
const mapPlaceholder = { width: '100%', height: '140px', backgroundColor: '#EDF2F7', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#A0AEC0', fontSize: '14px' };
const sectionTitle = { fontSize: '16px', fontWeight: 'bold', margin: '15px 0', textAlign: 'left' as const };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px', marginBottom: '30px' };
const serviceButtonStyle = { display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '8px', border: 'none', background: 'none', cursor: 'pointer' };
const iconCircle = { width: '54px', height: '54px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const mainButtonStyle = { width: '100%', padding: '18px', color: '#fff', borderRadius: '16px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' };
const bottomNavStyle = { display: 'flex', justifyContent: 'space-around', padding: '20px 0', borderTop: '1px solid #f0f0f0', marginTop: 'auto' };