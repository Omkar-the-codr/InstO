import React from "react";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How it Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div>
            <div className="text-pink-500 text-3xl mb-4">1️⃣</div>
            <h3 className="text-lg font-semibold">Enter Username</h3>
            <p className="text-gray-600 text-sm mt-2">Simply input your Instagram username.</p>
          </div>
          <div>
            <div className="text-pink-500 text-3xl mb-4">2️⃣</div>
            <h3 className="text-lg font-semibold">Quick Analysis</h3>
            <p className="text-gray-600 text-sm mt-2">We analyze your follower data.</p>
          </div>
          <div>
            <div className="text-pink-500 text-3xl mb-4">3️⃣</div>
            <h3 className="text-lg font-semibold">Get Results</h3>
            <p className="text-gray-600 text-sm mt-2">View detailed follower insights instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
