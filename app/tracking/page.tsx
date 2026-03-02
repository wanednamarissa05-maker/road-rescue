"use client"; //

import { useRouter } from "next/navigation"; //
import { AppHeader } from "../components/AppHeader";
import { Phone, MessageSquare, Navigation, User } from "lucide-react";

export default function TrackingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-black">
      <div className="max-w-md mx-auto bg-white min-h-screen w-full flex flex-col relative">
        <AppHeader title="Tracking Technician" />

        {/* Map Placeholder Area */}
        <div className="flex-1 bg-blue-50 relative overflow-hidden">
          {/* Mock Map Background */}
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-1/4 left-1/4 w-full h-1 bg-gray-300 rotate-45"></div>
             <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 -rotate-12"></div>
          </div>

          {/* Technician Marker */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-xl animate-bounce">
              <Navigation className="text-white fill-current rotate-45" size={20} />
            </div>
            <div className="mt-2 px-3 py-1 bg-white rounded-lg shadow-md text-xs font-bold">
              Technician Arriving
            </div>
          </div>
        </div>

        {/* Technician Info Card */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
                <User size={30} className="text-gray-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Ahmad Sulaiman</h3>
                <p className="text-gray-500 text-sm">Pro Mechanic • 4.9 ★</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition">
                <Phone size={20} />
              </button>
              <button className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition">
                <MessageSquare size={20} />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-2xl">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-500 text-sm">Vehicle</span>
              <span className="font-semibold text-sm">Toyota Hiace (WQB 4432)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm">Arrival Time</span>
              <span className="font-bold text-blue-600 text-sm">12 Mins</span>
            </div>
          </div>

          <button 
            onClick={() => router.push("/")}
            className="w-full py-4 text-gray-400 font-semibold hover:text-red-500 transition text-sm"
          >
            Cancel Request
          </button>
        </div>
      </div>
    </div>
  );
}