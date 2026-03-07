"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

export default function HomePage() {
  const royalBlue = "#0561FF";
  const [selectedService, setSelectedService] = useState("Flat Tire");
  const [loading, setLoading] = useState(false);

  // List of services matching your design
  const services = [
    { id: 'towing', name: 'Towing', icon: '🛻' },
    { id: 'tire', name: 'Flat Tire', icon: '🎡' },
    { id: 'battery', name: 'Battery', icon: '🔋' },
    { id: 'fuel', name: 'Fuel', icon: '⛽' },
  ];

  const handleRequest = async () => {
    setLoading(true);
    // In the future, this will insert into your Supabase 'requests' table
    alert(`Requesting ${selectedService}...`);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/"; // Send back to login page
  };

  return (
    <div style={{ 
      maxWidth: '450px', 
      margin: '0 auto', 
      minHeight: '100vh', 
      backgroundColor: '#fff', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '20px',
      paddingBottom: '80px', // Space for nav bar
      position: 'relative'
    }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <button onClick={() => window.history.back()} style={{ border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer' }}>←</button>
        <h1 style={{ flex: 1, textAlign: 'center', fontSize: '20px', fontWeight: '600', margin: 0 }}>Confirm Details</h1>
        <button onClick={handleSignOut} style={{ border: 'none', background: 'none', fontSize: '14px', color: '#ff4d4d' }}>Logout</button>
      </div>

      {/* Location Input Area */}
      <div style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
        <span style={{ fontSize: '18px' }}>📍</span>
        <div style={{ fontSize: '14px', color: '#333' }}>
          <strong>Location:</strong> Current Location
        </div>
      </div>

      {/* Map View Placeholder */}
      <div style={{ 
        width: '100%', 
        height: '220px', 
        backgroundColor: '#e0e0e0', 
        borderRadius: '24px', 
        marginBottom: '20px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url("https://via.placeholder.com/600x400?text=Live+Map+View")',
        backgroundSize: 'cover'
      }}>
        <div style={{ position: 'absolute', color: royalBlue, fontSize: '40px' }}>📍</div>
      </div>

      {/* Service Selection Title */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>— What service do you need? —</p>
      </div>

      {/* Service Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '25px' }}>
        {services.map((service) => (
          <div 
            key={service.id}
            onClick={() => setSelectedService(service.name)}
            style={{
              padding: '15px 10px',
              borderRadius: '16px',
              border: selectedService === service.name ? `2px solid ${royalBlue}` : '1px solid #eee',
              backgroundColor: selectedService === service.name ? '#f0f6ff' : '#fff',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '5px' }}>{service.icon}</div>
            <div style={{ fontSize: '12px', fontWeight: '500', color: selectedService === service.name ? royalBlue : '#333' }}>{service.name}</div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <button 
        onClick={handleRequest}
        disabled={loading}
        style={{
          width: '100%',
          padding: '16px',
          backgroundColor: royalBlue,
          color: 'white',
          border: 'none',
          borderRadius: '32px',
          fontSize: '18px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(5, 97, 255, 0.3)'
        }}
      >
        {loading ? "Processing..." : "Request Assistance"}
      </button>

      {/* Bottom Navigation */}
      <div style={{ 
        position: 'fixed', 
        bottom: 0, 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '100%', 
        maxWidth: '450px', 
        backgroundColor: '#fff', 
        borderTop: '1px solid #eee',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '12px 0',
        zIndex: 10
      }}>
        <div style={{ textAlign: 'center', color: royalBlue }}>🏠<div style={{fontSize: '10px'}}>Home</div></div>
        <div style={{ textAlign: 'center', color: '#ccc' }}>🕒<div style={{fontSize: '10px'}}>History</div></div>
        <div style={{ textAlign: 'center', color: '#ccc' }}>👤<div style={{fontSize: '10px'}}>Profile</div></div>
      </div>
    </div>
  );
}