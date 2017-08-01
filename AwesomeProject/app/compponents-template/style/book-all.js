import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  all: {
   flex: 1
  },
  bookFooter:{
    height: 50 
  },
  noBookView:{
    flex: 1, flexDirection: "row", justifyContent: "center", alignItems: 'center'
  },
  noBookText:{
    color: 'red', fontSize: 17
  }
});

export default Styles;