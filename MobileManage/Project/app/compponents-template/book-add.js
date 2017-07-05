import React, { Component } from 'react';
import { View, StyleSheet,Text } from 'react-native';
import FormButton from './../components-smart/button'

export default class BookAdd extends Component {

    _saveBook(){
        const { navigate } = this.props.navigation;
        navigate('Main')
    }
    render() {
        return (
            <View>
                <FormButton 
                title='Save'
                onPress={this._saveBook}/>

            </View>
        );
    }
}