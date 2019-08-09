import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Icon } from 'src/components';
import { colors, assets } from 'src/config';

export const Header = (props) => {
    return (
        <View style={style.container}>
            {/* left logo */}
            <View style={style.leftLogo}>
                <Image source={assets.smallLogo} resizeMode="contain" style={style.logo} />
            </View>

            {/* right container */}
            <View style={style.rightContainer}>{props.right}</View>
        </View>
    );
};

export const __WithDrawerHeader = withNavigation((props) => {
    return (
        <Header
            right={
                <TouchableOpacity onPress={props.navigation.openDrawer}>
                    <Icon type="simple-line-icons" name="menu" size={25} style={style.screenIcon} />
                </TouchableOpacity>
            }
        />
    );
});

export const ScreenHeader = withNavigation((props) => {
    return (
        <React.Fragment>
            <__WithDrawerHeader />
            <View style={style.stackHeaderView}>
                <Text type="h3" style={[style.stackTitle, { width: '100%' }]}>
                    {props.title}
                </Text>
            </View>
        </React.Fragment>
    );
});

export const StackHeader = withNavigation((props) => {
    return (
        <React.Fragment>
            <__WithDrawerHeader />
            <View style={style.stackHeaderView}>
                <Icon
                    type="simple-line-icons"
                    name="arrow-left"
                    size={25}
                    onPress={() => props.navigation.goBack()}
                />
                <Text type="h3" style={style.stackTitle}>
                    {props.title}
                </Text>
            </View>
        </React.Fragment>
    );
});

export const DrawerHeader = withNavigation((props) => {
    return (
        <Header
            right={
                <TouchableOpacity style={style.drawerIcon} onPress={props.navigation.closeDrawer}>
                    <Icon type="evilicons" name="close" size={20} color={colors.white} />
                </TouchableOpacity>
            }
        />
    );
});

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 65,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey,
        backgroundColor: colors.white
    },
    leftLogo: {
        width: '40%',
        height: '100%',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    logo: {
        width: '100%'
    },

    rightContainer: {
        width: '60%',
        height: '100%',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    screenIcon: {
        color: colors.darkPurple
    },

    drawerIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: colors.indigo,
        justifyContent: 'center',
        alignItems: 'center'
    },

    stackHeaderView: {
        flexDirection: 'row',
        paddingVertical: 25,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    stackTitle: {
        width: '90%',
        textAlign: 'center',
        fontWeight: '500',
        color: colors.darkPurple
    }
});
