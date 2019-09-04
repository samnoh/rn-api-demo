import { useState, useEffect } from 'react';

import yelp from '../api/yelp';

const useResults = () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        searchApi('');
    }, []);

    const searchApi = async searchTerm => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'Auckland'
                }
            });
            setErrorMessage('');
            setResults(res.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    };

    return [searchApi, results, errorMessage];
};

export default useResults;
