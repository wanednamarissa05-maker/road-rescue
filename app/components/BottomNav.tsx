"use client";
import { Home, History, User, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: History, label: "History", path: "/history" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-2 flex justify-around items-center">
      {navItems.map((item) => (
        <Link key={item.path} href={item.path} className={`flex flex-col items-center p-2 ${pathname === item.path ? 'text-blue-600' : 'text-gray-400'}`}>
          <item.icon className="w-6 h-6" />
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}