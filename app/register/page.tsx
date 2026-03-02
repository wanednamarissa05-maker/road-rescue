"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, User, Mail, Lock, Phone, Loader2 } from "lucide-react";
import { supabase } from "../supabaseClient";

export default function RegisterPage() {
  const router = useRouter();
  const royalBlue = "#0561FF";

  // State for inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !password) return alert("Please fill in email and password");
    setLoading(true);
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, phone: phone }
      }
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Registration successful! Please check your email for a confirmation link.");
      router.push('/login');
    }
    setLoading(false);
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <ChevronLeft size={24} onClick={() => router.back()} style={{ cursor: 'pointer' }} />
      </div>

      <div style={{ textAlign: 'left', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>Create Account</h1>
        <p style={{ color: '#666' }}>Join Road Rescue today</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={inputGroup}><User size={20} color="#94a3b8" /><input placeholder="Full Name" style={inputStyle} value={fullName} onChange={(e) => setFullName(e.target.value)} /></div>
        <div style={inputGroup}><Mail size={20} color="#94a3b8" /><input placeholder="Email" style={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        <div style={inputGroup}><Phone size={20} color="#94a3b8" /><input placeholder="+60 Phone Number" style={inputStyle} value={phone} onChange={(e) => setPhone(e.target.value)} /></div>
        <div style={inputGroup}><Lock size={20} color="#94a3b8" /><input type="password" placeholder="Password" style={inputStyle} value={password} onChange={(e) => setPassword(e.target.value)} /></div>

        <button onClick={handleSignUp} disabled={loading} style={{ ...mainButtonStyle, backgroundColor: royalBlue, opacity: loading ? 0.7 : 1 }}>
          {loading ? <Loader2 className="animate-spin" size={20} /> : "Sign Up"}
        </button>

        <p style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
          Already have an account? <span onClick={() => router.push('/login')} style={{ color: royalBlue, fontWeight: 'bold', cursor: 'pointer' }}>Log In</span>
        </p>
      </div>
    </div>
  );
}

const containerStyle = { padding: '40px 20px', maxWidth: '450px', margin: '0 auto', minHeight: '100vh', backgroundColor: '#f8faff' };
const headerStyle = { marginBottom: '30px', color: '#000' };
const inputGroup = { display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#fff', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0' };
const inputStyle = { border: 'none', outline: 'none', width: '100%', fontSize: '16px', color: '#000' };
const mainButtonStyle = { width: '100%', padding: '18px', color: '#fff', borderRadius: '16px', border: 'none', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px', display: 'flex', justifyContent: 'center' };