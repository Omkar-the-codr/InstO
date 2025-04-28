import React, { useState } from "react";
import UsernameForm from "./components/UsernameForm";
import ResultList from "./components/ResultList";

function App() {
  const [unfollowers, setUnfollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async (username) => {
    setLoading(true);
    setError("");
    setUnfollowers([]);

    try {
      const response = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setUnfollowers(data.unfollowers);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">
        Instagram Unfollowers Analyzer
      </h1>
      <UsernameForm onAnalyze={handleAnalyze} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {unfollowers.length > 0 && <ResultList unfollowers={unfollowers} />}
    </div>
  );
}

export default App;
