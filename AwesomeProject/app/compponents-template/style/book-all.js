import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  titleView:{
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft:10,
    width:'90%'
  },
  title: {
    marginRight: 80
  },
  statusIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 200,
    paddingTop: 10,
    paddingRight:10
  },
  icon: {
   // marginRight: 10,
    
  }
});

export default Styles;