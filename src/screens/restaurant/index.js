import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { groupBy } from 'lodash';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Container, Text, Tabs, TabItem } from 'src/components';
import { ImageHeader } from 'src/components/layout';
import { Dish, Loading, ErrorScreen } from 'src/components/reusable';

import { colors } from 'src/config';
import { RestaurantQuery } from './gql';

import RestuarantCard from './components/restaurantCard';

function renderBody(data) {
    const { activeMenu, ...resData } = data.restaurant;
    const meals = groupBy(activeMenu.foods, 'day');

    return (
        <React.Fragment>
            <RestuarantCard restaurantData={resData} />

            <View style={style.menuContainer}>
                <Text style={style.menuTitle} type="h4">
                    This Week's Menu
                </Text>

                <Tabs initialTab="monday">
                    <TabItem id="monday" title="Monday">
                        {meals.monday.map((meal) => (
                            <Dish meal={meal} key={meal.id} />
                        ))}
                    </TabItem>
                    <TabItem id="tuesday" title="Tuesday">
                        {meals.tuesday.map((meal) => (
                            <Dish meal={meal} key={meal.id} />
                        ))}
                    </TabItem>
                    <TabItem id="wednesday" title="Wednesday">
                        {meals.wednesday.map((meal) => (
                            <Dish meal={meal} key={meal.id} />
                        ))}
                    </TabItem>
                    <TabItem id="thursday" title="Thursday">
                        {meals.thursday.map((meal) => (
                            <Dish meal={meal} key={meal.id} />
                        ))}
                    </TabItem>
                    <TabItem id="friday" title="Friday">
                        {meals.friday.map((meal) => (
                            <Dish meal={meal} key={meal.id} />
                        ))}
                    </TabItem>
                    <TabItem id="saturday" title="Saturday">
                        {meals.saturday.map((meal) => (
                            <Dish meal={meal} key={meal.id} />
                        ))}
                    </TabItem>
                    <TabItem id="sunday" title="Sunday">
                        {meals.friday.map((meal) => (
                            <Dish meal={meal} key={meal.id} />
                        ))}
                    </TabItem>
                </Tabs>
            </View>
        </React.Fragment>
    );
}

export default function Restaurants(props) {
    const id = props.navigation.getParam('id', '5d29a6f0d539da4395b2c1f8');
    const { loading, error, data } = useQuery(RestaurantQuery, {
        variables: { id }
    });

    return (
        <Container>
            <ScrollView>
                <ImageHeader image={require('src/assets/images/restaurant.jpg')} />

                {loading && <Loading />}
                {error && (
                    <ErrorScreen error="Couldn't find restaurant. Please go back to home page" />
                )}

                {!loading && !error && renderBody(data)}
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
