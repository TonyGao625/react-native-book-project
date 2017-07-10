import { TabNavigator } from 'react-navigation'
import BookAll from './book-all';
import BookBorrow from './book-borrow';
import BookHistory from './borrow-history';
import BookCollection from './book-collection';
import UserInfo from './user-info';


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
  },
  UserInfo: {
    screen: UserInfo,
  }
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

export default MenuBottom;
