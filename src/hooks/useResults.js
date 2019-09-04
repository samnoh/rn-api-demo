import { useState, useEffect } from 'react';

import yelp from '../api/yelp';

const useResults = () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        searchApi('');
    }, []);

    const searchApi = async searchTerm => {
        try {
            setRefreshing(true);
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Auckland'
                }
            });
            setErrorMessage('');
            setRefreshing(false);
            setResults(res.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    };

    return [searchApi, results, errorMessage, refreshing];
};

export default useResults;
