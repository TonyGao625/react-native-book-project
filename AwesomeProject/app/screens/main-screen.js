import { AsyncStorage} from 'react-native';
import { TabNavigator } from 'react-navigation'
import BookAll from './book-all';
import BookBorrow from './book-borrow';
import BookHistory from './borrow-history';
import BookCollection from './book-collection';
import BookReturn from './book-return';
import UserInfo from './user-info';
import SystemManage from './system-manage';

const MainScreen = TabNavigator({
  BookAll: {
    screen: BookAll,
  },
  BookBorrow: {
    screen: BookBorrow,
  },
  // BookHistory: {
  //   screen: BookHistory,
  // },
  BookReturn: {
    screen: BookReturn,
  },
  UserInfo: {
    screen: UserInfo,
  },
  // SystemManage:{
  //   screen: SystemManage
  // }
}, {
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontWeight: 'bold'
      },
      style: {
        backgroundColor: '#43A047',
      },
      showIcon: true
    },
    tabBarPosition: 'bottom'
  });

export default MainScreen;
