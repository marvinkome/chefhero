import React from 'react';
import { Text as RNText, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { withNavigation } from 'react-navigation';
import { colors, assets } from 'src/config';

/**
 * Custom Text component
 *
 * @param {TextProps} props
 */
export function Text(props) {
    return (
        <RNText {...props} style={[style[props.type || 'p'], props.style]}>
            {props.children}
        </RNText>
    );
}

export const LinkText = withNavigation((props) => {
    let onPress = null;
    if (props.href) {
        onPress = () => Linking.openURL(props.href);
    } else if (props.to) {
        onPress = () => props.navigation.navigate(props.to, props.options || {});
    }

    return (
        <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
            <Text {...props} style={[props.style, style.link]} />
        </TouchableOpacity>
    );
});

const style = StyleSheet.create({
    h1: {
        fontSize: 34.18,
        color: colors.textColor,
        fontFamily: assets.font
    },
    h2: {
        fontSize: 27.34,
        color: colors.textColor,
        fontFamily: assets.font
    },
    h3: {
        fontSize: 18,
        color: colors.textColor,
        fontFamily: assets.font
    },
    h4: {
        fontSize: 15,
        color: colors.textColor,
        fontFamily: assets.font
    },
    p: {
        fontSize: 14,
        color: colors.textColor,
        fontFamily: assets.font
    },
    small: {
        fontSize: 11.2,
        color: colors.textColor,
        fontFamily: assets.font
    },
    link: {
        color: colors.darkPurple
    }
});
