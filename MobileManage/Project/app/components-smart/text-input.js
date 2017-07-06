import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class FormTextInput extends Component {
    render() {
        return (
             <TextInput
                editable={this.props.editable}
                style={this.props.style}
                placeholder={this.props.placeholder}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
                secureTextEntry={this.props.isPasswod}
            />
        );
    }
}

export default FormTextInput;