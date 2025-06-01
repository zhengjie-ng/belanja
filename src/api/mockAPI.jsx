import axios from "axios";
const BASE_URL = "https://68311d176205ab0d6c3b4456.mockapi.io";
const mockAPI = axios.create({ baseURL: BASE_URL });

export default mockAPI;
