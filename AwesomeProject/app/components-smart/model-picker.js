import React, { Component } from 'react'
import ModalPicker from 'react-native-modal-picker'
import { TextInput,Text,View,ScrollView } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';

export default class FormModelPicker extends Component {
  constructor(props) {
        super(props);
        this.state = {
            focused: false,
            blured: false
        };
    }
  render() {
    return (
      // <ModalPicker style={{ width: '100%' }}
      //   data={this.props.data}
      //   initValue={this.props.initValue}
      //   onChange={(option) => { this.setState({ value: option.Name }) }}>
      //   <TextInput
      //     editable={false}
      //     placeholder={this.props.placeholder}
      //     value={this.state.value} />
      // </ModalPicker>
      <ScrollView keyboardShouldPersistTaps='always'>
        <ModalPicker style={{ width: '100%' ,flex:1, justifyContent:'flex-start'}}
        data={this.props.data}
        initValue={this.props.initValue}
        onChange={this.props.onChange}>
      </ModalPicker>

       <Text style={{ color: '#D50000' }}>
         {this.props.submitted? this.props.errorText : ''}  
        </Text>
      </ScrollView>
    )
  }
}