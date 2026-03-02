"use client";
import React from "react";
import { supabase } from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function LoginPage() {
  const royalBlue = "#0561FF";

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f8faff' }}>
      <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '28px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>🚙</div>
          <h1 style={{ color: royalBlue, fontSize: '24px', fontWeight: 'bold', margin: '0' }}>Road Rescue</h1>
          <p style={{ color: '#666', fontSize: '14px' }}>Professional Assistance, Anytime.</p>
        </div>
        
        <div className="auth-container">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google']}
            socialLayout="horizontal"
          />
        </div>
      </div>
    </div>
  );
}