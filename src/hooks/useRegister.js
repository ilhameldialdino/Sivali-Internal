import { useState } from 'react';
import authService from '../services/authService';

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const register = async (companyData) => {
        setLoading(true);
        setError(null);
        try {
            await authService.register(companyData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { register, loading, error };
};

export default useRegister;
