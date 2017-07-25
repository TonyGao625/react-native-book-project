import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default class FormCustomButton extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={this.props.activeOpacity} onPress={this.props.onPress} disabled={this.props.disabled} >
                <View style={[styles.button, this.props.styleView]}>
                    <Text style={this.props.styleText}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center"
    }
});