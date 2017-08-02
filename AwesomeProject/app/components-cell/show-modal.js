import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Styles from './style/show-modal'
import Modal from 'react-native-modal'
import FormCustomButton from './../components-cell/form-custom-botton'

export default class BookModal extends Component {
  render() {
    return (
      <View>
        {this.props.OverTimeCount > 0 ?
          <Modal isVisible={this.props.isVisible}>
            <View style={Styles.modelContainer}>
              <View style={Styles.image}>
                
              </View>
              <Text>
                您有{this.props.OverTimeCount}本书逾期未归还， 需要去还书吗？
              </Text>
              <View style={Styles.operation}>
                <FormCustomButton
                  activeOpacity={.5}
                  text='稍后再说'
                  onPress={this.props.onClose}
                  styleView={Styles.closeButton}
                  styleText={Styles.ButtonText}
                />
                <FormCustomButton
                  activeOpacity={.5}
                  text='现在就去'
                  onPress={this.props.ToBookReturn}
                  styleView={Styles.linkButton}
                  styleText={Styles.ButtonText}
                />
              </View>
            </View>
          </Modal>
          :
          <Text></Text>
        }
      </View>

    );
  }
}
