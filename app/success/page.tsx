"use client";
import { useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const router = useRouter();
  const royalBlue = "#0561FF";

  return (
    <div style={{ padding: '20px', maxWidth: '450px', margin: '0 auto', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#f8faff' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px 20px', borderRadius: '28px', boxShadow: '0 10px 25px rgba(5, 97, 255, 0.05)' }}>
        <CheckCircle size={80} color={royalBlue} style={{ marginBottom: '20px' }} />
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>Request Sent!</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>Help is on the way. A professional has been notified.</p>
        <button onClick={() => router.push('/')} style={{ width: '100%', padding: '16px', backgroundColor: royalBlue, color: '#fff', borderRadius: '16px', border: 'none', fontWeight: 'bold' }}>Back to Home</button>
      </div>
    </div>
  );
}