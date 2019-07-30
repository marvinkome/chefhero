import React from 'react';
import { View, StyleSheet, TextInput as RNTextInput } from 'react-native';
// import TextInputMask from 'react-native-text-input-mask';
import RNCheckbox from 'react-native-modest-checkbox';
import { Text, Icon } from 'src/components';
import { colors, assets } from 'src/config';

export function FormGroup(props) {
    return <View {...props} style={[style.formGroup, props.style]} />;
}

/**
 * Custom Input component
 * @param {TextInputProps} props
 */
export function TextInput(props) {
    return (
        <View style={[style.textInputContainer, props.containerStyle]}>
            <View style={style.inputLeftIcon}>
                {props.renderleftIcon || (
                    <Icon type="feather" name={props.leftIconName} size={25} color={colors.white} />
                )}
            </View>
            <RNTextInput
                {...props}
                placeholderTextColor={`${colors.white}c`}
                style={[style.textInput, props.style]}
            />
            {props.renderRightIcon}
        </View>
    );
}

export function MaskTextInput(props) {
    return <TextInput {...props} style={[style.textInput, props.style]} />;
}

export class SecureTextInput extends React.Component {
    state = {
        hideInput: true
    };

    toggleVisibility = () => this.setState({ hideInput: !this.state.hideInput });

    render() {
        return (
            <TextInput
                {...this.props}
                secureTextEntry={this.state.hideInput}
                renderRightIcon={
                    <View style={style.revealIconView}>
                        <Icon
                            type="feather"
                            name={this.state.hideInput ? 'eye' : 'eye-off'}
                            size={25}
                            onPress={this.toggleVisibility}
                            color={colors.white}
                        />
                    </View>
                }
            />
        );
    }
}

export function ErrorText(props) {
    return <Text {...props} style={[style.errorText, props.style]} type="small" />;
}

export function CheckBox(props) {
    return <RNCheckbox {...props} customLabel={(props) => <Text {...props} />} />;
}

const style = StyleSheet.create({
    formGroup: {
        marginTop: 15,
        flex: 1,
        justifyContent: 'space-between'
    },
    textInputContainer: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        marginHorizontal: 10
    },
    inputLeftIcon: {
        paddingHorizontal: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        flex: 1,
        height: 60,
        fontSize: 16,
        backgroundColor: 'transparent',
        fontFamily: assets.font,
        color: `${colors.white}c`,
    },
    secureTextInputView: {
        flexDirection: 'row',
        backgroundColor: colors.whitesmoke
    },
    secureTextInput: {
        flex: 1
    },
    revealIconView: {
        top: 20,
        right: 13,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        flex: 1,
        color: 'red'
    }
});
