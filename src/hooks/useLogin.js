import { useState } from 'react';
import authService from '../services/authService'; // Assuming authService handles API calls

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authService.login(credentials);
            // Handle the response as needed, e.g., storing tokens, redirecting, etc.
            return response.data;
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return { login, loading, error };
};

export default useLogin;
