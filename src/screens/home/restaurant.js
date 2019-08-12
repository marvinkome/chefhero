import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text, Ratings } from 'src/components';
import { colors, screenConfig } from 'src/config';

function Restaurant(props) {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(screenConfig.main.restaurants)}
            style={style.restaurantContainer}
        >
            <View style={style.restaurantImageContainer}>
                <Image
                    source={require('src/assets/images/restaurant.jpg')}
                    resizeMode="center"
                    style={style.restaurantImage}
                />
            </View>

            <View style={style.restaurantDetailContainer}>
                <Text style={style.restaurantName}>{props.data.name}</Text>
                <Ratings ratings={props.data.averageRatings} />
                <Text style={style.restaurantPrice}>
                    N500 - N1500{' '}
                    <Text type="small" style={style.perPlate}>
                        Per Plate
                    </Text>
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    restaurantContainer: {
        marginTop: 23,
        borderRadius: 7,
        backgroundColor: colors.white,
        paddingVertical: 5,
        paddingHorizontal: 7,
        flexDirection: 'row',
        shadowColor: 'hsl(0, 0%, 0%)',
        shadowOpacity: 0.07,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    restaurantImageContainer: {
        flex: 2,
        height: 90
    },
    restaurantImage: {
        width: '100%',
        height: '100%',
        borderRadius: 7
    },
    restaurantDetailContainer: {
        flex: 4,
        paddingLeft: 10,
        paddingVertical: 5
    },
    restaurantName: {
        color: colors.black
    },
    restaurantRatings: {
        flexDirection: 'row',
        paddingTop: 5
    },
    restaurantPrice: {
        paddingTop: 15,
        fontWeight: '600'
    },
    perPlate: {
        fontWeight: 'normal'
    }
});

export default withNavigation(Restaurant);
