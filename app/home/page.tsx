"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../supabaseClient";

interface Workshop {
  name: string;
  rating: number;
  lat: number;
  lng: number;
}

export default function HomePage() {
  const router = useRouter();
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkshops = async () => {
      const { data, error } = await supabase
        .from('workshops')
        .select('name, rating, lat, lng');

      if (!error && data) {
        setWorkshops(data as Workshop[]);
      }
      setLoading(false);
    };
    fetchWorkshops();
  }, []);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8faff', minHeight: '100vh' }}>
      <h1 style={{ color: '#0561FF', fontWeight: 'bold' }}>Road Rescue</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '20px 0' }}>
        {['Towing', 'Battery', 'Tire', 'Fuel'].map((s) => (
          <div key={s} style={{ backgroundColor: '#0561FF', color: 'white', padding: '15px', borderRadius: '12px', textAlign: 'center' }}>{s}</div>
        ))}
      </div>
      <h2>Nearby Workshops</h2>
      {loading ? <p>Loading...</p> : (
        workshops.map((shop, i) => (
          <div key={i} style={{ background: '#fff', padding: '10px', marginBottom: '10px', borderRadius: '8px' }}>
            <strong>{shop.name}</strong>
            <div>⭐ {shop.rating}</div>
          </div>
        ))
      )}
    </div>
  );
}