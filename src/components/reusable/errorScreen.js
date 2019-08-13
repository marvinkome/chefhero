import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Icon } from 'src/components';
import { colors } from 'src/config';

export function ErrorScreen(props) {
    return (
        <View style={style.container}>
            <Icon name="frown" type="feather" size={40} color={colors.primary} />
            <Text style={style.errorText} type="h4">
                {props.error}
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('screen').height * 0.5
    },
    errorText: {
        color: colors.primary,
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    }
});
