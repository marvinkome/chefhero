import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Container, Text } from 'src/components';
import { StackHeader } from 'src/components/layout';
import { colors } from 'src/config';

import Calendar from './calendar';
import MealOption from './options';
import Payment from './payment';

const dates = [
    {
        id: '1',
        name: 'mon',
        day: '8'
    },
    {
        id: '2',
        name: 'tue',
        day: '9',
        isToday: true
    },
    {
        id: '3',
        name: 'wed',
        day: '10'
    },
    {
        id: '4',
        name: 'thu',
        day: '11'
    },
    {
        id: '5',
        name: 'fri',
        day: '12'
    },
    {
        id: '6',
        name: 'sat',
        day: '13'
    },
    {
        id: '7',
        name: 'sun',
        day: '14'
    }
];

const meals = [
    {
        id: '1',
        name: 'Order Option 1',
        meals: [
            {
                id: '1',
                name: 'Jellof rice and coselaw with chicken',
                price: 1000
            },
            {
                id: '2',
                name: 'Jellof rice and coselaw with fish',
                price: 1000
            }
        ]
    },
    {
        id: '2',
        name: 'Option 2',
        meals: [
            {
                id: '1',
                name: 'Oha with fufu and chicken',
                price: 1000
            },
            {
                id: '2',
                name: 'Oha with fufu and fish',
                price: 1000
            },
            {
                id: '3',
                name: 'Oha with eba and chicken',
                price: 1000
            },
            {
                id: '4',
                name: 'Oha with eba and fish',
                price: 1000
            },
            {
                id: '5',
                name: 'Okra with fufu and chicken',
                price: 1000
            },
            {
                id: '6',
                name: 'Okra with fufu and fish',
                price: 1000
            },
            {
                id: '7',
                name: 'Okra with eba and chicken',
                price: 1000
            },
            {
                id: '8',
                name: 'Okra with eba and fish',
                price: 1000
            }
        ]
    },
    {
        id: '3',
        name: 'Option 3',
        meals: [
            {
                id: '1',
                name: 'Peppered chicken',
                price: 1000
            }
        ]
    }
];

export default class SelectMeals extends React.Component {
    render() {
        return (
            <Container>
                <StackHeader title="Select Meals" />

                <ScrollView contentContainerStyle={style.mainContainer}>
                    {/* options */}
                    {meals.map((mealOption) => (
                        <View style={style.optionContainer} key={mealOption.id}>
                            {/* header */}
                            <View style={style.optionHeader}>
                                <Text style={style.optionHeaderText}>{mealOption.name}</Text>
                            </View>

                            {mealOption.meals.map((meal) => (
                                <MealOption key={meal.id} meal={meal} />
                            ))}
                        </View>
                    ))}
                </ScrollView>

                <Payment />
            </Container>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: {
        paddingBottom: 100
    },
    optionContainer: {
        marginHorizontal: 15,
        marginVertical: 15,
        backgroundColor: colors.white,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    optionHeader: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.lightGrey
    },
    optionHeaderText: {
        fontWeight: '500',
        color: colors.darkPurple
    },
    mealTextContainer: {
        width: '75%'
    },
    mealActions: {
        width: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    mealCount: {
        marginHorizontal: 10
    }
});
