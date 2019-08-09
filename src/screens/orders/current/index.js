import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, LinkButton, Icon, Text, LinkText } from 'src/components';
import { ScreenHeader } from 'src/components/layout';
import { screenConfig, colors } from 'src/config';

class CurrentOrders extends React.Component {
    renderEmpty = () => {
        return (
            <View style={style.emptyContainer}>
                <Icon
                    type="simple-line-icons"
                    name="calendar"
                    size={100}
                    color={colors.lightText}
                />
                <Text style={style.emptyText}>
                    You currently have no orders for this week. Click the button below to create
                    orders
                </Text>
                <View style={{ height: 100 }} />
            </View>
        );
    };

    renderDayCard = () => {
        return (
            <View style={style.cardContainer}>
                <Text style={style.cardTitle}>MONDAY ORDERS</Text>

                <View style={style.mealContainer}>
                    <Text style={style.mealTitle}>Jollof coselaw with chicken</Text>
                    <Text type="small" style={style.mealPlates}>
                        2 plates
                    </Text>
                </View>

                <View style={style.mealContainer}>
                    <Text style={style.mealTitle}>Jollof coselaw with chicken</Text>
                    <Text type="small" style={style.mealPlates}>
                        2 plates
                    </Text>
                </View>

                <View style={style.mealContainer}>
                    <Text style={style.mealTitle}>Jollof coselaw with chicken</Text>
                    <Text type="small" style={style.mealPlates}>
                        2 plates
                    </Text>
                </View>

                <View style={style.cardFooter}>
                    <LinkText style={style.editText}>EDIT</LinkText>
                    <Text style={style.price}>₦1,000</Text>
                </View>
            </View>
        );
    };

    renderEmptyCard = () => {
        return (
            <View style={style.cardContainer}>
                <Text style={style.cardTitle}>TUESDAY ORDERS</Text>
                <View style={style.emptyCard}>
                    <Icon
                        type="ant-design"
                        name="pluscircle"
                        size={30}
                        color={`${colors.lightGreen}56`}
                    />
                    <Text style={style.emptyCardText}>No Tuesday Orders. Click to Add</Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <Container>
                <ScreenHeader title="Current Orders" />
                <View style={style.mainContainer}>
                    {this.renderDayCard()}
                    {this.renderEmptyCard()}
                </View>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 15,
        marginVertical: 5
    },
    cardContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    cardTitle: {
        color: colors.lightGreen,
        fontWeight: '500',
        marginBottom: 10
    },

    mealContainer: {
        paddingVertical: 10
    },
    mealTitle: {
        fontWeight: '500'
    },
    mealPlates: {
        color: colors.indigo2
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 7,
        borderTopColor: colors.lightGrey,
        borderTopWidth: 1,
        marginTop: 7
    },
    editText: {},
    price: {
        color: colors.indigo2
    },

    emptyCard: {
        backgroundColor: `${colors.lightGrey}26`,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: colors.lightGrey,
        marginBottom: 15
    },
    emptyCardText: {
        color: `${colors.textColor}86`,
        paddingVertical: 10
    }
});

export default withNavigation(CurrentOrders);
