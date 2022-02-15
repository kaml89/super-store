import axios from "axios";
import authHeader from "../utils/authHeader";

const userAxios = axios.create({
  baseURL: "https://store-api-k.herokuapp.com/users",
});

userAxios.interceptors.request.use((config) => {
  const token = authHeader();
  config.headers.Authorization = token;

  return config;
});

userAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const code = error && error.response ? error.response.status : 0;
    if (code >= 400) {
      console.log("error code", code);
    }
    return Promise.reject(error);
  }
);

const get = async () => {
  const response = await userAxios.get("/");
  return response.data;
};

const userService = { get };

export default userService;
