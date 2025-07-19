import axios from "axios";

// Read from env or fallback to local
// const BASE_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

const local_url = "http://127.0.0.1:8000/api";
const remote_url = "http://54.90.254.228:8000/api";

const BASE_URL = remote_url;
const CSRF_TOKEN =
  "SCUtad4GLspfPzgjBsLe192kkfp39gvOyMRsuPviRLDzvweeTI1xmCFlNiV0bmN0";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-CSRFTOKEN": CSRF_TOKEN,
  },
  withCredentials: true, // for cookies or CSRF
});

// Add interceptor to inject token + CSRF
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken"); // or sessionStorage.getItem
  if (token) {
    config.headers["Authorization"] = `Token ${token}`; // or `Bearer ${token}` if JWT
  }

  // const csrfToken = Cookies.get("csrftoken");
  if (CSRF_TOKEN) {
    config.headers["X-CSRFTOKEN"] = CSRF_TOKEN;
  }

  return config;
});

// Optional: attach interceptors here if needed
// axiosClient.interceptors.response.use(...)

export default axiosClient;
