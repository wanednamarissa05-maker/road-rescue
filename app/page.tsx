"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "./supabaseClient";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        // If user is logged in, stay on the home/dashboard
        router.push('/home'); // Or whatever your main dashboard file is named
      } else {
        // If no session, force them to Login
        router.push('/login');
      }
    };

    checkUser();
  }, [router]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8faff' }}>
      <div style={{ color: '#0561FF', fontWeight: 'bold' }}>Loading Road Rescue...</div>
    </div>
  );
}