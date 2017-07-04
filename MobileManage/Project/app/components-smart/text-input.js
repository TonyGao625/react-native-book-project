import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class FormTextInput extends Component {
    render() {
        return (
             <TextInput
                placeholder={this.props.placeholder}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
                secureTextEntry={this.props.isPasswod}
            />
        );
    }
}

export default FormTextInput;