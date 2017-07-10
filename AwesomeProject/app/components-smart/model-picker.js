import React, { Component } from 'react'
import ModalPicker from 'react-native-modal-picker'
import { TextInput } from 'react-native';

export default class FormModelPicker extends Component {
  render(){
    return (
      <ModalPicker style={{width:'100%'}}
        data={this.props.data}
        initValue={this.props.initValue}
        onChange={(option)=>{ this.setState({value:option.label})}}>       
          <TextInput
              editable={false}
              placeholder={this.props.placeholder}
              value={this.props.value} />
      </ModalPicker>
    )
  }
}