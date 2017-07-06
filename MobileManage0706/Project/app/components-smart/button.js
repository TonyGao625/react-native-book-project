import React, { Component } from 'react';
import { Button } from 'react-native';

class FormButton extends Component {
    render() {
        return (
             <Button
                title={this.props.title}
                color={this.props.color}
                onPress={this.props.onPress}
                style={this.props.style}
                />
        );
    }
}

export default FormButton;