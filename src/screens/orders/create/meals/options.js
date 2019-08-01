import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'src/components';
import { colors } from 'src/config';

export default class Meal extends React.Component {
    render() {
        const { meal } = this.props;
        return (
            <View style={style.mealContainer}>
                <View style={style.mealDetails}>
                    <Text style={style.mealName}>{meal.name}</Text>
                    {/* <Text style={style.mealPrice}>₦{meal.price}</Text> */}
                </View>
                <View style={style.mealActions}>
                    <TouchableOpacity>
                        <Icon
                            type="feather"
                            name="minus-circle"
                            size={20}
                            color={colors.darkPurple}
                        />
                    </TouchableOpacity>

                    <Text style={style.mealCount}>0</Text>

                    <TouchableOpacity>
                        <Icon
                            type="feather"
                            name="plus-circle"
                            size={20}
                            color={colors.darkPurple}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mealContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 5,
        elevation: 3,
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        paddingVertical: 5
    },
    mealDetails: {
        justifyContent: 'center',
        width: '75%'
    },
    mealName: {
        fontWeight: '500',
    },
    mealPrice: {
        color: colors.indigo2,
        paddingVertical: 5
    },
    mealActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '25%'
    },
    mealCount: {
        marginVertical: 15,
        textAlign: 'center',
        alignItems: 'center',
        color: colors.indigo2,
        borderRadius: 10
    }
});
