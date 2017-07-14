import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

export default class FormTextInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.formView}>
                <TextInput
                    value={this.props.value}
                    autoCorrect={false}
                    keyboardType={this.props.keyboardType}
                    placeholderTextColor={this.props.color}
                    selectionColor={this.props.selectionColor}
                    style={{ color: this.props.color }}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secure}
                    underlineColorAndroid={this.props.color}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                    onChangeText={this.props.onChangeText} />
                <Text style={{ color: '#D50000' }}>
                    {(this.props.focused && this.props.blured || this.props.submitted) ? this.props.errorText : ''}
                </Text>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    formView: {
        width: '100%',
        height: 85
    }
})