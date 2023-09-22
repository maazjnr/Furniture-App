import { View, Text } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const useFetch = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get('http://localhost:3000/api/products/');
            setData(response.data);
            setIsLoading(false);

        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false);
        }

    }

    useEffect(() => {
        fetchData();
    });

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }


    return { data, isLoading, error, refetch };
}

export default useFetch;