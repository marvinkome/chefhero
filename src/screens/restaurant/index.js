import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Container, Text, Tabs, TabItem } from 'src/components';
import { ImageHeader } from 'src/components/layout';
import { Dish } from 'src/components/reusable';
import { colors } from 'src/config';

import RestuarantCard from './components/restaurantCard';

export default function Restaurants() {
    return (
        <Container>
            <ScrollView>
                <ImageHeader image={require('src/assets/images/restaurant.jpg')} />

                <RestuarantCard />

                <View style={style.menuContainer}>
                    <Text style={style.menuTitle} type="h4">
                        This Week's Menu
                    </Text>

                    <Tabs initialTab="monday">
                        <TabItem id="monday" title="Monday">
                            <Dish />
                        </TabItem>
                        <TabItem id="tuesday" title="Tuesday">
                            <Dish />
                        </TabItem>
                        <TabItem id="wednesday" title="Wednesday">
                            <Dish />
                        </TabItem>
                        <TabItem id="thursday" title="Thursday">
                            <Dish />
                        </TabItem>
                        <TabItem id="friday" title="Friday">
                            <Dish />
                        </TabItem>
                        <TabItem id="saturday" title="Saturday">
                            <Dish />
                        </TabItem>
                        <TabItem id="sunday" title="Sunday">
                            <Dish />
                        </TabItem>
                    </Tabs>
                </View>
            </ScrollView>
        </Container>
    );
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
        paddingHorizontal: 7,
        color: colors.primary
    },
    activeDay: {
        backgroundColor: colors.primary,
        color: colors.white,
        paddingVertical: 3
    }
});
