import React, { useState } from "react";

function UsernameForm({ onSubmit }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center max-w-md mx-auto">
      <input
        type="text"
        className="flex-1 py-3 px-4 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        placeholder="Enter your Instagram username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-6 py-3 rounded-r-full hover:opacity-90"
      >
        Analyze
      </button>
    </form>
  );
}

export default UsernameForm;
