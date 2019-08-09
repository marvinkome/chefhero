import React from 'react';
import { View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Text } from 'src/components';
import { colors } from 'src/config';

export function MainHeader(props) {
    return (
        <View style={style.container}>
            {/* left logo */}
            <TouchableOpacity onPress={null}>
                <Icon type="simple-line-icons" name="menu" size={22} style={style.screenIcon} />
            </TouchableOpacity>

            {/* title */}
            <Text type="h3" style={style.title}>
                {props.title}
            </Text>

            {/* right logo */}
            <TouchableOpacity onPress={null}>
                <Icon type="feather" name="shopping-cart" size={22} style={style.screenIcon} />
            </TouchableOpacity>
        </View>
    );
}

export function StackHeader(props) {
    return (
        <View style={style.container}>
            {/* left logo */}
            <TouchableOpacity onPress={null}>
                <Icon
                    type="simple-line-icons"
                    name="arrow-left"
                    size={22}
                    style={style.screenIcon}
                />
            </TouchableOpacity>

            {/* title */}
            <Text type="h3" style={style.title}>
                {props.title}
            </Text>

            {/* right logo */}
            {!props.noCart ? (
                <TouchableOpacity onPress={null}>
                    <Icon type="feather" name="shopping-cart" size={22} style={style.screenIcon} />
                </TouchableOpacity>
            ) : (
                <View />
            )}
        </View>
    );
}

export function ImageHeader(props) {
    return (
        <React.Fragment>
            <View style={style.headerBg}>
                <View style={[style.container, style.transparent]}>
                    {/* left logo */}
                    <TouchableOpacity onPress={null}>
                        <Icon
                            type="simple-line-icons"
                            name="arrow-left"
                            size={22}
                            style={style.screenIcon}
                        />
                    </TouchableOpacity>

                    {/* title */}
                    <Text type="h4" style={style.title}>
                        {props.title}
                    </Text>

                    {/* right logo */}
                    <TouchableOpacity onPress={null}>
                        <Icon
                            type="feather"
                            name="shopping-cart"
                            size={22}
                            style={style.screenIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <ImageBackground source={props.image} style={style.image} resizeMode="center">
                <View style={style.imageOverlay} />
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
        backgroundColor: `${colors.black}66`
    }
});
