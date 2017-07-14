import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class FormDatePicker extends Component {
  render(){
    return (
      <DatePicker
        style={{width:'100%',marginBottom:20}}
        date={this.props.date}
        mode="date"
        customStyles={{
          dateInput: {
            borderTopWidth:0,
            borderLeftWidth:0,
            borderRightWidth:0,
            borderBottomColor:'#ddd',
            alignItems:'flex-start',
            paddingLeft:5
          }
        }}
        showIcon={this.props.showIcon}
        androidMode="spinner"
        placeholder={this.props.placeholder}
        format="YYYY-MM-DD"
        minDate="1970-05-01"
        maxDate="2017-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={this.props.onDateChange}
      />
    )
  }
}
