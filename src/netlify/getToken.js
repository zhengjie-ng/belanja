const axios = require("axios");

exports.handler = async (event) => {
  try {
    const { email, password } = JSON.parse(event.body);
    const response = await axios.post(
      "https://www.onemap.gov.sg/api/auth/post/getToken",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
