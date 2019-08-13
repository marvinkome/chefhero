import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { Text } from 'src/components';
import { Loading, ErrorScreen } from 'src/components/reusable';
import { colors } from 'src/config';

import { HomePageQuery } from '../gql';

import Restaurant from '../components/restaurant';

export default function HomePageView() {
    const { loading, error, data } = useQuery(HomePageQuery);
    const { favouriteRestaurants, recommendedRestaurants } = data;

    return (
        <React.Fragment>
            {loading && <Loading />}
            {error && (
                <ErrorScreen error="Error fetching your data. Please pull down to try again" />
            )}

            {!loading && !error && (
                <React.Fragment>
                    {/* favourite restaurants */}
                    <View style={style.sectionContainer}>
                        <Text type="h4" style={style.sectionTitle}>
                            Your Favourite Restaurant
                        </Text>

                        {favouriteRestaurants.map((item) => (
                            <Restaurant key={item.id} data={item} />
                        ))}
                    </View>

                    {/* recommended restaurants */}
                    <View style={style.sectionContainer}>
                        <Text type="h4" style={style.sectionTitle}>
                            Recommended Restaurant
                        </Text>

                        {recommendedRestaurants.map((item) => (
                            <Restaurant key={item} data={item} />
                        ))}
                    </View>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

const style = StyleSheet.create({
    sectionContainer: {
        marginVertical: 20
    },
    sectionTitle: {
        color: colors.primary,
        fontWeight: '600'
    }
});
