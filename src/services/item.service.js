import axios from "axios";

//const baseUrl = 'https://gp-super-store-api.herokuapp.com/item/';
const baseUrl = "https://store-api-k.herokuapp.com/items";

const get = async (parameters) => {
  //   const response = await axios.get(`${baseUrl}/list`, { params: parameters });
  const response = await axios.get(`${baseUrl}`);
  console.log(response.data);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const create = async () => {};

const itemService = { get, getById, create };

export default itemService;
