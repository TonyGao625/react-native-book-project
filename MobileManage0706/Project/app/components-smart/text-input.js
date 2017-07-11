import React, { Component } from 'react';
import { TextInput, StyleSheet, ScrollView, Text } from 'react-native';

export default class FormTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            blured: false
        };
    }
    _focus = () => {
        this.setState({ focused: true });
    }
    _blur = () => {
        this.setState({ blured: true })
    }
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
                    //keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
                    placeholderTextColor={placeColor}
                    selectionColor={color}
                    style={{ color: color }}
                    placeholder={this.props.placeholder}
                    underlineColorAndroid={this.state.focused ? color : '#ccc'}
                    onBlur={this._blur}
                    onFocus={this._focus}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.props.isPasswod} />
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
