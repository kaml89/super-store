import axios from "axios";

const authAxios = axios.create({
  baseURL: "https://store-api-k.herokuapp.com/auth",
});

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const code = error && error.response ? error.response.status : 0;
    if (code >= 400) {
      console.log("error code", code);
      console.log(error.response.data.message);
    }
    return Promise.reject(error);
  }
);

const signup = async (credentials) => {
  const response = await authAxios.post("/signup", credentials);
  return response.data;
};

const login = async (credentials) => {
  const response = await authAxios.post("/login", credentials);
  return response.data;
};

const authService = { signup, login };

export default authService;
