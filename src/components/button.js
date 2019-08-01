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

    if (props.type === 'small') {
        containerStyle.push(style.container_small);
    }

    return (
        <TouchableOpacity style={containerStyle} onPress={props.onPress}>
            {props.children || (
                <View style={[style.innerContainer, props.innerContainerStyle]}>
                    <Text style={style.buttonText}>{props.title}</Text>

                    {props.loading && (
                        <React.Fragment>
                            <View style={{ width: 20 }} />
                            <ActivityIndicator size="small" color={colors.white} />
                        </React.Fragment>
                    )}
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
        height: 60,
        backgroundColor: colors.indigo,
        borderRadius: 50,
        marginVertical: 10,
        elevation: 10,
        shadowColor: colors.indigo,
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20
    },
    container_small: {
        height: 30,
        shadowColor: colors.indigo,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10
    },
    onContLoading: {
        elevation: 0,
        shadowOffset: { width: 0, height: 0 }
    },
    innerContainer: {
        flexDirection: 'row'
    },
    buttonText: {
        color: colors.white,
        fontWeight: '500',
        textAlign: 'center'
    }
});
