import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { Text, FormGroup, TextInput, SecureTextInput, Button } from 'src/components';
import { colors } from 'src/config';
import { LoginStore } from './store';

@observer
export default class Login extends React.Component { 
    store = new LoginStore();

    render() {
        return (
            <View style={style.container}>
                <LinearGradient colors={[colors.indigo2, colors.indigo]} style={style.form}>
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
                </LinearGradient>

                <Button onPress={this.store.submit} title="Sign In" />
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
        paddingVertical: 10,
        backgroundColor: colors.indigo,
        borderRadius: 7,
        marginBottom: 30
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
        fontWeight: '500'
    },
    terms: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'center'
    }
});
