import React from "react";

function Results({ followers, following, unfollowers }) {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10">
      <div className="bg-white shadow-md rounded p-4 w-72">
        <h2 className="text-xl font-bold mb-2 text-indigo-600">Followers</h2>
        <ul className="list-disc list-inside text-gray-700">
          {followers.map((user, idx) => (
            <li key={idx}>{user}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded p-4 w-72">
        <h2 className="text-xl font-bold mb-2 text-indigo-600">Following</h2>
        <ul className="list-disc list-inside text-gray-700">
          {following.map((user, idx) => (
            <li key={idx}>{user}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow-md rounded p-4 w-72">
        <h2 className="text-xl font-bold mb-2 text-indigo-600">
          Not Following Back
        </h2>
        <ul className="list-disc list-inside text-red-500">
          {unfollowers.map((user, idx) => (
            <li key={idx}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Results;
