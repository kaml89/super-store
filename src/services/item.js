import axios from 'axios';

const baseUrl = 'https://gp-super-store-api.herokuapp.com/item/';

const get = async (parameters) => {
    const response = await axios.get(`${baseUrl}/list`, { params: parameters })
    return response.data;
};

const getById = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
};

const create = async () => {

};

export default { get, getById, create };