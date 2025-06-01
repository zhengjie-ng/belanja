import axios from "axios";
import TokenData from "./TokenData";
const GetTokenAPI = axios.create({ baseURL: TokenData.tokenUrl });

export default GetTokenAPI;
