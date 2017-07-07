import { TabNavigator } from 'react-navigation'
import BookAll from './book-all';
import BookBorrow from './book-borrow';
import BookHistory from './borrow-history';
import BookCollection from './book-collection';
import BookAdd from './book-add';
import UserInfo from './../compponents-template/users-info';
import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import storage from 'store2';


// export default class Main extends Component {
//   componentWillMount() {
//     AsyncStorage.getItem('permission').then((value) => {
//       const { navigate } = this.props.navigation;
//       if(value==null){
//         alert(value);
//          // navigate('Account');
//       }

//       // const permission = JSON.parse(value);
//       // alert(permission.IsAuthened);
//       // if(!permission.IsAuthened){
//       //     navigate('Account');
//       // }
      
//     });
//   }
//   render() {
//     return (
//       <MenuBottom />
//     );
//   }
// }


    AsyncStorage.getItem('permission').then((value) => {
       alert(value);
      //const { navigate } = this.props.navigation;
      if(value==null){
        alert(value);
         // navigate('Account');
      }

      //const permission = JSON.parse(value);
      alert(permission.IsAuthened);
      if(!permission.IsAuthened){
          //navigate('Account');
      }
      
    });

 const MenuBottom = TabNavigator({
  BookAll: {
    screen: BookAll,
  },
  BookBorrow: {
    screen: BookBorrow,
  },
  BookHistory: {
    screen: BookHistory,
  },
  BookCollection: {
    screen: BookCollection,
  }
}, {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontWeight: 'bold'
      },
      style: {
        backgroundColor: '#43A047',
      },
    },
    tabBarPosition: 'bottom'
  });


export default MenuBottom
