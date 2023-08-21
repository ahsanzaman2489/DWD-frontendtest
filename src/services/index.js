import axiosInstance from "../axios/axios";

export const loginService = async (data) => axiosInstance.post('/login', data)
export const signupService = async (data) => axiosInstance.post('/users/add', data, {baseURL: process.env.REACT_APP_BASE_URL})