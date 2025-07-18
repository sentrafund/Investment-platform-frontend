import axiosClient from "./axiosClient";

export const registerUser = async (payload, csrfToken = 1) => {
  try {
    const response = await axiosClient.post("/auth/registration/", payload);
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const loginUser = async (payload, csrfToken = 1) => {
  try {
    const response = await axiosClient.post("/auth/login/", payload);
    return response.data;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};
