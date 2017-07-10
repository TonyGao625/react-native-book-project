import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class FormDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }

  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.props.date}
        mode="date"
        androidMode="spinner"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1970-05-01"
        maxDate="2017-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={this.props.onDateChange}
      />
    )
  }
}