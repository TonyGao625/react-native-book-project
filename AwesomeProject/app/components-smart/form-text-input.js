import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
//import { Hoshi } from 'react-native-textinput-effects';

export default class FormTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            blured: false
        };
    }
    render() {
        const color = this.props.white ? '#FAFAFA' : '#2196F3';
        const placeColor = this.props.white ? '#E0E0E0' : '#9E9E9E';
        return (
            <View style={[Styles.view, this.props.viewStyle]}>
                <TextInput
                    value={this.props.value}
                    autoCorrect={false}
                    keyboardType={'default'}
                    placeholderTextColor={placeColor}
                    selectionColor={color}
                    style={{ color: color }}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secure}
                    underlineColorAndroid={this.state.focused ? color : '#ccc'}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                    onChangeText={this.props.onChangeText} />
                <Text style={{ color: '#D50000' }}>
                    {(this.state.focused && this.state.blured || this.props.submitted)? this.props.errorText : ''}                
                </Text>
                {/*<Hoshi 
                label={this.props.placeholder} 
                borderColor={this.props.borderColor}/>
                <Text style={{ color: '#D50000' }}>
                    {(this.state.focused && this.state.blured || this.props.submitted)? this.props.errorText : ''}                
                </Text>*/}
            </View>
        );
    }
}
Styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 75
    }
})