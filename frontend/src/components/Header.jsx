import React, { useState } from "react";

function Header() {
  const [showPricing, setShowPricing] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">📸</span>
          <span className="text-2xl font-bold text-pink-600">Insta Unfollow Tracker</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 text-gray-600 font-medium">
          <button 
            onClick={() => scrollToSection("how-it-works")}
            className="hover:text-pink-600 focus:outline-none"
          >
            How it Works
          </button>
          <button 
            onClick={() => setShowPricing(true)}
            className="hover:text-pink-600 focus:outline-none"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection("contact")}
            className="hover:text-pink-600 focus:outline-none"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-96 max-w-full mx-4 animate-fadeIn">
            <button
              onClick={() => setShowPricing(false)}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-3xl font-extrabold text-center mb-6 text-pink-600">Pricing Plans</h2>
            <div className="space-y-6">
              <div className="p-5 border rounded-xl hover:shadow-md transition">
                <h3 className="text-xl font-semibold">Basic Plan</h3>
                <p className="text-sm text-gray-500 mt-1">Track up to 100 followers</p>
                <p className="text-pink-600 font-bold text-lg mt-3">$4.99/month</p>
              </div>
              <div className="p-5 border rounded-xl hover:shadow-md transition">
                <h3 className="text-xl font-semibold">Pro Plan</h3>
                <p className="text-sm text-gray-500 mt-1">Track up to 1000 followers</p>
                <p className="text-pink-600 font-bold text-lg mt-3">$9.99/month</p>
              </div>
              <div className="p-5 border rounded-xl hover:shadow-md transition">
                <h3 className="text-xl font-semibold">Business Plan</h3>
                <p className="text-sm text-gray-500 mt-1">Unlimited tracking + insights</p>
                <p className="text-pink-600 font-bold text-lg mt-3">$19.99/month</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
