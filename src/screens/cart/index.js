import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Text } from 'src/components';
import { StackHeader } from 'src/components/layout';
import { Dish } from 'src/components/reusable';
import { colors } from 'src/config';

export default class Cart extends React.Component {
    render() {
        return (
            <Container>
                <StackHeader title="Cart" noCart />
                <ScrollView contentContainerStyle={style.container}>
                    <View style={style.dayOrder}>
                        <Text type="h3" style={style.dayTitle}>
                            Monday
                        </Text>

                        <View style={style.restaurantContainer}>
                            <Text style={style.restaurantName}>Restarant Name</Text>

                            <Dish />
                            <Dish />
                        </View>

                        <View style={style.restaurantContainer}>
                            <Text style={style.restaurantName}>Restarant Name</Text>

                            <Dish />
                        </View>
                    </View>

                    <View style={style.dayOrder}>
                        <Text type="h3" style={style.dayTitle}>
                            Tuesday
                        </Text>

                        <View style={style.restaurantContainer}>
                            <Text style={style.restaurantName}>Restarant Name</Text>

                            <Dish />
                            <Dish />
                        </View>

                        <View style={style.restaurantContainer}>
                            <Text style={style.restaurantName}>Restarant Name</Text>

                            <Dish />
                        </View>
                    </View>
                </ScrollView>

                <TouchableOpacity style={style.payment}>
                    <Text style={style.paymentText}>Make Order</Text>
                    <Text style={style.paymentPrice}>N6000</Text>
                </TouchableOpacity>
            </Container>
        );
    }
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
        paddingVertical: 10
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
