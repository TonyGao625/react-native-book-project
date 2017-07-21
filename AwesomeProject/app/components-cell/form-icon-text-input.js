import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import FormTextField from './form-text-input'
import Icon from 'react-native-vector-icons/Octicons';

export default class FormIconTextInput extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.formView}>
                <View style={styles.iconView}>
                    <Icon name={this.props.iconName} size={this.props.iconSize} color={this.props.color} />
                </View>
                <FormTextField
                    style={this.props.color}
                    value={this.props.value}
                    secure={this.props.secure}
                    placeholder={this.props.placeholder}
                    color={this.props.color}
                    keyboardType={this.props.keyboardType}
                    errorText={this.props.errorText}
                    submitted={this.props.submitted}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                    onChangeText={this.props.onChangeText} />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    formView: {
        flexDirection: "row",
        marginVertical: 10,
        height: 70,
    },
    iconView: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
    }
})