import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { groupBy } from 'lodash';

import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'src/components';
import { Dish } from 'src/components/reusable';
import { colors } from 'src/config';

export default function Main({ data: { cart } }) {
    const meals = groupBy(cart.items, (item) => item.food.day);

    return (
        <React.Fragment>
            <ScrollView contentContainerStyle={style.container}>
                {Object.keys(meals).map((key, id) => {
                    const item = meals[key];
                    return (
                        <View key={id} style={style.dayOrder}>
                            <Text type="h3" style={style.dayTitle}>
                                {key}
                            </Text>

                            <View style={style.restaurantContainer}>
                                {item.map((cartItem) => (
                                    <Dish key={cartItem.id} meal={cartItem.food} />
                                ))}
                            </View>
                        </View>
                    );
                })}
            </ScrollView>

            <TouchableOpacity style={style.payment}>
                <Text style={style.paymentText}>Make Order</Text>
                <Text style={style.paymentPrice}>₦{cart.totalAmount}</Text>
            </TouchableOpacity>
        </React.Fragment>
    );
}

const style = StyleSheet.create({
    container: {
        paddingBottom: 60
    },
    dayOrder: {
        paddingVertical: 18,
        paddingHorizontal: 15
    },
    dayTitle: {
        color: colors.primary,
        fontWeight: '500'
    },

    restaurantContainer: {
        paddingVertical: 5
    },
    restaurantName: {
        fontWeight: '500'
    },

    payment: {
        position: 'absolute',
        bottom: 0,
        marginVertical: 20,
        width: '80%',
        backgroundColor: colors.primaryDark,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 7,
        shadowColor: 'hsl(0, 0%, 0%)',
        shadowOpacity: 0.07,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    paymentText: {
        color: colors.white
    },
    paymentPrice: {
        color: colors.white,
        fontWeight: '600'
    }
});
