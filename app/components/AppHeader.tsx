"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function AppHeader({ title = "RoadRescue", showBack = true }) {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
      <div className="flex items-center gap-3">
        {showBack && (
          <button onClick={() => router.back()} className="p-1 hover:bg-gray-100 rounded-full text-black">
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        <h1 className="text-xl font-bold text-blue-600">{title}</h1>
      </div>
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div> {/* Profile Placeholder */}
    </div>
  );
}