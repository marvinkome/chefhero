import React from 'react';
import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { Text } from 'src/components';
import { colors } from 'src/config';

export function Loading(props) {
    return (
        <View style={style.container}>
            <ActivityIndicator size="large" />
            <Text style={style.text} type="h4">
                {props.loadingText || 'Fetching data. Please wait'}
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('screen').height * 0.5
    },
    text: {
        paddingTop: 10
    }
});
