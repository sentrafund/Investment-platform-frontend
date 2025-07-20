import axiosClient from "./axiosClient";

export const registerUser = async (payload) => {
  try {
    const response = await axiosClient.post("/auth/registration/", payload);
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const loginUser = async (payload) => {
  try {
    const response = await axiosClient.post("/auth/login/", payload);
    return response.data;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await axiosClient.get("/auth/user/");
    return response.data;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};

export const password_reset = async (payload) => {
  try {
    const response = await axiosClient.post("/auth/password/reset/", payload);
    return response.data;
  } catch (error) {
    if (error.response) return error.data;
    throw error;
  }
};

export const password_reset_confirm = async (payload) => {
  try {
    const response = await axiosClient.post(
      "/auth/password/reset/confirm/",
      payload
    );
    return response.data;
  } catch (error) {
    if (error.response) return error.data;
    throw error;
  }
};
