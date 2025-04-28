const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config(); // to load environment variables

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Fetch followers using RapidAPI
// const fetchFollowers = async (username) => {
//   const options = {
//     method: "GET",
//     url: "https://instagram-social-api.p.rapidapi.com/v1/followers",
//     params: {
//       username_or_id_or_url: username,
//     //   amount: 152, // Limiting to 50 followers
//     },
//     headers: {
//       "x-rapidapi-key": process.env.RAPIDAPI_KEY,
//       "x-rapidapi-host": "instagram-social-api.p.rapidapi.com",
//     },
//   };
const fetchFollowers = async (username) => {
  const options = {
    method: "GET",
    url: `${process.env.RAPIDAPI_BASE_URL}${process.env.RAPIDAPI_FOLLOWER_ENDPOINT}`,
    params: {
      username_or_id_or_url: username,
      // amount: 50, // Optional limit
    },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; // Returning the data fetched
  } catch (error) {
    console.error(
      "Axios error:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to fetch followers");
  }
};

// Fetch following using RapidAPI
// const fetchFollowing = async (username) => {
//   const options = {
//     method: "GET",
//     url: "https://instagram-social-api.p.rapidapi.com/v1/following",
//     params: {
//       username_or_id_or_url: username,
//     //   amount: 146, // Limiting to 50 people the user follows
//     },
//     headers: {
//       "x-rapidapi-key": process.env.RAPIDAPI_KEY,
//       "x-rapidapi-host": "instagram-social-api.p.rapidapi.com",
//     },
//   };


const fetchFollowing = async (username) => {
  const options = {
    method: "GET",
    url: `${process.env.RAPIDAPI_BASE_URL}${process.env.RAPIDAPI_FOLLOWING_ENDPOINT}`,
    params: {
      username_or_id_or_url: username,
      // amount: 50,  // Optional limit
    },
    headers: {
      "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    },
};


  try {
    const response = await axios.request(options);
    return response.data; // Returning the data fetched
  } catch (error) {
    console.error(
      "Axios error:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to fetch following");
  }
};

// Analyze endpoint to compare followers and following
app.post("/api/analyze", async (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: "Username is required" });
  }

  try {
    const followersData = await fetchFollowers(username);
    const followers = followersData?.data?.items || [];
    const followingData = await fetchFollowing(username);
    const following = followingData?.data?.items || [];

    const followersUsernames = followers.map((user) => user.username);
    const followingUsernames = following.map((user) => user.username);

    // Find users that the user follows but they don't follow back
    const unfollowers = followingUsernames.filter(
      (user) => !followersUsernames.includes(user)
    );
    return res.json([
      { followers: followersUsernames },
      { following: followingUsernames },
        { unfollowers: unfollowers },
    ]);
    // return res.json({ unfollowers });
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Failed to analyze Instagram account.",
        error: error.message,
      });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
