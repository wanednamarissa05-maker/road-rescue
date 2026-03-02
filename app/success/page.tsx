"use client";
import React from 'react';
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: '#f0fdf4' 
    }}>
      <CheckCircle size={80} color="#22c55e" style={{ marginBottom: '20px' }} />
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#166534' }}>Request Sent!</h1>
      <p style={{ color: '#15803d', marginBottom: '30px', maxWidth: '300px' }}>
        Help is on the way. A professional has been notified of your request.
      </p>
      
      <button 
        onClick={() => router.push('/')}
        style={{ 
          padding: '12px 24px', 
          backgroundColor: '#166534', 
          color: 'white', 
          borderRadius: '8px', 
          border: 'none', 
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        Back to Home
      </button>
    </div>
  );
}