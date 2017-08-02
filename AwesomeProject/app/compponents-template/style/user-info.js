import { StyleSheet } from 'react-native';
import Themes from './../../src/themes/themes'

const Styles = StyleSheet.create({
  user: {
    height:'100%',
    backgroundColor:'#f0f0f0',
    justifyContent:'space-between',
  },
  aboutView:{
    height:50,
    backgroundColor:'white',
    marginTop:10,
    marginBottom:10,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  aboutIcon:{
    marginLeft:10
  },
  aboutText:{
    fontSize: 16,
  },
  bottomView:{
    marginBottom:10
  },
  button: {
    backgroundColor: '#FFF',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
  }
});

export default Styles;