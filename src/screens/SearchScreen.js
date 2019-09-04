import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 20
    }
});

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = price => results.filter(result => result.price === price);

    return (
        <>
            <SearchBar tearm={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            >
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
                <ResultsList results={filterResultsByPrice('$$$$')} title="Expensive" />
            </ScrollView>
        </>
    );
};

SearchScreen.navigationOptions = ({ navigation }) => {
    return {
        headerBackTitle: 'Back'
    };
};

export default SearchScreen;
