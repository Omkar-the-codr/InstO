import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-pink-500 font-bold mb-4">Insta Unfollow Tracker</h3>
          <p className="text-sm">The most trusted Instagram analytics tool.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Product</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#cookies">Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        © 2024 Insta Unfollow Tracker. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
