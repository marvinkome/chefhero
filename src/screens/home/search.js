import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'src/components';
import { colors, assets } from 'src/config';

export default function Search() {
    return (
        <View style={style.searchContainer}>
            <Icon type="feather" name="search" size={17} color={colors.lightText} />
            <TextInput
                style={style.searchInput}
                placeholder="Search for restaurant"
                placeholderTextColor={colors.lightText}
            />
        </View>
    );
}

const style = StyleSheet.create({
    searchContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    searchInput: {
        flex: 1,
        height: 30,
        fontSize: 14,
        marginLeft: 10,
        backgroundColor: 'transparent',
        fontFamily: assets.font,
        color: `${colors.white}cc`
    }
});
