import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Container, Text } from 'src/components';
import { MainHeader } from 'src/components/layout';

import SearchForm from './components/searchForm';
import HomeView from './views/homePage';
import SearchView from './views/search';

// custom functionalities
function useHomeSearch() {
    const [searchText, updateSearchText] = useState('');
    const [isSearching, updateIsSearching] = useState(false);

    const onSubmitSearch = () => {
        updateIsSearching(true);
    };

    const onStopSearch = () => {
        updateIsSearching(false);
        updateSearchText('');
    };

    return {
        searchText,
        isSearching,
        updateSearchText,
        onSubmitSearch,
        onStopSearch
    };
}

export default function Home() {
    const searchData = useHomeSearch();

    return (
        <Container>
            <MainHeader title="Home" />

            <ScrollView contentContainerStyle={style.container}>
                {/* search */}
                <SearchForm
                    value={searchData.searchText}
                    onChange={(text) => searchData.updateSearchText(text)}
                    onSubmit={searchData.onSubmitSearch}
                    isSearching={searchData.isSearching}
                    stopSearching={searchData.onStopSearch}
                />

                {!searchData.isSearching ? (
                    <HomeView />
                ) : (
                    <SearchView searchText={searchData.searchText} />
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
    }
});
