import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Borrow from './../compponents-template/book-borrow'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class BookBorrow extends Component {
  static navigationOptions = {
    tabBarLabel: '借阅',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="local-grocery-store"
        size={20}
        style={[{ tintColor: tintColor }]}
        color='white' />
    ),
    headerRight: (
       <Icon name="person" size={40} color='red' />
    )
  };
  render() {
    return (
      <ScrollView>
        <Borrow navigation={this.props.navigation} />
         <View style={styles.operation}>
         <FormButton style={styles.operateItem} 
         onPress={this._selectAll}
         title='全选'></FormButton>
         <FormButton style={styles.operateItem} 
         onPress={this._unSelectAll}
         title='撤销'></FormButton>
         <FormButton style={styles.operateItem} 
         title='确定'></FormButton>
       </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15
  },
  statusIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon: {
    marginRight: 10
  },
  operation:{
    flex: 1,
    flexDirection: 'row',
    margin:10
  },
  operateItem:{
    marginRight: 10
  }
});


