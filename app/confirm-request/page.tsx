"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { XCircle, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "../supabaseClient"; // This connects to your new file

export default function ConfirmPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleFinalize = async () => {
    setIsLoading(true);

    try {
      // 1. Save the request to your Supabase table
      const { error } = await supabase
        .from('requests')
        .insert([
          { 
            service_type: 'Towing', 
            location: 'Kuala Lumpur', 
            status: 'pending' 
          }
        ]);

      if (error) throw error;

      // 2. Wait a brief moment so the user sees the "Searching" animation
      setTimeout(() => {
        router.push('/success');
      }, 2000);

    } catch (error: any) {
      console.error("Error saving to Supabase:", error.message);
      alert("Database Error: Make sure your 'requests' table is created in Supabase!");
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#f9fafb' }}>
      
      {isLoading ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Loader2 className="animate-spin" size={48} color="#2563eb" style={{ marginBottom: '16px' }} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Connecting to Driver...</h1>
          <p style={{ color: '#666' }}>Saving your request to our secure database.</p>
        </div>
      ) : (
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Confirm Request</h1>
          <p style={{ color: '#666', marginBottom: '30px' }}>A professional will be dispatched to your location immediately.</p>
          
          <button 
            onClick={handleFinalize}
            style={{ 
              width: '100%', padding: '16px', backgroundColor: '#1f2937', color: 'white', 
              borderRadius: '12px', border: 'none', fontWeight: 'bold', fontSize: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px', cursor: 'pointer'
            }}
          >
            <CheckCircle size={20} />
            Finalize & Send Help
          </button>

          <button 
            onClick={() => router.push('/')}
            style={{ 
              width: '100%', padding: '16px', backgroundColor: 'transparent', color: '#ef4444', 
              borderRadius: '12px', border: '2px solid #ef4444', fontWeight: 'bold', fontSize: '18px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer'
            }}
          >
            <XCircle size={20} />
            Cancel Request
          </button>
        </div>
      )}
    </div>
  );
}