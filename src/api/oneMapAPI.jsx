import axios from "axios";

const oneMapUrl = "https://www.onemap.gov.sg/api/public/";

function oneMapAPI(authToken) {
  return axios.create({
    baseURL: oneMapUrl,
    headers: {
      Authorization: authToken,
    },
  });
}

export default oneMapAPI;
