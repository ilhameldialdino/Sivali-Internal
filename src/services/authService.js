import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const register = async (companyData) => {
    return await axios.post(`${API_URL}/signup`, companyData);
};

export default {
    register,
};
