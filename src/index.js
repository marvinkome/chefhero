import React from 'react';
import { View, StatusBar } from 'react-native';
import { colors } from './config';
import { RootNavigator } from './navigation';

export default class ChefHero extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={colors.primaryDark} barStyle="light-content" />
                <RootNavigator />
            </View>
        );
    }
}
