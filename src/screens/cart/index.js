import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { StyleSheet } from 'react-native';
import { Container } from 'src/components';
import { StackHeader } from 'src/components/layout';
import { Loading, ErrorScreen } from 'src/components/reusable';
import { colors } from 'src/config';

import { CartQuery } from './gql';
import MainView from './components/main';

export default function Cart() {
    const { loading, error, data } = useQuery(CartQuery);
    return (
        <Container>
            <StackHeader title="Cart" noCart />

            {loading && <Loading />}
            {error && <ErrorScreen error="Can't get your cart data. Please try again" />}

            {!loading && !error && <MainView data={data} />}
        </Container>
    );
}

const style = StyleSheet.create({
    container: {
        paddingBottom: 60
    },
    dayOrder: {
        paddingVertical: 18,
        paddingHorizontal: 15
    },
    dayTitle: {
        color: colors.primary,
        fontWeight: '500'
    },

    restaurantContainer: {
        paddingVertical: 5
    },
    restaurantName: {
        fontWeight: '500'
    },

    payment: {
        position: 'absolute',
        bottom: 0,
        marginVertical: 20,
        width: '80%',
        backgroundColor: colors.primaryDark,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 7,
        shadowColor: 'hsl(0, 0%, 0%)',
        shadowOpacity: 0.07,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 4
        }
    },
    paymentText: {
        color: colors.white
    },
    paymentPrice: {
        color: colors.white,
        fontWeight: '600'
    }
});
