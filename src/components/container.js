import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from 'src/config';

export function Container(props) {
    return (
        <SafeAreaView style={style.container}>
            <View style={style.innerContainer} {...props}>
                {props.children}
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryDark
    },
    innerContainer: {
        flex: 1,
        backgroundColor: colors.offWhite
    }
});
