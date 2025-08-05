"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(10);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-600">Counter: {count}</h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}
