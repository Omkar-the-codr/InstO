import React, { useState } from "react";

function UsernameForm({ onSubmit }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username.trim());
      setUsername("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-6">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Instagram Username"
        className="border p-2 rounded-md w-72 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white py-2 px-6 rounded mt-4 hover:bg-indigo-600"
      >
        Analyze
      </button>
    </form>
  );
}

export default UsernameForm;
