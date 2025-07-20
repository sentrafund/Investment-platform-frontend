import axios from "axios";
import Cookies from "js-cookie";

// remote_aws_url = "http://54.90.254.228:8000/api";
local_url = "http://127.0.0.1:8000/api";

const BASE_URL = local_url;
const BASE_URL = "https://sentrafund.onrender.com/api";
const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  const csrfToken = Cookies.get("csrftoken");
  if (csrfToken) {
    config.headers["X-CSRFTOKEN"] = csrfToken;
  }

  return config;
});

export default axiosClient;
