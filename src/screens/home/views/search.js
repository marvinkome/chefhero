import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { Text } from 'src/components';
import { Loading, ErrorScreen } from 'src/components/reusable';

import { SearchQuery } from '../gql';
import Restaurant from '../components/restaurant';

export default function SearchView(props) {
    const { loading, error, data } = useQuery(SearchQuery, {
        variables: { keyword: props.searchText }
    });

    return (
        <View style={style.container}>
            <Text style={style.searchText} type="h4">
                Search result for: {props.searchText}
            </Text>

            {loading && <Loading />}
            {error && <ErrorScreen error="Couldn't search for that keyword. Please try again" />}

            {!loading && !error && (
                <View style={style.sectionContainer}>
                    {!data.searchRestaurant.length && (
                        <View style={style.emptyContainer}>
                            <Text type="h3" style={style.emptyText}>
                                No results for "{props.searchText}"
                            </Text>
                        </View>
                    )}

                    {data.searchRestaurant.map((item) => (
                        <Restaurant data={item} key={item.id} />
                    ))}
                </View>
            )}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    searchText: {
        fontWeight: '500'
    },
    sectionContainer: {
        paddingVertical: 5
    },
    emptyContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        height: Dimensions.get('screen').height * 0.5
    },
    emptyText: {
        textAlign: 'center',
        fontWeight: '500'
    }
});
