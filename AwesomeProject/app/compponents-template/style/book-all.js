import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  itemContainer: {
   flex: 1, flexDirection: "row", paddingBottom: 10, paddingTop: 10, borderBottomColor: "lightgrey", borderBottomWidth: 1
  },
  imageContainer:{
   justifyContent: 'center', alignItems: "center",  flex: 2
  },
  bookContainer: {
   paddingRight:10, flex: 5
  },
  titleView:{
    paddingBottom: 2
  },
  titleText:{
    fontWeight: "bold", fontStyle: "italic", fontSize: 15
  },
  authorView:{
    paddingBottom: 5
  },
  iconView:{
    position:'absolute',
    bottom:0
  }
});

export default Styles;