"use client"; // Required for interactivity

import { useRouter } from "next/navigation"; // Next.js router
import { AppHeader } from "../components/AppHeader";
import { MapPin, Clock, ShieldCheck, ChevronRight } from "lucide-react"; // Icons for details

export default function ConfirmRequestPage() {
  const router = useRouter();

  const handleConfirm = () => {
    // In a real app, this would send data to a database
    router.push("/tracking"); 
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-black">
      <div className="max-w-md mx-auto bg-white min-h-screen w-full flex flex-col">
        <AppHeader title="Confirm Request" showBack={true} />

        <div className="p-6 flex-1 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold">Request Details</h2>
            <p className="text-gray-500 text-sm">Please verify your information</p>
          </div>

          {/* Info Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                <p className="font-semibold text-sm">Jalan Bukit Bintang, KL</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="bg-green-100 p-3 rounded-full text-green-600">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Estimated Arrival</p>
                <p className="font-semibold text-sm">15 - 20 Minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">Service Type</p>
                <p className="font-semibold text-sm">Flat Tire Replacement</p>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="border-t border-dashed border-gray-200 pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Service Fee</span>
              <span className="font-semibold">RM 50.00</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total Price</span>
              <span className="text-blue-600">RM 50.00</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-6 bg-white border-t border-gray-100">
          <button
            onClick={handleConfirm}
            className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            Confirm & Pay
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}