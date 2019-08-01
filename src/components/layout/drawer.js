import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { screenConfig, colors } from 'src/config';
import { Text, Icon, Container } from 'src/components';
import { DrawerHeader } from './header';

export const DrawerContent = withNavigation((props) => {
    return (
        <Container>
            <DrawerHeader />

            <View style={style.container}>
                <TouchableOpacity
                    onPress={() =>
                        props.navigation.navigate(screenConfig.main.orders.currentOrders)
                    }
                >
                    <View style={style.itemContainer}>
                        <View style={style.iconContainer}>
                            <Icon 
                                type="simple-line-icons" 
                                color={colors.indigo} 
                                name="calendar" 
                                size={25} 
                            />
                        </View>
                        <View>
                            <Text style={style.item}>Orders</Text>
                            <Text style={style.itemDescription}>
                                See your orders for the week
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate(screenConfig.main.restaurants.myList)}
                >
                    <View style={style.itemContainer}>
                        <View style={style.iconContainer}>
                            <Icon 
                                type="material-community" 
                                color={colors.indigo} 
                                name="chef-hat" 
                                size={25} 
                            />
                        </View>
                        <View>
                            <Text style={style.item}>Restaurants</Text>
                            <Text style={style.itemDescription}>
                                Manage your subscribed restaurants
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </Container>
    );
});

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        paddingHorizontal: 20,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '15%'
    },
    item: {
        color: colors.black,
        fontWeight: '500'
    },
    itemDescription: {
        color: colors.lightText
    }
});
