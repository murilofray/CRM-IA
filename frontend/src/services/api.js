import axios from "axios";
import { getBackendUrl } from "../config";

const api = axios.create({
	baseURL: `${getBackendUrl()}/api`,
	withCredentials: true,
});

export default api;
