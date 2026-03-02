"use client"; // Required for interactivity

import { useRouter } from "next/navigation"; // Next.js specific router
import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";
import { User, Settings, CreditCard, Bell, LogOut, ChevronRight } from "lucide-react";

// This "export default" line is what fixes the error
export default function ProfilePage() {
  const router = useRouter();

  const menuItems = [
    { icon: User, label: "Edit Profile" },
    { icon: CreditCard, label: "Payment Methods" },
    { icon: Bell, label: "Notifications" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 text-black">
      <div className="max-w-md mx-auto bg-white min-h-screen w-full flex flex-col">
        <AppHeader title="My Profile" showBack={false} />

        {/* Profile Header */}
        <div className="p-8 flex flex-col items-center border-b border-gray-50">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600 border-4 border-white shadow-sm">
            <User size={48} />
          </div>
          <h2 className="text-xl font-bold">Zack Ariffin</h2>
          <p className="text-gray-500 text-sm">zack.ariffin@email.com</p>
        </div>

        {/* Menu Options */}
        <div className="p-4 flex-1">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition"
              >
                <div className="flex items-center gap-4 text-gray-700">
                  <item.icon size={20} />
                  <span className="font-semibold text-sm">{item.label}</span>
                </div>
                <ChevronRight size={18} className="text-gray-300" />
              </button>
            ))}
          </div>

          <button
            onClick={() => router.push("/login")}
            className="w-full flex items-center gap-4 p-4 mt-8 text-red-500 hover:bg-red-50 rounded-2xl transition"
          >
            <LogOut size={20} />
            <span className="font-bold text-sm">Log Out</span>
          </button>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}