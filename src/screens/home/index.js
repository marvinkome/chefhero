import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import { Container, Text } from 'src/components';
import { MainHeader } from 'src/components/layout';
import { Loading, ErrorScreen } from 'src/components/reusable';
import { colors } from 'src/config';

import Search from './search';
import Restaurant from './restaurant';

import { HomePageQuery } from './gql';

function renderFavouriteRestaurants(data) {
    return (
        <View style={style.sectionContainer}>
            <Text type="h4" style={style.sectionTitle}>
                Your Favourite Restaurant
            </Text>

            {data.map((item) => (
                <Restaurant key={item.id} data={item} />
            ))}
        </View>
    );
}

function renderRecommendedRestaurants(data) {
    return (
        <View style={style.sectionContainer}>
            <Text type="h4" style={style.sectionTitle}>
                Recommended Restaurant
            </Text>

            {data.map((item) => (
                <Restaurant key={item} data={item} />
            ))}
        </View>
    );
}

export default function Home() {
    const { loading, error, data } = useQuery(HomePageQuery);

    return (
        <Container>
            <MainHeader title="Home" />

            <ScrollView contentContainerStyle={style.container}>
                {/* search */}
                <Search />

                {loading && <Loading />}

                {error && <ErrorScreen error="Error fetching data" />}

                {!loading && !error && (
                    <React.Fragment>
                        {renderFavouriteRestaurants(data.favouriteRestaurants)}
                        {renderRecommendedRestaurants(data.recommendedRestaurants)}
                    </React.Fragment>
                )}
            </ScrollView>
        </Container>
    );
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 18,
        paddingHorizontal: 15,
        marginBottom: 40
    },
    sectionContainer: {
        marginVertical: 20
    },
    sectionTitle: {
        color: colors.primary,
        fontWeight: '600'
    }
});
