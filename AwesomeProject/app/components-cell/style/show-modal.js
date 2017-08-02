import { StyleSheet } from 'react-native';
import Themes from './../../src/themes/themes'

const Styles = StyleSheet.create({
  modelContainer:{
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
    marginTop:'10%',
    marginLeft:'10%',
    marginRight:'10%',
    borderRadius: 10,
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:20,
    paddingRight:20
  },
  operation:{
    width:'100%',
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  closeButton: {
    backgroundColor: '#ea4335',
    paddingVertical: 10,
    marginTop: 20,
    marginRight:10
  },
  linkButton: {
    backgroundColor: Themes.color,
    paddingVertical: 10,
    marginTop: 10,
  },
  ButtonText: {
    color: "#FFF",
    paddingLeft:10,
    paddingRight:10
  }
});

export default Styles;