import axios from "axios";
import authHeader from "../utils/authHeader";

const itemAxios = axios.create({
  baseURL: "https://store-api-k.herokuapp.com/items",
});

itemAxios.interceptors.request.use((config) => {
  const token = authHeader();
  config.headers.Authorization = token;

  return config;
});

itemAxios.interceptors.response.use(
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
  const response = await itemAxios.get("/");
  return response.data;
};

const getById = async (id) => {
  const response = await itemAxios.get(`/${id}`);
  return response.data;
};

const create = async (newItem) => {
  const response = await itemAxios.post("/", newItem);
  return response;
};

const remove = async (id) => {
  const response = await itemAxios.delete(`/${id}`);
  return response;
};

const update = async (updatedItem) => {
  const response = await itemAxios.put(`/${updatedItem.id}`, updatedItem);
  return response;
};

const itemService = { get, getById, create, remove, update };

export default itemService;
