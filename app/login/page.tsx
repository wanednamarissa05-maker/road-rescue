"use client";
import React from "react";
import { supabase } from "../supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function LoginPage() {
  const royalBlue = "#0561FF";

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={logoArea}>
          <div style={logoIcon}>🚙</div>
          <h1 style={{ color: royalBlue, margin: '10px 0 5px 0', fontSize: '24px', fontWeight: 'bold' }}>
            Road Rescue
          </h1>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
            Professional Assistance, Anytime.
          </p>
        </div>
        
        {/* The className "auth-container" is what talks to your globals.css */}
        <div className="auth-container" style={authWrapper}>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: royalBlue,
                    brandAccent: '#004ecb',
                  },
                },
              },
            }}
            providers={['google']}
            socialLayout="horizontal"
          />
        </div>
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = { 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  minHeight: '100vh', 
  backgroundColor: '#f8faff', 
  padding: '20px' 
};

const cardStyle: React.CSSProperties = { 
  backgroundColor: '#fff', 
  padding: '40px', 
  borderRadius: '28px', 
  boxShadow: '0 10px 25px rgba(5, 97, 255, 0.1)', 
  width: '100%', 
  maxWidth: '400px', 
  textAlign: 'center' 
};

const logoArea: React.CSSProperties = { marginBottom: '10px' };

const logoIcon: React.CSSProperties = { 
  fontSize: '40px', 
  backgroundColor: '#EBF3FF', 
  width: '70px', 
  height: '70px', 
  borderRadius: '20px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  margin: '0 auto' 
};

const authWrapper: React.CSSProperties = {
  width: '100%',
  maxWidth: '320px',
  margin: '0 auto',
  overflow: 'hidden'
};