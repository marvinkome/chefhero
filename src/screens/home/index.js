import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Container, Text } from 'src/components';
import { MainHeader } from 'src/components/layout';
import { colors } from 'src/config';

import Search from './search';
import Restaurant from './restaurant';

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                <MainHeader title="Home" />

                <ScrollView contentContainerStyle={style.container}>
                    {/* search */}
                    <Search />

                    <View style={style.sectionContainer}>
                        <Text type="h4" style={style.sectionTitle}>
                            Your Favourite Restaurant
                        </Text>

                        <Restaurant />
                        <Restaurant />
                        <Restaurant />
                    </View>

                    <View style={style.sectionContainer}>
                        <Text type="h4" style={style.sectionTitle}>
                            Recommended Restaurant
                        </Text>

                        <Restaurant />
                        <Restaurant />
                        <Restaurant />
                    </View>
                </ScrollView>
            </Container>
        );
    }
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
