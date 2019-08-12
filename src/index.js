import React from 'react';
import { View, StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from 'src/lib/gql';
import { colors } from './config';
import { RootNavigator } from './navigation';

export default class ChefHero extends React.Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor={colors.primaryDark} barStyle="light-content" />
                    <RootNavigator />
                </View>
            </ApolloProvider>
        );
    }
}
