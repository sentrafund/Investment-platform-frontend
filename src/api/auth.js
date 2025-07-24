import { axiosClient, axiosPublic } from "./axiosClient";

export const registerUser = async (payload) => {
  try {
    const response = await axiosClient.post("/auth/registration/", payload);
    return response.data;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
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
    return response;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};

export const password_reset_confirm = async (payload) => {
  try {
    const response = await axiosPublic.post(
      "/auth/password/reset/confirm/",
      payload
    );
    return response;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};

export const make_deposit = async (payload) => {
  try {
    const response = await axiosClient.post(
      "/investment/transaction/",
      payload
    );
    return response;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};

export const get_all_transactions = async () => {
  try {
    const response = await axiosClient.get("/investment/transaction/");
    return response;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};

export const get_my_balance = async () => {
  try {
    const response = await axiosClient.get("/investment/wallet/0"); //there's only 1 wallet per user hence /0
    return response;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};

export const get_all_balance = async () => {
  try {
    const response = await axiosClient.get("/investment/wallet/");
    return response;
  } catch (error) {
    if (error.response) return error.response.data;
    throw error;
  }
};
