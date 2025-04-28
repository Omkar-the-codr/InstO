// const { fetchFollowers, fetchFollowing } = require("../utils/instagramAPI");

// const analyzeUser = async (req, res) => {
//   const { username } = req.body;

//   if (!username) {
//     return res.status(400).json({ message: "Username is required" });
//   }

//   try {
//     const followers = await fetchFollowers(username);
//     const following = await fetchFollowing(username);

//     const followersUsernames = followers.map((user) => user.username);
//     const followingUsernames = following.map((user) => user.username);

//     const unfollowers = followingUsernames.filter(
//       (user) => !followersUsernames.includes(user)
//     );

//     return res.json({ unfollowers });
//   } catch (error) {
//     console.error("Error analyzing user:", error.message);
//     return res
//       .status(500)
//       .json({ message: "Failed to analyze Instagram account." });
//   }
// };

// module.exports = { analyzeUser };
