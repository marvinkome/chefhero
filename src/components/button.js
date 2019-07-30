import React from 'react';
import { TouchableOpacity, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Text } from 'src/components';
import { colors } from 'src/config';
import { withNavigation } from 'react-navigation';

export function Button(props) {
    const containerStyle = [style.container, props.containerStyle];
    if (props.loading) {
        containerStyle.push(style.onContLoading);
    }

    return (
        <TouchableOpacity style={containerStyle} onPress={props.onPress}>
            {props.children || (
                <View style={[style.innerContainer, props.innerContainerStyle]}>
                    <Text type="h4" style={style.buttonText}>
                        {props.title}
                    </Text>
                    <View style={{ width: 20 }} />
                    {props.loading && <ActivityIndicator size="small" color={colors.white} />}
                </View>
            )}
        </TouchableOpacity>
    );
}

export const LinkButton = withNavigation((props) => {
    return <Button {...props} onPress={() => props.navigation.navigate(props.to)} />;
});

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        height: 60,
        backgroundColor: colors.indigo,
        borderRadius: 50,
        marginVertical: 10
    },
    onContLoading: {
        elevation: 0
    },
    innerContainer: {
        flexDirection: 'row'
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold'
    }
});
