import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  itemContainer: {
   flex: 1, flexDirection: "row", paddingBottom: 10, paddingTop: 10, borderBottomColor: "lightgrey", borderBottomWidth: 6 
  },
  imageContainer:{
   justifyContent: 'center', alignItems: "center", paddingLeft: 8, flex: 2
  },
  bookContainer: {
   paddingLeft: 15, paddingTop: 6, paddingBottom: 6, flex: 4
  },
  statusIcon: {
   flex: 1, borderLeftWidth: 2, borderLeftColor: "grey", justifyContent: 'center', alignItems: "center" 
  },
});

export default Styles;