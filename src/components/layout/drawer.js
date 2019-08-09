import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { screenConfig, colors } from 'src/config';
import { Text, Icon, Container } from 'src/components';
import { StackHeader } from './topbar';

export const DrawerContent = withNavigation((props) => {
    return (
        <Container>
            <StackHeader noCart title="Menu" />

            <View style={style.container}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate(screenConfig.main.orders)}
                >
                    <View style={style.itemContainer}>
                        <View style={style.iconContainer}>
                            <Icon
                                type="simple-line-icons"
                                color={colors.primary}
                                name="calendar"
                                size={25}
                            />
                        </View>
                        <View>
                            <Text style={style.item}>Orders</Text>
                            <Text style={style.itemDescription}>See your orders for the week</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={null}>
                    <View style={style.itemContainer}>
                        <View style={style.iconContainer}>
                            <Icon type="ant-design" color={colors.primary} name="user" size={25} />
                        </View>
                        <View>
                            <Text style={style.item}>Profile</Text>
                            <Text style={style.itemDescription}>
                                Update your personal information
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={null}>
                    <View style={style.itemContainer}>
                        <View style={style.iconContainer}>
                            <Icon
                                type="ant-design"
                                color={colors.primary}
                                name="logout"
                                size={25}
                            />
                        </View>
                        <View>
                            <Text style={style.item}>Logout</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </Container>
    );
});

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    itemContainer: {
        flexDirection: 'row',
        height: 80,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: colors.lightGrey,
        borderBottomWidth: 1,
        paddingHorizontal: 20
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
