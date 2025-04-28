import React, { useState } from "react";
import Header from "./components/Header.jsx";
import UsernameForm from "./components/UsernameForm.jsx";
import Results from "./components/Results.jsx";
import Features from "./components/Features.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Footer from "./components/Footer.jsx";

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
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pink-100 via-purple-100 to-orange-100 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Discover Who Doesn't Follow You Back</h1>
          <p className="text-gray-600 mb-8">Get insights about your Instagram followers in seconds</p>
          <UsernameForm onSubmit={handleAnalyze} />
          <p className="text-xs text-gray-500 mt-4 flex justify-center items-center gap-2">
            <span>🔒</span> We don't store your data or passwords
          </p>
        </section>

        <section className="py-10 container mx-auto px-4">
          {loading && <p className="text-center text-gray-600 text-lg">Loading...</p>}
          {error && <p className="text-center text-red-500 text-lg">{error}</p>}

          {!loading && !error && (
            <Results followers={followers} following={following} unfollowers={unfollowers} />
          )}
        </section>

        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
