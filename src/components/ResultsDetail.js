import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});

const ResultsDetail = ({ results }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: results.image_url }} />
            <Text style={styles.name}>{results.name}</Text>
            <Text>
                {results.rating} Starts, {results.review_count} Reviews
            </Text>
        </View>
    );
};

export default ResultsDetail;
