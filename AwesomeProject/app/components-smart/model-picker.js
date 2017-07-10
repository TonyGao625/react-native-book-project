import React, { Component } from 'react'
import ModalPicker from 'react-native-modal-picker'
import { TextInput } from 'react-native';

export default class FormModelPicker extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <ModalPicker style={{ width: '100%' }}
        data={this.props.data}
        initValue={this.props.initValue}
        onChange={(option) => { this.setState({ value: option.Name }) }}>
        <TextInput
          editable={false}
          placeholder={this.props.placeholder}
          value={this.state.value} />
      </ModalPicker>
    )
  }
}