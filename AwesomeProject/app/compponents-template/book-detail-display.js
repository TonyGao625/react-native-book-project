import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image,
    Dimensions,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux';
import FormButton from './../components-smart/button'
import FormTextField from './../components-smart/text-input'
import FormDatePicker from './../components-smart/date-picker'
import FormModelPicker from './../components-smart/model-picker'
import ModalPicker from 'react-native-modal-picker'
import { batchActions, enableBatching } from 'redux-batched-actions';

@connect((store) => {
    return {

    }
})

export default class BookDetailDisplays extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    componentWillMount() {

    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>{this.props.id}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});