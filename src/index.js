import React from 'react';
import { View, StatusBar } from 'react-native';
import { colors } from './config';
import { RootNavigator } from './navigation';

export default class ChefHero extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
                <RootNavigator />
            </View>
        );
    }
}