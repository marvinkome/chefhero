import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Text } from 'src/components';
import { colors, screenConfig } from 'src/config';

export const __Header = withNavigation((props) => {
    return (
        <View style={[style.container, props.containerStyle]}>
            {/* left logo */}
            {props.left || (
                <TouchableOpacity onPress={props.navigation.openDrawer}>
                    <Icon type="simple-line-icons" name="menu" size={22} style={style.screenIcon} />
                </TouchableOpacity>
            )}

            {/* title */}
            <Text type="h3" style={style.title}>
                {props.title}
            </Text>

            {/* right logo */}
            {!props.noCart ? (
                <TouchableOpacity onPress={() => props.navigation.navigate(screenConfig.main.cart)}>
                    <Icon type="feather" name="shopping-cart" size={22} style={style.screenIcon} />
                </TouchableOpacity>
            ) : (
                <View />
            )}
        </View>
    );
});

export const MainHeader = (props) => {
    return <__Header {...props} />;
};

export const StackHeader = withNavigation((props) => {
    return (
        <__Header
            {...props}
            left={
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Icon
                        type="simple-line-icons"
                        name="arrow-left"
                        size={22}
                        style={style.screenIcon}
                    />
                </TouchableOpacity>
            }
        />
    );
});

export function ImageHeader(props) {
    return (
        <React.Fragment>
            <View style={style.headerBg}>
                <StackHeader {...props} title="" containerStyle={style.transparent} />
            </View>

            <ImageBackground source={props.image} style={style.image} resizeMode="center">
                <View style={style.imageOverlay}>
                    <Text type="h3" style={style.imageTitle}>
                        {props.title}
                    </Text>
                </View>
            </ImageBackground>
        </React.Fragment>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 65,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        backgroundColor: colors.primary
    },
    transparent: {
        backgroundColor: `${colors.primary}00`,
        borderBottomColor: `${colors.lightGrey}00`
    },
    title: {
        width: '70%',
        color: colors.white,
        fontWeight: '600'
    },
    screenIcon: {
        color: colors.white
    },

    headerBg: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    imageOverlay: {
        width: '100%',
        height: '100%',
        backgroundColor: `${colors.black}66`,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageTitle: {
        color: colors.white,
        fontWeight: '600'
    }
});
