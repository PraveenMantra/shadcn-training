"use client";

import { useState } from "react";

type UserFormProps = {
  onSubmitData: (data: { name: string; email: string }) => void;
};

export default function UserForm({ onSubmitData }: UserFormProps) {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitData(formData);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">User Info</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
