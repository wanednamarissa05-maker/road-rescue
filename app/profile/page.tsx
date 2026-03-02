"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, User, Mail, Phone, LogOut, Loader2 } from "lucide-react";
import { supabase } from "../supabaseClient";

export default function ProfilePage() {
  const router = useRouter();
  const royalBlue = "#0561FF";
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) return <div style={containerStyle}><Loader2 className="animate-spin" color={royalBlue} /></div>;

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <ChevronLeft size={24} onClick={() => router.back()} style={{ cursor: 'pointer' }} />
        <h1 style={{ fontSize: '18px', fontWeight: 'bold', color: '#000' }}>My Profile</h1>
        <div style={{ width: '24px' }}></div>
      </div>

      <div style={profileHeader}>
        <div style={avatarLarge}>{user?.email?.charAt(0).toUpperCase()}</div>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', margin: '10px 0', color: '#000' }}>
          {user?.user_metadata?.full_name || "User"}
        </h2>
        <p style={{ color: '#666', margin: 0 }}>{user?.email}</p>
      </div>

      <div style={infoList}>
        <div style={infoItem}><User size={20} color={royalBlue} /> <span style={{color: '#000'}}>{user?.user_metadata?.full_name}</span></div>
        <div style={infoItem}><Mail size={20} color={royalBlue} /> <span style={{color: '#000'}}>{user?.email}</span></div>
        <div style={infoItem}><Phone size={20} color={royalBlue} /> <span style={{color: '#000'}}>{user?.user_metadata?.phone || "No phone added"}</span></div>
      </div>

      <button onClick={handleLogout} style={logoutButtonStyle}>
        <LogOut size={20} /> Sign Out
      </button>
    </div>
  );
}

const containerStyle: React.CSSProperties = { padding: '20px', maxWidth: '450px', margin: '0 auto', minHeight: '100vh', backgroundColor: '#f8faff' };
const headerStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', color: '#000' };
const profileHeader: React.CSSProperties = { textAlign: 'center', marginBottom: '40px' };
const avatarLarge: React.CSSProperties = { width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#0561FF', color: '#fff', fontSize: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', fontWeight: 'bold' };
const infoList: React.CSSProperties = { backgroundColor: '#fff', borderRadius: '24px', padding: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '30px' };
const infoItem: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '15px', padding: '20px', borderBottom: '1px solid #f0f0f0' };
const logoutButtonStyle: React.CSSProperties = { width: '100%', padding: '18px', backgroundColor: '#FFF1F1', color: '#FF4D4D', borderRadius: '16px', border: 'none', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', cursor: 'pointer' };