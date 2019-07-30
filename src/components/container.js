import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { colors } from 'src/config';

export function Container(props) {
    return (
        <SafeAreaView style={style.container}>
            <View style={{ flex: 1 }} {...props}>
                {props.children}
            </View>
        </SafeAreaView>
        
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whitesmoke
    }
});
