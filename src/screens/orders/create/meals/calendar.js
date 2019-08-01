import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'src/components';
import { colors } from 'src/config';

export default class Calendar extends React.Component {
    render() {
        const { dates } = this.props;

        return (
            <View style={style.calendarContainer}>
                <Text style={style.monthText} type="h4">
                    {'november'.toUpperCase()}
                </Text>
                <View style={style.calendarInnerContainer}>
                    {dates.map((date) => (
                        <TouchableOpacity key={date.id}>
                            <View style={style.dateContainer}>
                                <Text style={style.day}>{date.name.toUpperCase()}</Text>
                                <View style={date.isToday ? style.activeDay : []}>
                                    <Text
                                        style={date.isToday ? style.activeDayText : []}>
                                        {date.day}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    calendarContainer: {
        marginVertical: 5,
        marginHorizontal: 15,
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: colors.white
    },
    monthText: {
        fontWeight: '500',
        textAlign: 'center'
    },
    calendarInnerContainer: {
        paddingTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    dateContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    day: {
        color: colors.lightText,
        marginBottom: 15
    },
    activeDay: {
        backgroundColor: colors.lightBlue,
        width: 22,
        height: 22,
        borderRadius: 11,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    activeDayText: {
        color: colors.white
    }
});
