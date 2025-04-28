// const axios = require("axios");

// const fetchFollowers = async (username) => {
//   const options = {
//     method: "GET",
//     url: "https://instagram-social-api.p.rapidapi.com/v1/followers",
//     params: {
//       username_or_id_or_url: username,
//       amount: 50,
//     },
//     headers: {
//       "x-rapidapi-key": process.env.RAPIDAPI_KEY,
//       "x-rapidapi-host": "instagram-social-api.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Axios error:",
//       error.response ? error.response.data : error.message
//     );
//   }

// };
