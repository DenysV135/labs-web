import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

export const fetchMeters = async (category = 'all') => {
    const params = {};
    if (category && category !== 'all') {
        params.category = category;
    }
    const response = await axios.get(`${API_URL}/meters`, { params });
    return response.data;
};

export const fetchMeterById = async (id) => {
    const response = await axios.get(`${API_URL}/meters/${id}`);
    return response.data;
};