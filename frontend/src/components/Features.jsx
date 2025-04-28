import React from "react";

function Features() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-4">
          <div className="text-pink-500 text-4xl">📊</div>
          <h3 className="text-xl font-semibold">Real-time Analysis</h3>
          <p className="text-gray-600 text-sm">Get instant insights about your Instagram followers.</p>
        </div>
        <div className="space-y-4">
          <div className="text-pink-500 text-4xl">🔒</div>
          <h3 className="text-xl font-semibold">Secure & Private</h3>
          <p className="text-gray-600 text-sm">Your data is encrypted and never stored.</p>
        </div>
        <div className="space-y-4">
          <div className="text-pink-500 text-4xl">📈</div>
          <h3 className="text-xl font-semibold">Detailed Insights</h3>
          <p className="text-gray-600 text-sm">Comprehensive follower analytics and trends.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
