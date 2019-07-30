import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { Container, Text } from 'src/components';
import { colors, assets } from 'src/config';

import Login from './login';
import Register from './register';

export default class AuthPage extends React.Component {
    state = {
        activeTab: this.props.navigation.getParam('activeTab', 'login')
    };

    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        });
    };

    renderTopBar() {
        const { activeTab } = this.state;

        return (
            <View style={style.topbarContainer}>
                <TouchableOpacity
                    onPress={() => this.changeTab('login')}
                    style={[
                        style.topbarItem,
                        ...(activeTab === 'login' ? [style.topbarItemActive] : [])
                    ]}
                >
                    <Text
                        style={[
                            style.topbarItemText,
                            ...(activeTab === 'login' ? [style.topbarItemTextActive] : [])
                        ]}
                    >
                            Sign In
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => this.changeTab('register')}
                    style={[
                        style.topbarItem,
                        ...(activeTab === 'register' ? [style.topbarItemActive] : [])
                    ]}
                >
                    <Text
                        style={[
                            style.topbarItemText,
                            ...(activeTab === 'register' ? [style.topbarItemTextActive] : [])
                        ]}
                    >
                            Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <Container>
                {this.renderTopBar()}

                <ScrollView>
                    <View style={style.logoArea}>
                        <Image style={style.logo} resizeMode="contain" source={assets.bigLogo} />
                    </View>

                    <View style={style.pageContainer}>
                        {this.state.activeTab === 'register' && <Register />}
                        {this.state.activeTab === 'login' && <Login />}
                    </View>
                </ScrollView>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    topbarContainer: {
        marginBottom: 20,
        marginTop: 30,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    topbarItem: {
        width: '50%',
        alignItems: 'center',
        borderBottomColor: `${colors.indigo}42`,
        borderBottomWidth: 1,
        paddingVertical: 15
    },
    topbarItemActive: {
        borderBottomColor: colors.indigo,
        borderBottomWidth: 3
    },
    topbarItemText: {
        color: `${colors.indigo}42`,
        fontWeight: '500'
    },
    topbarItemTextActive: {
        color: colors.indigo,
        fontWeight: '500'
    },

    pageContainer: {
        paddingHorizontal: 20,
        paddingBottom: 30
    },
    logoArea: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '60%',
        height: 150
    }
});