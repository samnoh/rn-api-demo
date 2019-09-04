import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

import ResultsDetail from './ResultsDetail';

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> {title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('ResultsShow', { id: item.id, name: item.name })
                        }
                    >
                        <ResultsDetail results={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default withNavigation(ResultsList);
