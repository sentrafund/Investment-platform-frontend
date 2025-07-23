import axios from "axios";
import Cookies from "js-cookie";

const remote_aws_url = "http://54.90.254.228:8000/api";
const remote_render_url = "https://sentrafund.onrender.com:443/api";
const local_url = "http://127.0.0.1:8000/api";

const BASE_URL = local_url;

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false, // prevent sending cookies or CSRF headers
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
