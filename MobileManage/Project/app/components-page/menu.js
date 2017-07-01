import {TabNavigator} from 'react-navigation'
import BookAll from './book-all/book-all';
import BookBorrow from './book-borrow/book-borrow';
import BookHistory from './borrow-history/borrow-history';
import BookCollection from './book-collection/book-collection';

const Menu = TabNavigator({
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
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
        fontWeight:'bold'
    },
    style: {
        backgroundColor: '#43A047',
    },
  },
  tabBarPosition: 'bottom'
});

export default Menu;