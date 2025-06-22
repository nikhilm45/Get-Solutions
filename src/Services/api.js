import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const getData = async () => {
  const response = await axios.get(`${API_BASE_URL}/home`);
  return response.data;
};

export const postData = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/api/data`, payload);
  return response.data;
};

