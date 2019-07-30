import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Text, Button, CookingIcon, Icon } from 'src/components';
import { StackHeader } from 'src/components/layout';
import { colors, screenConfig } from 'src/config';

const data = [
    {
        id: '1',
        name: 'Improvers Kitchen'
    },
    {
        id: '2',
        name: 'Neighbors Kitchen'
    },
    {
        id: '3',
        name: 'White House'
    }
];

export default class Restaurant extends React.Component {
    renderItem = ({ item }) => {
        const onPress = () => this.props.navigation.navigate(screenConfig.main.orders.selectMeals);
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={0.5}>
                <View style={style.itemContainer}>
                    <View style={style.iconContainer}>
                        <CookingIcon size={35} />
                    </View>

                    <View style={style.nameContainer}>
                        <Text style={style.name}>{item.name}</Text>
                    </View>

                    <Icon
                        type="simple-line-icons"
                        name="arrow-right"
                        size={15}
                        style={style.icon}
                    />
                </View>
            </TouchableOpacity>
        );
    }

    renderEmpty = () => {
        return (
            <View style={style.emptyContainer}>
                <CookingIcon size={100} />
                <Text style={style.emptyText}>
                    You currently {'haven\'t'} subscribed to any restaurants. Click the button below
                    to start searching.
                </Text>

                <View style={{ width: '100%', paddingTop: 10 }}>
                    <Button title="Search for restaurants" />
                </View>
            </View>
        );
    }

    render() {
        return (
            <Container>
                <StackHeader title="Select Restaurant" />
                <FlatList
                    keyExtractor={(d) => d.id}
                    data={data}
                    contentContainerStyle={data.length ? undefined : { flex: 1 }}
                    renderItem={this.renderItem}
                    ListEmptyComponent={this.renderEmpty}
                />
            </Container>
        );
    }
}

const style = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 3,
        backgroundColor: colors.white,
        margin: 10,
        paddingVertical: 20,
        paddingHorizontal: 15,
        elevation: 5,
        shadowColor: colors.lightGrey,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 25
    },
    iconContainer: {
        width: '17%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nameContainer: {
        width: '75%'
    },
    name: {
        fontWeight: '500'
    },
    icon: {
        backgroundColor: colors.indigo,
        color: colors.white,
        padding: 7,
        borderRadius: 15
    },
    emptyContainer: {
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    emptyText: {
        marginTop: 20,
        textAlign: 'center',
        color: colors.grey
    }
});