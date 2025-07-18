import axios from "axios";

// Read from env or fallback to local
// const BASE_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000/api";

const local_url = "http://127.0.0.1:8000/api";
const remote_url = "https://sentrafund.onrender.com/api";

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

// Optional: attach interceptors here if needed
// axiosClient.interceptors.response.use(...)

export default axiosClient;
