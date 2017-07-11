import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import { Button, Text, View,TouchableHighlight } from 'react-native';
import Main from './main';
import Account from './account';
import BookAdd from './book-add';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormTextInput from '../components-smart/text-input'

export default class Route extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <RouteItem />
    );
  }
}

const mainNavigationOptions = ({ navigation }) => ({
  headerTitle: <View style={{
    flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom:-10
  }}>
                  <Icon 
                  style={{marginLeft:10, marginBottom:20}}
                  name="crop-free" 
                  size={25}
                  color='#43A047'/>
                  <FormTextInput 
                  placeholder='search'></FormTextInput>
  </View>,
  
   headerRight: <TouchableHighlight>
     <Icon 
                  style={{marginRight:10}}
                  name="dehaze" 
                  size={20}/>
     </TouchableHighlight>,
  //   <MainAdd navigation={navigation}/>,
  // headerStyle:{
  //   paddingRight:10
  // }
  headerLeft: null
});

const RouteItem = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: Main,
    navigationOptions: mainNavigationOptions
  },
  BookAdd: {
    screen: BookAdd
  }
}, {
    cardStyle: {
      backgroundColor: 'white'
    },
    initialRouteName: 'Main',
    //headerMode:'none'
  });


