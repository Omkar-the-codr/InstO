import React from "react";

function Results({ unfollowers }) {
  if (unfollowers.length === 0) return null;

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">Users Not Following You Back</h2>
      <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
        {unfollowers.map((username, idx) => (   
          <div key={idx} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
            <div className="flex items-center gap-4">
              <img
                src="https://via.placeholder.com/40"
                alt={username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{username}</p> 
                <p className="text-sm text-gray-500">Last active: 2h ago</p>
              </div>
            </div>
            <a
              href={`https://instagram.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-pink-500 text-pink-500 font-semibold px-4 py-2 rounded-full hover:bg-pink-50 text-sm"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Results;
