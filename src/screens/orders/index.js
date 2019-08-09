import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Container, Text } from 'src/components';
import { ImageHeader } from 'src/components/layout';
import { Dish } from 'src/components/reusable';
import { colors } from 'src/config';

export default class Orders extends React.Component {
    render() {
        return (
            <Container>
                <ImageHeader
                    title="This Week Orders"
                    image={require('src/assets/images/orders.jpg')}
                />

                <ScrollView contentContainerStyle={style.container}>
                    <ScrollView horizontal contentContainerStyle={style.daysContainer}>
                        <Text style={[style.day, style.activeDay]}>Monday</Text>
                        <Text style={style.day}>Tueday</Text>
                        <Text style={style.day}>Wednesday</Text>
                        <Text style={style.day}>Thursday</Text>
                        <Text style={style.day}>Friday</Text>
                        <Text style={style.day}>Saturday</Text>
                        <Text style={style.day}>Sunday</Text>
                    </ScrollView>

                    <View style={style.dishContainer}>
                        <Dish />
                        <Dish />
                        <Dish />
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    daysContainer: {
        paddingVertical: 15,
        alignItems: 'center'
    },
    day: {
        paddingHorizontal: 7,
        color: colors.primary
    },
    activeDay: {
        backgroundColor: colors.primary,
        color: colors.white,
        paddingVertical: 3
    }
});
