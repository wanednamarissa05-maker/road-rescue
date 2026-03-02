"use client";
import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ShieldAlert, Loader2, MapPin, Phone, MessageSquare } from "lucide-react";

function TrackingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const service = searchParams.get('service') || 'Service';
  const royalBlue = "#0561FF";

  const [status, setStatus] = useState("Finding Provider...");
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus("Provider En Route");
      setIsFound(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <ChevronLeft size={24} onClick={() => router.back()} style={{ cursor: 'pointer' }} />
        <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>Live Tracking</h1>
        <div style={{ width: '24px' }}></div>
      </div>

      <div style={mapPlaceholder}>
        <div style={{ textAlign: 'center' }}>
          <MapPin size={32} color={royalBlue} className={!isFound ? "animate-bounce" : ""} />
          <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
            {isFound ? "Provider is 1.6km away" : "Searching for nearby help..."}
          </p>
        </div>
      </div>

      <div style={cardStyle}>
        <div style={summaryHeader}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{service} Details</h2>
          <span style={{ ...statusBadge, backgroundColor: isFound ? '#ecfdf5' : '#EBF3FF', color: isFound ? '#10b981' : royalBlue }}>
            {!isFound && <Loader2 size={12} className="animate-spin" style={{ marginRight: '4px' }} />}
            {status}
          </span>
        </div>

        {isFound && (
          <div style={providerInfo}>
            <div style={avatarSmall}>🚗</div>
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 'bold', margin: 0, color: '#000' }}>Speedy Auto (Ahmad)</p>
              <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>Toyota Hiace • ABC 1234</p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={iconButton}><Phone size={18} color={royalBlue} /></div>
              <div style={iconButton}><MessageSquare size={18} color={royalBlue} /></div>
            </div>
          </div>
        )}

        <div style={priceList}>
          <div style={priceRow}><span>Service Total</span><span style={{ fontWeight: 'bold' }}>RM 83.00</span></div>
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button 
            onClick={() => router.push(`/payment?service=${service}`)} 
            disabled={!isFound}
            style={{ ...mainButtonStyle, backgroundColor: isFound ? royalBlue : '#cbd5e1', flex: 2 }}
          >
            Confirm & Pay
          </button>
          <button style={sosButton}>
            <ShieldAlert size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

// STYLES - DO NOT REMOVE. This section fixes the "jumbled text" issue.
const containerStyle = { padding: '20px', maxWidth: '450px', margin: '0 auto', minHeight: '100vh', backgroundColor: '#f8faff', display: 'flex', flexDirection: 'column' as const };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', color: '#000' };
const mapPlaceholder = { width: '100%', height: '250px', backgroundColor: '#EDF2F7', borderRadius: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0' };
const cardStyle = { backgroundColor: '#fff', padding: '24px', borderRadius: '28px', boxShadow: '0 10px 25px rgba(5, 97, 255, 0.05)' };
const summaryHeader = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' };
const statusBadge = { display: 'flex', alignItems: 'center', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' };
const providerInfo = { display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', backgroundColor: '#f8faff', borderRadius: '16px', marginBottom: '20px' };
const avatarSmall = { width: '40px', height: '40px', backgroundColor: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', border: '1px solid #eee' };
const iconButton = { width: '36px', height: '36px', backgroundColor: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #eee', cursor: 'pointer' };
const priceList = { borderTop: '1px solid #f1f5f9', paddingTop: '15px' };
const priceRow = { display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#1e293b' };
const mainButtonStyle = { padding: '18px', color: '#fff', borderRadius: '16px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' };
const sosButton = { width: '60px', backgroundColor: '#FFF1F1', color: '#FF4D4D', borderRadius: '16px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };

export default function TrackingPage() {
  return <Suspense fallback={<div>Loading...</div>}><TrackingContent /></Suspense>;
}