"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../supabaseClient";
import { ChevronLeft, Clock, MapPin, CheckCircle2 } from "lucide-react";

export default function HistoryPage() {
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const royalBlue = "#0561FF";

  useEffect(() => {
    async function fetchHistory() {
      const { data, error } = await supabase
        .from('requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching history:", error.message);
      } else {
        setRequests(data || []);
      }
      setLoading(false);
    }
    fetchHistory();
  }, []);

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <ChevronLeft size={24} onClick={() => router.push('/')} style={{ cursor: 'pointer' }} />
        <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>Activity History</h1>
        <div style={{ width: '24px' }}></div>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '50px' }}>Loading history...</p>
      ) : requests.length === 0 ? (
        <div style={emptyStateStyle}>
          <Clock size={48} color="#cbd5e1" />
          <p>No recent requests found.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {requests.map((req) => (
            <div key={req.id} style={historyCardStyle}>
              <div style={cardHeaderStyle}>
                <span style={serviceTagStyle}>{req.service_type}</span>
                <span style={statusTagStyle}>
                  <CheckCircle2 size={14} /> {req.status}
                </span>
              </div>
              <div style={cardBodyStyle}>
                <p style={locationTextStyle}><MapPin size={14} /> {req.location}</p>
                <p style={dateTextStyle}>{new Date(req.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Styling for History Page
const containerStyle = { padding: '20px', maxWidth: '450px', margin: '0 auto', minHeight: '100vh', backgroundColor: '#f8faff' };
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', color: '#000' };
const emptyStateStyle = { textAlign: 'center' as const, marginTop: '100px', color: '#64748b' };
const historyCardStyle = { backgroundColor: '#fff', padding: '16px', borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', border: '1px solid #f1f5f9' };
const cardHeaderStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' };
const serviceTagStyle = { fontWeight: '700', fontSize: '16px', color: '#1e293b' };
const statusTagStyle = { display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#10b981', backgroundColor: '#ecfdf5', padding: '4px 8px', borderRadius: '10px', fontWeight: 'bold' };
const cardBodyStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const locationTextStyle = { display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#64748b', margin: 0 };
const dateTextStyle = { fontSize: '12px', color: '#94a3b8', margin: 0 };