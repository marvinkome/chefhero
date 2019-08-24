import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'src/components';
import { colors } from 'src/config';
import { IncreaseItemMutation, DecreaseItemMutation, AddItemMutation } from './gql';
import { RestaurantQuery } from 'src/screens/restaurant/gql';

function useActions(meal) {
    const [increaseDish] = useMutation(IncreaseItemMutation);
    const [decreaseDish] = useMutation(DecreaseItemMutation);
    const [addToCart] = useMutation(AddItemMutation);

    return {
        increaseDish: () => increaseDish({ variables: { cartItemId: meal.cartItemId } }),
        decreaseDish: () =>
            decreaseDish({
                variables: { cartItemId: meal.cartItemId },
                ...(meal.quantityInCart <= 1 && {
                    refetchQueries: () => [
                        { query: RestaurantQuery, variables: { id: meal.restaurantId } }
                    ]
                })
            }),
        addToCart: () => addToCart({ variables: { foodId: meal.id } })
    };
}

export function Dish({ meal }) {
    const { increaseDish, decreaseDish, addToCart } = useActions(meal);

    return (
        <View style={style.dishContainer}>
            <View style={style.dishImageContainer}>
                <Image
                    source={require('src/assets/images/dish.jpg')}
                    resizeMode="center"
                    style={style.dishImage}
                />
            </View>

            <View style={style.dishDetailContainer}>
                <Text numberOfLines={1} style={style.dishName}>
                    {meal.name}
                </Text>
                <Text style={style.dishPrice}>₦{meal.price}</Text>
            </View>

            <View style={style.dishAction}>
                {meal.inCart ? (
                    <View style={style.counterBg}>
                        <TouchableOpacity onPress={decreaseDish} style={style.reduce}>
                            <Text style={style.counterActionText}>-</Text>
                        </TouchableOpacity>

                        <View style={style.quantity}>
                            <Text>{meal.quantityInCart}</Text>
                        </View>

                        <TouchableOpacity onPress={increaseDish} style={style.increase}>
                            <Text style={style.counterActionText}>+</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity onPress={addToCart} style={style.addButton}>
                        <Text style={style.addButtonText}>ADD</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    dishContainer: {
        marginTop: 23,
        borderRadius: 7,
        backgroundColor: colors.white,
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        shadowColor: 'hsl(0, 0%, 0%)',
        shadowOpacity: 0.07,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    dishImageContainer: {
        flex: 2,
        height: 60
    },
    dishImage: {
        width: '100%',
        height: '100%',
        borderRadius: 7
    },

    dishDetailContainer: {
        flex: 4,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    dishName: {
        color: colors.black,
        paddingRight: 5
    },
    dishRatings: {
        flexDirection: 'row',
        paddingTop: 5
    },
    dishPrice: {
        paddingTop: 10,
        fontWeight: '600'
    },
    perPlate: {
        fontWeight: 'normal'
    },

    dishAction: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    addButton: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 7
    },
    addButtonText: {
        color: colors.white
    },

    counterBg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    counterActionText: {
        color: colors.white
    },
    reduce: {
        backgroundColor: colors.primary,
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7
    },
    quantity: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.primary,
        borderWidth: 1
    },
    increase: {
        backgroundColor: colors.primary,
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7
    }
});
