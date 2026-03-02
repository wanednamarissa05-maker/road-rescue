"use client"; //

import { useState } from "react";
import { useRouter } from "next/navigation"; // Changed from react-router
import { AppHeader } from "./components/AppHeader";
import { BottomNav } from "./components/BottomNav";
import { Wrench, CircleDot, Battery, MapPin, Calendar } from "lucide-react"; // Fixed missing imports

export default function HomePage() {
  const router = useRouter(); //
  const [selectedService, setSelectedService] = useState("flat-tire");
  const [location] = useState("Current Location");

  const services = [
    { id: "towing", icon: Wrench, label: "Towing" },
    { id: "flat-tire", icon: CircleDot, label: "Flat Tire" },
    { id: "battery", icon: Battery, label: "Battery" },
    { id: "flat-mem-battery", icon: Calendar, label: "Flat mem Battery" },
  ];

  const handleRequestAssistance = () => {
    router.push("/confirm-request"); //
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 text-black">
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        <AppHeader title="RoadRescue" showBack={false} />

        <div className="p-4 space-y-6">
          {/* Location Picker */}
          <div className="bg-gray-100 p-4 rounded-xl flex items-center gap-3">
            <MapPin className="text-blue-600" />
            <span className="font-medium">{location}</span>
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                  selectedService === service.id
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-gray-100 bg-white text-gray-400"
                }`}
              >
                <service.icon size={32} />
                <span className="text-sm font-semibold">{service.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleRequestAssistance}
            className="w-full py-4 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-900 transition mt-8"
          >
            Request Assistance
          </button>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}