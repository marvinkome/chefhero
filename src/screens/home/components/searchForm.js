import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'src/components';
import { colors, assets } from 'src/config';

export default function Search(props) {
    return (
        <View style={style.searchContainer}>
            <Icon type="feather" name="search" size={17} color={colors.lightText} />

            <TextInput
                style={style.searchInput}
                placeholder="Search for restaurant"
                placeholderTextColor={colors.lightText}
                value={props.value}
                onChangeText={props.onChange}
                onSubmitEditing={props.onSubmit}
            />

            {props.isSearching && (
                <TouchableOpacity onPress={props.stopSearching}>
                    <Icon type="evilicon" name="close" size={17} color={colors.lightText} />
                </TouchableOpacity>
            )}
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
        color: colors.lightText
    }
});
