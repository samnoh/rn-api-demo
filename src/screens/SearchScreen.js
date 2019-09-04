import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const styles = StyleSheet.create({});

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'Auckland'
                }
            });
            setErrorMessage('');
            setResults(res.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong');
        }
    };

    return (
        <View>
            <SearchBar tearm={term} onTermChange={setTerm} onTermSubmit={searchApi} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>
                {term} {results.length}
            </Text>
        </View>
    );
};

export default SearchScreen;
