import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text } from 'src/components';
import { colors } from 'src/config';

export function Dish() {
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
                <Text style={style.dishName}>Dish Name</Text>
                <Text style={style.dishPrice}>N500</Text>
            </View>

            <View style={style.dishAction}>
                {/* <TouchableOpacity style={style.addButton}>
                    <Text style={style.addButtonText}>ADD</Text>
                </TouchableOpacity> */}
                <View style={style.counterBg}>
                    <TouchableOpacity style={style.reduce}>
                        <Text style={style.counterActionText}>-</Text>
                    </TouchableOpacity>

                    <View style={style.quantity}>
                        <Text>1</Text>
                    </View>

                    <TouchableOpacity style={style.increase}>
                        <Text style={style.counterActionText}>+</Text>
                    </TouchableOpacity>
                </View>
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
        color: colors.black
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
