import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000'; // Flask 서버 URL

export const getTips = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/tips`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch tips:', error);
    return [];
  }
};

export const uploadTip = async (title, content) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tips`, { title, content });
    return response.data;
  } catch (error) {
    console.error('Failed to upload tip:', error);
  }
};
