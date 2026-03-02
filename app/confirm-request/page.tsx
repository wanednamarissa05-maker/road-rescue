"use client";
import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Star, ShieldAlert, Truck, Loader2, ChevronLeft } from "lucide-react";
import { supabase } from "../supabaseClient";

function ConfirmContent() {
  const service = useSearchParams().get('service') || 'Service';
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const royalBlue = "#0561FF";

  const handleFinalize = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.from('requests').insert([
        { service_type: service, location: 'Kuala Lumpur', status: 'pending' }
      ]);
      if (error) throw error;
      setTimeout(() => router.push('/tracking'), 1500);setTimeout(() => router.push('/tracking?service=' + service), 1500);
    } catch (err: any) {
      alert(err.message);
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <ChevronLeft size={24} onClick={() => router.back()} style={{cursor: 'pointer'}} />
        <h1 style={{fontSize: '18px', fontWeight: 'bold'}}>Confirm Request</h1>
        <div style={{width: '24px'}}></div>
      </div>
      
      <div style={cardStyle}>
        <p style={sectionTitle}>Nearby Providers</p>
        <div style={providerCard}>
          <div style={{...iconCircle, backgroundColor: '#EBF3FF', color: royalBlue, borderRadius: '12px'}}><Truck size={24} /></div>
          <div style={{flex: 1, textAlign: 'left', marginLeft: '12px'}}>
            <p style={{fontWeight: 'bold', margin: 0}}>Royal Blue Towing</p>
            <p style={{fontSize: '12px', color: '#666'}}>0.8 km • <Star size={10} fill="#FFD700" color="#FFD700" /> 4.9</p>
          </div>
        </div>

        <div style={{marginTop: '30px'}}>
           <button onClick={handleFinalize} style={{...mainButtonStyle, backgroundColor: royalBlue, marginBottom: '12px'}}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Confirm Assistance'}
          </button>
          <button style={{...mainButtonStyle, backgroundColor: '#FFF1F1', color: '#FF4D4D', border: 'none'}}><ShieldAlert size={18}/> SOS</button>
        </div>
      </div>
    </div>
  );
}

const containerStyle = { padding: '20px', maxWidth: '450px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' as const, backgroundColor: '#f8faff' };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' };
const cardStyle = { backgroundColor: '#fff', borderRadius: '28px', padding: '24px', boxShadow: '0 10px 25px rgba(5, 97, 255, 0.05)' };
const iconCircle = { width: '54px', height: '54px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const sectionTitle = { fontSize: '16px', fontWeight: 'bold', margin: '15px 0', textAlign: 'left' as const };
const mainButtonStyle = { width: '100%', padding: '18px', color: '#fff', borderRadius: '16px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' };
const providerCard = { display: 'flex', alignItems: 'center', padding: '16px', borderRadius: '16px', border: '1px solid #EDF2F7', backgroundColor: '#F8FAFF' };

export default function ConfirmPage() {
  return <Suspense fallback={<div>Loading...</div>}><ConfirmContent /></Suspense>;
}