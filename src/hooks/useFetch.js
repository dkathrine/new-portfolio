import { useState, useEffect } from 'react';

/* dynamic fetch hook with randomizer logic for variable endpoints */
const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    /* fetch logic */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/${endpoint}.json`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                let data;
                try {
                    data = await response.json();
                } catch (error) {
                    console.error(error);
                    throw new Error('Invalid API Endpoint');
                }
                setData(data);

            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setIsLoading(false);
                /* log successful endpoint connection */
                console.log('endpoint fetched');
            }
        };
        fetchData();
    }, [endpoint]);
    return { data, isLoading, error };
};

export default useFetch;