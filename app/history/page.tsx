"use client"; // Required for interactivity

import { AppHeader } from "../components/AppHeader";
import { BottomNav } from "../components/BottomNav";
import { Wrench, CircleDot, Battery, CheckCircle2 } from "lucide-react";

// This "export default" is the part that fixes your specific error
export default function HistoryPage() {
  const historyItems = [
    {
      id: 1,
      service: "Towing Service",
      date: "Feb 12, 2026",
      price: "RM 150.00",
      status: "Completed",
      icon: Wrench,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      service: "Battery Jumpstart",
      date: "Jan 28, 2026",
      price: "RM 80.00",
      status: "Completed",
      icon: Battery,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 text-black">
      <div className="max-w-md mx-auto bg-white min-h-screen w-full flex flex-col">
        <AppHeader title="Service History" showBack={false} />

        <div className="p-4 space-y-4 flex-1">
          {historyItems.map((item) => (
            <div key={item.id} className="p-4 border border-gray-100 rounded-2xl flex items-center justify-between bg-white">
              <div className="flex items-center gap-4">
                <div className={`${item.bgColor} ${item.color} p-3 rounded-xl`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold">{item.service}</h3>
                  <p className="text-gray-500 text-xs">{item.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm">{item.price}</p>
                <div className="flex items-center gap-1 text-green-600 justify-end">
                  <CheckCircle2 size={12} />
                  <span className="text-[10px] font-bold uppercase">Done</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BottomNav />
      </div>
    </div>
  );
}