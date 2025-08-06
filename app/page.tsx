"use client";

import { useState, useEffect } from "react";
import UserForm from "@/components/UserForm";

export default function Home() {
  const [userData, setUserData] = useState<{ name: string; email: string } | null>(null);
  const [timestamp, setTimestamp] = useState<string>("");

  useEffect(() => {
    if (userData) {
      const now = new Date().toLocaleTimeString();
      setTimestamp(now);
    }
  }, [userData]); // runs only when userData changes

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-10">
      <h1 className="text-4xl font-bold">Day 2: Forms & Events</h1>

      <UserForm onSubmitData={(data) => setUserData(data)} />

      {userData && (
        <div className="p-6 bg-green-8100 border border-green-400 rounded max-w-md w-full">
          <h3 className="text-lg font-semibold mb-2">User Data in Parent</h3>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p className="text-gray-500 text-sm">Submitted at: {timestamp}</p>
        </div>
      )}
    </main>
  );
}
