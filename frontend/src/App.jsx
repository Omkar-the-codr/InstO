import React, { useState } from "react";
import Header from "./components/Header.jsx";
import UsernameForm from "./components/UsernameForm.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [unfollowers, setUnfollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async (username) => {
    setLoading(true);
    setError("");
    setFollowers([]);
    setFollowing([]);
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
      console.log("API Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to analyze.");
      }

      // ✅ Fix this part:
      setFollowers(data[0]?.followers || []);
      setFollowing(data[1]?.following || []);
      setUnfollowers(data[2]?.unfollowers || []);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <Header />
      <UsernameForm onSubmit={handleAnalyze}/>

      {loading && <p className="mt-8 text-gray-600">Loading...</p>}
      {error && <p className="mt-8 text-red-500">{error}</p>}

      {!loading &&
        !error &&
        (followers.length > 0 ||
          following.length > 0 ||
          unfollowers.length > 0) && (
          <Results
            followers={followers}
            following={following}
            unfollowers={unfollowers}
          />
        )}
    </div>
  );
}

export default App;
