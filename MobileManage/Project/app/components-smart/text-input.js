import React, { Component } from 'react';
import { TextInput, StyleSheet, ScrollView, Text } from 'react-native';

export default class FormTextInput extends Component {
    render() {
        const color = this.props.white ? '#FAFAFA' : '#2196F3';
        const placeColor = this.props.white ? '#E0E0E0' : '#9E9E9E';
        return (
            /*<TextInput
               editable={this.props.editable}
               style={this.props.style}
               placeholder={this.props.placeholder}
               onChangeText={this.props.onChangeText}
               value={this.props.value}
               secureTextEntry={this.props.isPasswod}
           />*/
            <ScrollView style={[Styles.view, this.props.viewStyle]} keyboardShouldPersistTaps='handled'>
                <TextInput
                    value={this.props.value}
                    autoCorrect={false}
                    keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
                    placeholderTextColor={placeColor}
                    selectionColor={color}
                    style={{ color: color }}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secure}
                    underlineColorAndroid={this.state.focused ? color : '#ccc'}
                    onBlur={this._blur}
                    onFocus={this._focus}
                    onChangeText={this.props.onChangeText} />
                <Text style={{ color: '#D50000' }}>
                    {(this.state.focused && this.state.blured || this.props.submitted) && !this.props.validated ? this.props.errorText : ''}
                </Text>
            </ScrollView>
        );
    }
}
Styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 75
    }
})
export default FormTextInput;
