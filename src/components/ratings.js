import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'src/components';
import { colors } from 'src/config';

export function Ratings() {
    return (
        <View style={style.restaurantRatings}>
            <Icon name="ios-star" type="ionicons" size={15} color={colors.primary} />
            <Icon name="ios-star" type="ionicons" size={15} color={colors.primary} />
            <Icon name="ios-star" type="ionicons" size={15} color={colors.primary} />
            <Icon name="ios-star" type="ionicons" size={15} color={colors.primary} />
            <Icon name="ios-star-outline" type="ionicons" size={15} color={colors.primary} />
        </View>
    );
}

const style = StyleSheet.create({
    restaurantRatings: {
        flexDirection: 'row',
        paddingTop: 5
    }
});
