import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { observer } from 'mobx-react';
import { Text, FormGroup, TextInput, SecureTextInput, LinkText, Button } from 'src/components';
import { colors } from 'src/config';
import { SignUpStore } from './store';

@observer
export default class SignUp extends React.Component {
    store = new SignUpStore();

    render() {
        return (
            <View style={style.container}>
                <LinearGradient colors={[colors.indigo2, colors.indigo]} style={style.form}>
                    <FormGroup>
                        {/*  fullname*/}
                        <TextInput
                            leftIconName="user"
                            onChangeText={(t) => this.store.onChange('firstname', t)}
                            placeholder="Name"
                        />

                        <View style={style.inputRow}>
                            <Text type="small" style={style.errorText}>
                                {this.store.errors.lastname}
                            </Text>
                        </View>
                    </FormGroup>

                    <FormGroup>
                        <TextInput
                            leftIconName="mail"
                            onChangeText={(t) => this.store.onChange('emailAddress', t)}
                            placeholder="Email"
                        />
                        <View style={style.inputRow}>
                            <Text style={style.errorText} type="small">
                                {this.store.errors.emailAddress}
                            </Text>
                        </View>
                    </FormGroup>

                    <FormGroup>
                        <SecureTextInput
                            leftIconName="lock"
                            onChangeText={(t) => this.store.onChange('password', t)}
                            placeholder="Password"
                        />

                        <View style={style.inputRow}>
                            <Text style={style.errorText} type="small">
                                {this.store.errors.password}
                            </Text>
                        </View>
                    </FormGroup>

                    <FormGroup>
                        <SecureTextInput
                            leftIconName="lock"
                            onChangeText={(t) => this.store.onChange('password', t)}
                            placeholder="Confirm Password"
                        />

                        <View style={style.inputRow}>
                            <Text style={style.errorText} type="small">
                                {this.store.errors.confirm_password}
                            </Text>
                        </View>
                    </FormGroup>
                </LinearGradient>

                <View style={style.terms}>
                    <Text type="small">By signing up you agree to our </Text>
                    <LinkText type="small" href="https://google.com">
                        terms and conditions
                    </LinkText>
                </View>

                <Button onPress={this.store.submit} title="Sign Up" />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        paddingBottom: 40
    },
    form: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 40,
        backgroundColor: colors.indigo,
        borderRadius: 7
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 5
    },
    errorText: {
        flex: 1,
        color: colors.yellow,
        fontWeight: 'bold'
    },
    terms: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'center'
    }
});
