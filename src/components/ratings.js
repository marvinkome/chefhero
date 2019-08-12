import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'src/components';
import { colors } from 'src/config';

export function Ratings(props) {
    return (
        <View style={style.restaurantRatings}>
            {[...Array(5).keys()].map((number) => (
                <Icon
                    key={number}
                    name={props.ratings > number ? 'ios-star' : 'ios-star-outline'}
                    type="ionicons"
                    size={15}
                    color={colors.primary}
                />
            ))}
        </View>
    );
}

const style = StyleSheet.create({
    restaurantRatings: {
        flexDirection: 'row',
        paddingTop: 5
    }
});
