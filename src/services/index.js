import axiosInstance from "../axios/axios";


// AUTH SERVICES
export const loginService = (data) => axiosInstance.post('/login', data)
export const signupService = (data) => axiosInstance.post('/users/add', data, {baseURL: process.env.REACT_APP_BASE_URL})

//TODO SERVICES
export const getAllTodos = (config) => axiosInstance.get('/todos', config)
export const editTodo = (data, id) => axiosInstance.put('/todos/' + id, data)
export const deleteTodo = (id) => axiosInstance.delete('/todos/' + id)

