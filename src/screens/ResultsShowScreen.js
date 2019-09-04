import React, { useState, useEffect } from 'react';
import { SafeAreaView, Image, FlatList, StatusBar, StyleSheet } from 'react-native';

import yelp from '../api/yelp';

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: 300
    },
    container: {
        backgroundColor: 'black',
        ...StyleSheet.absoluteFillObject
    }
});

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async id => {
        const res = await yelp.get(`/${id}`);
        setResult(res.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={result.photos}
                    keyExtractor={photo => photo}
                    renderItem={({ item }) => (
                        <Image resizeMode={'cover'} style={styles.image} source={{ uri: item }} />
                    )}
                />
            </SafeAreaView>
        </>
    );
};

ResultsShowScreen.navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('name'),
        headerStyle: {
            backgroundColor: '#282A3A',
            shadowColor: 'transparent',
            borderBottomWidth: 0
        },
        headerBackTitle: null,
        headerBackTitleStyle: {
            color: 'white'
        },
        headerTintColor: 'white'
    };
};

export default ResultsShowScreen;
