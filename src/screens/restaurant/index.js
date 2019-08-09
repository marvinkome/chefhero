import React from 'react';
import { ImageBackground, StyleSheet, View, ScrollView } from 'react-native';
import { Container, Text, Icon, Ratings } from 'src/components';
import { ImageHeader } from 'src/components/layout';
import { Dish } from 'src/components/reusable';
import { colors } from 'src/config';

export default class Restaurants extends React.Component {
    renderRestaurantCard() {
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
                        <Icon
                            name="ios-heart-empty"
                            type="ionicons"
                            size={30}
                            color={colors.primary}
                        />
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <ImageHeader image={require('src/assets/images/restaurant.jpg')} />

                    {this.renderRestaurantCard()}

                    <View style={style.menuContainer}>
                        <Text style={style.menuTitle} type="h4">
                            This Week's Menu
                        </Text>

                        <ScrollView horizontal contentContainerStyle={style.daysContainer}>
                            <Text style={[style.day, style.activeDay]}>Monday</Text>
                            <Text style={style.day}>Tueday</Text>
                            <Text style={style.day}>Wednesday</Text>
                            <Text style={style.day}>Thursday</Text>
                            <Text style={style.day}>Friday</Text>
                            <Text style={style.day}>Saturday</Text>
                            <Text style={style.day}>Sunday</Text>
                        </ScrollView>

                        <Dish />
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
    },

    menuContainer: {
        paddingHorizontal: 15,
        paddingBottom: 70
    },
    menuTitle: {
        fontWeight: '600'
    },

    daysContainer: {
        paddingVertical: 15,
        alignItems: 'center'
    },
    day: {
        paddingHorizontal: 7
    },
    activeDay: {
        backgroundColor: colors.primary,
        color: colors.white,
        paddingVertical: 3
    }
});
