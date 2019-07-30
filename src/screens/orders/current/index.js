import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Container, LinkButton } from 'src/components';
import { ScreenHeader } from 'src/components/layout';
import { screenConfig, colors } from 'src/config';

class CurrentOrders extends React.Component {
    render() {
        return (
            <Container>
                <ScreenHeader />
                {/* {this.renderEmpty()} */}
                <View style={style.bottomContainer}>
                    <LinkButton
                        to={screenConfig.main.orders.createOrders}
                        title="Create New Orders"
                    />
                </View>
            </Container>
        );
    }
}

const style = StyleSheet.create({
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
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 40
    }
});

export default withNavigation(CurrentOrders);