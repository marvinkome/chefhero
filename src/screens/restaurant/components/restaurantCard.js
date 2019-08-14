import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ratings, Text, Icon } from 'src/components';
import { colors } from 'src/config';

export default function RestaurantCard() {
    return (
        <View style={style.outerRestaurantCard}>
            <View style={style.restaurantCard}>
                <View style={style.restaurantDetail}>
                    <Text style={style.restaurantName} type="h3">
                        Restaurant Name
                    </Text>
                    <Ratings />
                </View>

                <View style={style.fav}>
                    <Icon name="ios-heart-empty" type="ionicons" size={30} color={colors.primary} />
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    outerRestaurantCard: {
        position: 'relative'
    },
    restaurantCard: {
        position: 'relative',
        top: -40,
        width: '85%',
        paddingHorizontal: 20,
        paddingVertical: 25,
        backgroundColor: colors.white,
        borderRadius: 7,
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        shadowColor: 'hsl(0, 0%, 0%)',
        shadowOpacity: 0.07,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    restaurantName: {
        fontWeight: '600'
    },
    fav: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});
